# ASKANDER PROJECT CONTEXT

- project name: KinSilver
- repo path: /Users/askander/dev/apps/kinSilver
- dev port: 5193
- prod preview port: 5194
- prod domain: kinsilver.com
- prod output: dist-prod
- Cloudflare type: Pages
- prod build command: npm run build
- prod preview command: npm run preview:prod

## Public/Prod Rules

- public/prod may show product story, product pages, materials, care, FAQ, journal, waitlist, public quality standards
- public/prod must not expose supplier intelligence, supplierOntology, qualityOntology identifiers, launchGate, checkoutGate, private scoring, private workflows, vendor qualification logic, internal roadmap, prompts, secrets, or .env

## Cloudflare Pages Settings

- Build command: npm run build
- Output directory: dist-prod
- Note: use npm run build because it aliases to the safe production pipeline.
