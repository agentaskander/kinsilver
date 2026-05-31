# kinSilver Launch Gate

kinSilver is now a US-first premium heirloom gifting brand. The website may run in first collection / coming soon mode, publish editorial SEO content, and collect waitlist demand. Store checkout must remain disabled until every supplier requirement below is confirmed in writing and sample review is complete.

## Required Supplier Confirmation

- Brass base confirmed as lead-free eco-brass.
- .999 fine silver plating confirmed.
- Plating thickness confirmed at minimum 20 microns.
- Food safety certification received for infant food-contact use.
- Zero nickel confirmed.
- Physical samples shipped, engraved, inspected, and approved.
- Landed unit cost confirmed under $15.

## Checkout Rule

Do not enable paid checkout, preorders, deposits, or buy buttons until all gate items are approved.

Allowed before approval:

- Landing page
- Brand story
- Product education
- Email interest capture
- Supplier outreach
- Sample review
- Editorial SEO journal pages
- Shopify data modeling without live checkout

Blocked before approval:

- Checkout
- Paid preorder
- "In stock" language
- Solid sterling claims for plated products
- Medical or health benefit claims
- UK hallmark dependence for US launch positioning
- Religious-only framing

## Open TODOs

- Validate US demand through baby shower, newborn, grandparent, godparent, and keepsake search intent.
- Shortlist suppliers that can document the brass base and plating stack.
- Request food-contact, nickel-free, and plating-thickness documentation.
- Order engraved samples from at least two suppliers.
- Inspect edge finish, plating consistency, engraving clarity, and gift-box presentation.
- Confirm landed cost model below $15 per entry spoon unit.
- Update `src/data/kinsilverOntology.ts` gate statuses only after evidence is received.

## Shopify Integration Readiness

- Keep product, collection, occasion, persona, and SEO structures in `src/data/kinsilverOntology.ts`.
- Map products to Shopify products only after supplier gate approval.
- Map occasions and future collections to Shopify collections.
- Replace static waitlist submission with a Shopify customer tag, email provider form action, or app proxy endpoint.
- Do not expose cart or checkout UI while `checkoutEnabled` is false and `supplierOntology.checkoutGate` is not `approved`.
