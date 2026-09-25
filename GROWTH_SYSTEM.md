# MH Connect Website Growth System

The website is designed around one simple loop:

**Find MH Connect → send a structured enquiry → receive a clear quote → complete the service → receive warranty/aftercare → leave an honest review → return when needed.**

## What the website now does

1. **Local discovery**
   - Croydon and Lower Addiscombe location language on the important pages.
   - Correct address, phone number, email and opening hours across the website and structured business data.
   - Dedicated service pages for repairs, accessories, printing, watches and jewellery.
   - Passport and ID photos sit inside the Printing page so customers have one clear place for document and photo services.
   - Official hours: Monday–Saturday 9:00 AM–7:30 PM; Sunday 10:00 AM–6:00 PM.

2. **Structured enquiries**
   - Every website form creates a reference in the format `MHC-YYYYMMDD-XXXXXX`.
   - The form prepares a complete WhatsApp message instead of sending a vague “how much?” enquiry.
   - WhatsApp forms do not ask customers to re-enter their phone number.
   - Repair enquiries ask for the model, issue and details needed to check price, stock, time and warranty.

3. **Trust before the sale**
   - Repair quality, deposit and warranty expectations are explained before the customer agrees.
   - No unsupported promises about exact completion times, genuine parts or accreditation.
   - The real shop address, opening hours and storefront are easy to find.

4. **Aftercare and retention**
   - `warranty.html` gives customers one place to understand cover and request a warranty inspection.
   - `review.html` is a simple page to send after a successful repair, sale or service.
   - Customers with a concern are routed to support before being asked to review.

5. **Consent-aware measurement**
   - Google Analytics 4 uses measurement ID `G-GKG8YE4YRN` only after a visitor allows analytics.
   - The website measures WhatsApp, phone, email, directions, form-generated leads and review clicks without sending form content, contact details or enquiry references to Analytics.
   - Advertising signals are disabled, and visitors can change their analytics choice from the website footer.

6. **Truth and compliance rules**
   - Use only the approved storefront and shop-interior photographs. Service pages use clear text and a consistent icon system rather than generated product scenes.
   - Do not publish a price, stock claim, turnaround time or warranty term unless the shop can honour it.

## Daily operating routine

### Opening check — 10 minutes

- Check new WhatsApp and email enquiries.
- Copy each real repair enquiry into the MH Connect Organizer.
- Reply with the price, part option, estimated time, warranty and deposit requirement.
- Update any job waiting for a part or ready for collection.

### During each job

- Use the website enquiry reference in the first message where available.
- For expensive or special-order parts, record the written agreement and deposit before ordering.
- Move every lead through: `New → Quoted → Booked / Waiting for Part → In Progress → Ready → Collected → Review Requested`.
- Record payment and warranty before or at collection.

### At collection

- Let the customer test the relevant functions.
- Send the PDF warranty or receipt.
- Explain aftercare and what is not covered.
- When the customer is satisfied, send the `review.html` link.

### Closing check — 10 minutes

- Follow up jobs still ready for collection.
- Record unpaid balances and parts that need reordering.
- Note the number of enquiries, completed jobs and review requests sent that day.

## Weekly growth routine

| Day | Main task | Result to record |
| --- | --- | --- |
| Monday | Check common repair enquiries and stock gaps | Parts to reorder and prices to review |
| Tuesday | Add or refresh five strong eBay/Vinted listings | Listings published and enquiries |
| Wednesday | Publish one useful Google Business Profile update | Post published |
| Thursday | Improve one website/service offer or shop display | Change completed |
| Friday | Ask satisfied customers for reviews | Requests sent and reviews received |
| Saturday | Review sales, repair margin and popular products | Weekly figures |
| Sunday | Light planning only | Three priorities for next week |

## Core numbers to monitor

- Website WhatsApp clicks
- Structured enquiries generated
- Quotes accepted
- Repair jobs completed
- Average repair value and gross margin
- Printing jobs and average order value
- Passport and ID photo enquiries and completed visits
- Accessories sold with a repair
- Review requests sent and new Google reviews received
- Repeat customers
- Jobs waiting for collection and unpaid balances

## Lead automation

The form system sends a matching draft lead to the private Google Sheet configured through `LEAD_CAPTURE_ENDPOINT` in `script.js`. The Apps Script, lead stages, duplicate-reference check and optional daily follow-up digest are documented in `AUTOMATION_SETUP.md`.

Keep customer data out of public website code and never put Sheet credentials or private customer records in this GitHub Pages repository.

The website should continue to use WhatsApp as the fast customer channel, while the Organizer remains the private source of truth for jobs, deposits, payments, stock and warranties.
