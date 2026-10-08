# Tropical Snow: Web + Mobile Ordering Platform

Tropical Snow / Seafood & Grill is an Atlanta mobile food vendor (Hawaiian-style shave ice, cheesesteaks, wings, shrimp, fish) that appears at festivals and events. We are building a futuristic website and a native iOS/Android ordering app (Starbucks-style order-ahead and pay) on one shared backend.

Source documents (read before building anything):
- @docs/requirements.md (Digital Experience Requirements v1.0, FR-x and AI-x IDs, MoSCoW priorities)
- @docs/architecture.md (architecture overview: shared vs channel-specific features, AWS services, hosting)

If this file and the requirements doc conflict, stop and ask. Do not guess.

## Core principle

One shared backend, one API contract, three front ends. Data and business logic are built once and shared. Screens and device features are built per platform.

| Surface | Tech | Notes |
| --- | --- | --- |
| Website (PWA) | Next.js (App Router, TypeScript) | Marketing, live menu, events, full ordering |
| Mobile app | Expo (React Native), Expo Router, EAS | Same ordering plus push, wallet, geofencing, AR later |
| Back office | Next.js `/admin` and `/kitchen` routes | Installable tablet PWA; menu, events, promos, live order queue |

Customers can order on the website OR the app. Both must reach feature parity on the core flow: menu, customize, pay, pickup, status.

## Stack (AWS)

- **Website hosting:** AWS Amplify Hosting (managed Next.js SSR; sets up CloudFront and S3). Back office uses the same hosting.
- **API:** AWS AppSync (GraphQL) + Lambda. API Gateway only for webhooks (Square).
- **Auth:** Amazon Cognito (email, phone OTP, Apple, Google, guest checkout). Cognito groups for owner vs. staff roles.
- **Data:** DynamoDB (orders, menu, events, loyalty mirror). S3 + Athena for reporting.
- **Payments:** Square (Web Payments SDK on web, In-App Payments SDK in app, Apple Pay and Google Pay, Gift Cards and Loyalty APIs). Card data is tokenized and never stored by us.
- **Messaging:** SNS (push to APNs/FCM), SES (email), AWS End User Messaging (SMS). Do NOT use Amazon Pinpoint; AWS ends support for it on October 30, 2026.
- **Maps and geo:** Amazon Location Service (Mapbox is an acceptable swap).
- **Media:** S3 + CloudFront, MediaConvert for video.
- **AI:** Amazon Bedrock (Claude via tool use for the ordering assistant), Guardrails, Knowledge Bases for FAQs.
- **CMS:** headless CMS for editorial content (Sanity recommended; Payload on AWS if everything must stay in AWS). It sits behind the shared API client so it can be swapped.
- **Infrastructure as code:** SST (or CDK) for the backend. Amplify Hosting handles the website deploy separately.
- **CI/CD:** GitHub Actions; EAS for mobile builds and over-the-air updates.
- **Observability:** CloudWatch, Sentry, PostHog.

## Monorepo layout (pnpm + Turborepo, TypeScript everywhere)

```
apps/
  web/          Next.js site + /admin + /kitchen
  mobile/       Expo app
packages/
  schema/           Zod types: Order, MenuItem, Event, etc. (single source of truth)
  api-client/       Typed API calls + TanStack Query hooks
  design-tokens/    Navy, ice-cyan, coral palette, spacing, type
  ordering-logic/   Cart math, tax, customization rules, ready-time display
  ai/               Assistant tool definitions and prompts
infra/          SST/CDK stacks (auth, api, data, messaging, media)
docs/           requirements.md, architecture.md
```

Rules:
- Share tokens, logic and data hooks across web and app. Build UI components per platform; do not force one UI library across both.
- Never duplicate cart, tax, pricing or customization logic in an app. It lives in `packages/ordering-logic`.
- All API types come from `packages/schema`. No hand-written duplicate types.

## Data model: three kinds of data

| Kind | Examples | Lives in |
| --- | --- | --- |
| Editorial content | Hero video, brand story, banners, FAQs, home layout | Headless CMS |
| Catalog and events | Menu items, prices, customization options, event schedule | DynamoDB (option logic), synced to Square for payment; CMS for photos and copy |
| Live operational state | Sold-out toggles, order queue, wait times | DynamoDB + AppSync only, NEVER the CMS |

Content types carry a `channel` field (web, app, both) and start/end dates. Screens are composed from a fixed set of blocks (hero, banner, carousel, featured item, event card, promo strip) that web and app each render natively.

## Order flow (must be identical for web and app)

Client -> shared API -> Square payment -> order record in DynamoDB -> DynamoDB Streams -> AppSync subscription -> kitchen display -> staff marks ready -> order alerts (push, SMS or email) back to the customer.

## Non-negotiable engineering rules

- **Idempotency:** every order creation carries an idempotency key so retries never duplicate orders.
- **Offline tolerance:** festival connectivity is unreliable. Both channels keep an offline cart and queue mutations until signal returns.
- **Graceful degradation:** if the AI service is down, ordering must still work.
- **Security:** PCI-DSS via Square tokenization; TLS in transit, encryption at rest; role-based access in the back office; audit logging for admin actions.
- **Accessibility:** WCAG 2.2 AA on web and app, captions on video.
- **Performance:** mobile LCP under 2.5s on 4G; app cold start under 3s; lazy-load and CDN-serve all media.
- **Secrets:** never commit keys. Use AWS Secrets Manager / SSM Parameter Store; local values in `.env.local` (gitignored).
- Do not touch Square production credentials. Use the Square sandbox until told otherwise.

## Build order (follow the phases; do not jump ahead)

1. **Foundation (start here):** monorepo scaffold, shared packages, Cognito auth, API and schema, DynamoDB tables, website shell with design tokens, live menu and events, CMS wiring, back-office basics.
2. **Order and Pay:** cart, customization, Square payments, pickup scheduling, order status, kitchen queue, loyalty v1. Web ordering ships first.
3. **Native apps:** Expo app consuming the existing API and packages; push, wallet, re-order, geo-alerts.
4. **AI and advanced:** conversational ordering, recommendations, support bot, wait-time prediction (start as a queue-length heuristic), AR preview, Spanish.
5. **Optimize:** analytics-driven improvements, campaigns.

Build the API, auth and shared packages in Phase 1 even though only the website uses them at first, so Phase 3 is mostly UI work.

## Working agreement

- Use plan mode for anything touching auth, payments, data schema or infrastructure. Show the plan before changing files.
- Work in small steps. After each, run type-check, lint and tests, and report what changed.
- Add the real build, test and deploy commands to this file as soon as they exist.
- Reference requirement IDs (for example FR-17, AI-1) in commit messages and PR descriptions.
- Ask before choosing between options listed under Open decisions.

## Open decisions (ask, do not assume)

- Should web ordering match the app at launch, or start lighter? Working assumption: parity on the core flow.
- Do the owners already use Square or another POS at events?
- Who edits content day to day: owners only, or event staff too? (affects CMS choice)
- Is web push on the installed PWA enough for order status, or must all notifications go through the native app?

## Out of scope for now

Third-party delivery marketplaces, physical loyalty cards, franchise management, languages beyond English (Spanish is a fast-follow).
