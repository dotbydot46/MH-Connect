# MH Connect website

Official multi-page website for MH Connect, 59 Lower Addiscombe Road, Croydon CR0 6PQ.

Live site: https://mhconnect.uk/

## Customer journey

- Find the correct service quickly.
- Send a structured WhatsApp enquiry with a unique reference.
- Receive price, availability, likely timing and the next step before deciding.
- Return to the warranty and aftercare page when support is needed.
- Leave an honest review after a successful service.

## Main pages

- Home
- Phone repairs
- Mobile accessories
- Printing, documents and passport photos
- Watches and jewellery care
- Contact and directions
- Warranty and aftercare
- Review support
- Privacy notice

## Visual policy

The public site uses only two approved real photographs: the MH Connect storefront and shop interior. All other service explanation uses text and one consistent line-icon system. Generated product or service scenes are not used.

All public pages share `site.css`; page-specific override stylesheets are not used. To preview or validate the multi-page build locally:

```sh
npm install
npm run dev
npm run build
```

## Operations and automation

See `GROWTH_SYSTEM.md` for the customer and staff workflow. See `AUTOMATION_SETUP.md` for the optional private Google Sheet lead connection. The website works without that connection; WhatsApp remains the primary customer channel.
