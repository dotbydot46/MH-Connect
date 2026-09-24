/**
 * MH Connect website lead capture for a private Google Sheet.
 *
 * Setup:
 * 1. Create a private Google Sheet and open Extensions > Apps Script.
 * 2. Paste this file into the bound project.
 * 3. Run setupLeadSheet() once from the bound script, then deploy as a Web app.
 * 4. Paste the deployment URL into LEAD_CAPTURE_ENDPOINT in script.js.
 *
 * Do not put customer records or Google credentials in the website repository.
 */

const CONFIG = Object.freeze({
  SPREADSHEET_ID: "PASTE_PRIVATE_SHEET_ID_HERE",
  SHEET_NAME: "Website Leads",
  OWNER_EMAIL: "info@mhconnect.uk",
  ALLOWED_PAGE_PREFIX: "/MH-Connect/"
});

const SPREADSHEET_ID_PROPERTY = "MH_CONNECT_SPREADSHEET_ID";

const HEADERS = [
  "Created",
  "Reference",
  "Status",
  "Enquiry type",
  "Customer name",
  "Service",
  "Device / item",
  "Issue / message",
  "Quantity",
  "Preference",
  "Contact method",
  "Source page",
  "Last updated",
  "Next follow-up",
  "Notes"
];

const LEAD_STATUSES = [
  "New",
  "Quoted",
  "Booked",
  "Waiting for part",
  "In progress",
  "Ready",
  "Collected",
  "Review requested",
  "Closed"
];

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("MH Connect")
    .addItem("Set up lead sheet", "setupLeadSheet")
    .addItem("Send follow-up digest", "sendDailyLeadDigest")
    .addItem("Create daily digest", "createDailyDigestTrigger")
    .addToUi();
}

function doGet() {
  return jsonResponse_({ ok: true, service: "MH Connect lead capture" });
}

function doPost(event) {
  try {
    const payload = JSON.parse(event && event.postData && event.postData.contents || "{}");
    validatePayload_(payload);

    const sheet = getLeadSheet_();
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      if (referenceExists_(sheet, payload.reference)) {
        return jsonResponse_({ ok: true, duplicate: true, reference: payload.reference });
      }

      const details = payload.details || {};
      const now = new Date();
      sheet.appendRow([
        safeCell_(payload.createdAt || now.toISOString()),
        safeCell_(payload.reference),
        "New",
        safeCell_(payload.enquiryType),
        safeCell_(details.name),
        safeCell_(details.service),
        safeCell_(details.model || details.device || details.item),
        safeCell_(details.issue || details.message),
        safeCell_(details.quantity),
        safeCell_(details.preference),
        safeCell_(details.contact_method),
        safeCell_(payload.page),
        now,
        "",
        ""
      ]);
    } finally {
      lock.releaseLock();
    }

    return jsonResponse_({ ok: true, reference: payload.reference });
  } catch (error) {
    console.error(error);
    return jsonResponse_({ ok: false, error: "Invalid enquiry" });
  }
}

function setupLeadSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) {
    throw new Error("Open Apps Script from the MH Connect Leads spreadsheet, then run setupLeadSheet again.");
  }

  PropertiesService.getScriptProperties().setProperty(
    SPREADSHEET_ID_PROPERTY,
    spreadsheet.getId()
  );

  const sheet = getLeadSheet_(spreadsheet);
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, HEADERS.length)
    .setFontWeight("bold")
    .setBackground("#102a56")
    .setFontColor("#ffffff");
  sheet.getRange(2, 3, Math.max(sheet.getMaxRows() - 1, 1), 1).setDataValidation(
    SpreadsheetApp.newDataValidation()
      .requireValueInList(LEAD_STATUSES, true)
      .setAllowInvalid(false)
      .build()
  );
  sheet.autoResizeColumns(1, HEADERS.length);
  sheet.setColumnWidth(8, 340);
  sheet.setColumnWidth(15, 280);
}

function sendDailyLeadDigest() {
  const sheet = getLeadSheet_();
  if (sheet.getLastRow() < 2) return;

  const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length).getDisplayValues();
  const active = values.filter(row => ["New", "Quoted", "Booked", "Waiting for part", "Ready"].includes(row[2]));
  if (!active.length) return;

  const lines = active.slice(0, 40).map(row =>
    `${row[1]} | ${row[2]} | ${row[3]} | ${row[4] || "No name"}${row[13] ? ` | Follow up: ${row[13]}` : ""}`
  );

  MailApp.sendEmail({
    to: CONFIG.OWNER_EMAIL,
    subject: `MH Connect follow-up list — ${active.length} active lead${active.length === 1 ? "" : "s"}`,
    body: [
      "Active website enquiries requiring attention:",
      "",
      ...lines,
      "",
      "Open the private Website Leads sheet to update status, notes and next follow-up."
    ].join("\n")
  });
}

function createDailyDigestTrigger() {
  ScriptApp.getProjectTriggers()
    .filter(trigger => trigger.getHandlerFunction() === "sendDailyLeadDigest")
    .forEach(trigger => ScriptApp.deleteTrigger(trigger));

  ScriptApp.newTrigger("sendDailyLeadDigest")
    .timeBased()
    .everyDays(1)
    .atHour(9)
    .create();
}

function getLeadSheet_(spreadsheetOverride) {
  const configuredId = CONFIG.SPREADSHEET_ID === "PASTE_PRIVATE_SHEET_ID_HERE"
    ? PropertiesService.getScriptProperties().getProperty(SPREADSHEET_ID_PROPERTY)
    : CONFIG.SPREADSHEET_ID;

  const spreadsheet = spreadsheetOverride || (configuredId
    ? SpreadsheetApp.openById(configuredId)
    : null);

  if (!spreadsheet) throw new Error("Run setupLeadSheet once before using the web app.");
  return spreadsheet.getSheetByName(CONFIG.SHEET_NAME) || spreadsheet.insertSheet(CONFIG.SHEET_NAME);
}

function validatePayload_(payload) {
  const reference = String(payload.reference || "");
  const page = String(payload.page || "");
  if (!/^MHC-\d{8}-[A-Z0-9]{6}$/.test(reference)) throw new Error("Invalid reference");
  if (!page.startsWith(CONFIG.ALLOWED_PAGE_PREFIX) && page !== "/") throw new Error("Invalid page");
  if (JSON.stringify(payload).length > 12000) throw new Error("Payload too large");
}

function referenceExists_(sheet, reference) {
  if (sheet.getLastRow() < 2) return false;
  return Boolean(sheet.getRange(2, 2, sheet.getLastRow() - 1, 1)
    .createTextFinder(reference)
    .matchEntireCell(true)
    .findNext());
}

function safeCell_(value) {
  const text = String(value || "").trim().slice(0, 2000);
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}

function jsonResponse_(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
