# MH Connect enquiry automation

The website creates a unique reference, adds the enquiry to the private MH Connect lead Sheet and opens a structured WhatsApp message without asking the customer to complete a second form.

## Recommended flow

1. A customer completes a short service form.
2. The website creates an `MHC-YYYYMMDD-XXXXXX` reference.
3. WhatsApp opens with the service details and reference.
4. A matching draft lead is added to the `Website Leads` sheet.
5. Staff update the lead through `New → Quoted → Booked → In progress → Ready → Collected → Review requested`.
6. A daily email lists active enquiries that still need attention.

## Reconnect or replace the private Google Sheet

1. Create a private Google Sheet for MH Connect leads.
2. Open **Extensions → Apps Script** from that Sheet.
3. Replace the editor contents with `automation/google-apps-script.gs`.
4. Leave `SPREADSHEET_ID` unchanged. The setup function securely records the bound Sheet ID for the web app.
5. Run `setupLeadSheet` once and approve the requested permissions.
6. Use **Deploy → New deployment → Web app**. Run as the owner and choose the narrowest access setting that still accepts public website submissions.
7. If the deployment URL changes, replace `LEAD_CAPTURE_ENDPOINT` near the top of `script.js`.
8. Submit one test enquiry and confirm the website reference matches the new Sheet row.
9. Run `createDailyDigestTrigger` only if the 9 AM follow-up email is wanted.

If MH Connect later moves to a custom domain, update `ALLOWED_PAGE_PREFIX` in the Apps Script and keep the privacy notice aligned with how enquiry records are stored and retained.

## Data and safety rules

- Keep the Sheet private and use two-step verification on the Google account.
- Never add Google credentials, customer exports or private Sheet URLs to the public repository.
- Store only the details needed to answer and manage an enquiry.
- Do not send document files through the lead endpoint; printing files should continue through the agreed email or WhatsApp route.
- Delete enquiries when they are no longer required for service, accounting, warranty or legal records.
- Test the flow after any form or Sheet-column change.

## Measurement connection

The site already emits privacy-conscious events for WhatsApp, calls, email, directions and generated enquiries through `dataLayer`. Analytics should be connected only after choosing the consent approach and updating the privacy notice if required.
