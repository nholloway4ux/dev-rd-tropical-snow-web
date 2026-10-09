# Tropical Snow: Web + Mobile Ordering Platform

Tropical Snow / Seafood & Grill is an Atlanta mobile food vendor (Hawaiian-style shave ice, cheesesteaks, wings, shrimp, fish) that appears at festivals and events. We are building a futuristic website and a native iOS/Android ordering app (Starbucks-style order-ahead and pay) on one shared backend.

Source documents (read before building anything):
- @docs/requirements.md (Digital Experience Requirements v1.0, FR-x and AI-x IDs, MoSCoW priorities)
- @docs/architecture.md (architecture overview: shared vs channel-specific features, services, hosting)
- @docs/design.md (brand palette, type rules, 15 AI design anti-patterns, spacing checklist — read before writing any UI)

If this file and the requirements doc conflict, stop and ask. Do not guess.

## Core principle

One shared backend, one API contract, three front ends. Data and business logic are built once and shared. Screens and device features are built per platform.

| Surface | Tech | Notes |
| --- | --- | --- |
| Website (PWA) | Next.js (App Router, TypeScript) | Marketing, live menu, events, full ordering |
| Mobile app | Expo (React Native), Expo Router, EAS | Same ordering plus push, wallet, geofencing, AR later |
| Back office | Next.js `/admin` and `/kitchen` routes | Installable tablet PWA; menu, events, promos, live order queue |

Customers can order on the website OR the app. Both must reach feature parity on the core flow: menu, customize, pay, pickup, status.

## Stack

- **Website hosting:** Vercel (managed Next.js SSR; Edge Network CDN; Git-integrated deploys; preview URL per pull request). Back office uses the same Vercel project.
- **API:** Supabase (PostgREST auto-generated REST API + Realtime subscriptions for live order status). Supabase Edge Functions for business logic. Vercel API routes for Square webhooks.
- **Auth:** Supabase Auth (email, phone OTP, Apple, Google, anonymous guest sessions). Row Level Security (RLS) policies for owner vs. staff roles — no separate auth service needed.
- **Data:** Supabase Postgres (orders, menu, events, loyalty mirror). Supabase Realtime for the live kitchen queue. Supabase Storage for media uploads.
- **Payments:** Square (Web Payments SDK on web, In-App Payments SDK in app, Apple Pay and Google Pay, Gift Cards and Loyalty APIs). Card data is tokenized and never stored by us.
- **Messaging:** Resend (transactional email and receipts); Expo Push + FCM/APNs via Expo's notification service (push); Twilio (SMS order alerts and campaigns).
- **Maps and geo:** Mapbox (live event locations, directions, geofencing for geo-alerts).
- **Media:** Supabase Storage + Vercel CDN for images; Mux or Cloudflare Stream for video (hero loop, brand story).
- **AI:** Anthropic API directly (Claude for conversational ordering, recommendations, support bot). Called from Supabase Edge Functions; guardrails enforced in code.
- **CMS:** Sanity (headless CMS for editorial content). Sits behind the shared API client so it can be swapped.
- **Infrastructure:** Supabase CLI (database migrations and local dev); Vercel CLI (deploys). No separate IaC tool needed for Phase 1–3.
- **CI/CD:** GitHub Actions; EAS for mobile builds and over-the-air updates.
- **Observability:** Sentry, PostHog.

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
infra/          Supabase migrations and Vercel config
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
| Catalog and events | Menu items, prices, customization options, event schedule | Supabase Postgres (option logic), synced to Square for payment; CMS for photos and copy |
| Live operational state | Sold-out toggles, order queue, wait times | Supabase Postgres + Realtime only, NEVER the CMS |

Content types carry a `channel` field (web, app, both) and start/end dates. Screens are composed from a fixed set of blocks (hero, banner, carousel, featured item, event card, promo strip) that web and app each render natively.

## Order flow (must be identical for web and app)

Client -> Supabase Edge Function -> Square payment -> order record in Supabase Postgres -> Supabase Realtime -> kitchen display -> staff marks ready -> order alerts (Expo Push, Twilio SMS, Resend email) back to the customer.

## Non-negotiable engineering rules

- **Idempotency:** every order creation carries an idempotency key so retries never duplicate orders.
- **Offline tolerance:** festival connectivity is unreliable. Both channels keep an offline cart and queue mutations until signal returns.
- **Graceful degradation:** if the AI service is down, ordering must still work.
- **Security:** PCI-DSS via Square tokenization; TLS in transit, encryption at rest; role-based access in the back office; audit logging for admin actions.
- **Accessibility:** WCAG 2.2 AA on web and app, captions on video.
- **Design hygiene:** before merging any UI, check `docs/design.md`. Eliminate all 15 AI design anti-patterns. Run `npx impeccable detect` and fix every finding.
- **Performance:** mobile LCP under 2.5s on 4G; app cold start under 3s; lazy-load and CDN-serve all media.
- **Secrets:** never commit keys. Use Vercel environment variables and Supabase secrets for deployed environments; local values in `.env.local` (gitignored).
- Do not touch Square production credentials. Use the Square sandbox until told otherwise.

## Build order (follow the phases; do not jump ahead)

1. **Foundation (start here):** monorepo scaffold, shared packages, Supabase Auth, API and schema, Supabase Postgres tables, website shell with design tokens, live menu and events, CMS wiring, back-office basics.
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
