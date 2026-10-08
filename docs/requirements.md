# Tropical Snow Seafood & Grill: Digital Experience Requirements Document

Futuristic Website Redesign · AI-Powered Native Mobile Ordering App

| | |
| --- | --- |
| Prepared for | Earnest & Sharon, Founders, Tropical Snow / Seafood & Grill |
| Current site reviewed | https://tropicalsnow.net |
| Document type | Business & Technical Requirements (BRD + PRD) |
| Version | 1.0, draft for stakeholder review |
| Date | July 7, 2026 |
| Status | For review & approval |

---

## 1. Executive Summary

Tropical Snow / Seafood & Grill is an Atlanta-based, family-founded brand known for its authentic Hawaiian-style signature shave ice and a growing menu of grill and seafood favorites: Philly-style cheesesteaks, chicken & cheese subs, and fried wings, shrimp, and fish. The business operates primarily as a mobile vendor appearing at festivals and events across the region, and has grown steadily since it was founded in 2020.

The current website (tropicalsnow.net) is a three-page brochure built on a template website builder. It effectively tells the brand's origin story but offers no online ordering, no live menu with pricing, no event schedule, and no mobile application. Customers cannot browse, customize, pay, or arrange pickup digitally. Every transaction still happens in person at the point of sale.

This document defines the requirements for two connected products: (1) a rebuilt, mobile-first, futuristic website and (2) a native mobile ordering application for iOS and Android that lets customers order and pay ahead, in the same effortless way customers order through the Starbucks app. Both products are designed around a shared platform, embedded AI, and a premium visual language built on high-end photography and video.

> **Vision statement:** "Tropical Snow should feel like the future of a food festival in your pocket. You see where we are, watch our snow being made in cinematic detail, let an AI concierge build your perfect order, pay in a tap, and skip the line."

### 1.1 What success looks like

- Customers place and pay for orders ahead of time and pick up at the window with little or no wait, even at a busy festival.
- A visually striking, futuristic website that loads fast on phones and turns first-time browsers into repeat customers.
- An AI-driven experience that recommends flavors, answers questions, and personalizes every visit.
- A single dashboard where Earnest and Sharon manage the menu, prices, event locations, and promotions in real time.
- A loyalty program that rewards regulars and drives repeat orders between events.

---

## 2. Current State Analysis

The following assessment is based on a review of the live site at tropicalsnow.net (Home, About, and Contact pages) conducted for this document.

### 2.1 What exists today

| Area | Current state |
| --- | --- |
| Platform | Template site on a hosted website builder; three pages only (Home, About, Contact). |
| Content | Brand origin story, a short "we are growing" note, a founders section, and a photo gallery placeholder. |
| Menu | Menu items are mentioned in prose (shave ice, cheesesteaks, chicken subs, wings, shrimp, fish) but there is no structured menu, no photos per item, and no pricing. |
| Ordering | None. No cart, checkout, payment, or pickup scheduling. |
| Mobile app | None exists. |
| Locations | Described only as "found at a local Festival Event near you". No map, schedule, or live location. |
| Engagement | A newsletter sign-up and a basic contact form for event inquiries. |
| Contact | Phone 770-912-2373; email Tropicalsnow2021@gmail.com; Facebook @tropicalsnow2021; Atlanta, GA. |

### 2.2 Gaps & opportunities

- **No revenue online.** Every sale requires an in-person interaction; there is no ahead-of-time ordering to capture demand or reduce wait times.
- **No live menu or pricing.** Customers can't see what's available or what it costs before arriving.
- **Hard to find.** As a mobile vendor, the single biggest question, "where are you today?", is unanswered on the site.
- **No repeat-customer loop.** No accounts, loyalty, order history, or re-order. Nothing brings a festival visitor back next weekend.
- **Dated visuals.** The template look doesn't match the premium, sensory nature of the product or the futuristic brand ambition.

### 2.3 Reference model: the Starbucks ordering pattern

Starbucks' mobile order-and-pay experience is the target interaction model. The elements worth emulating (adapted to a mobile food vendor) are:

- Browse a rich, photo-forward menu with full customization before adding to cart.
- Choose a pickup location, then a time; see an estimated ready time.
- Pay in-app with a stored card, digital wallet, or reloadable balance.
- Earn stars/points automatically and redeem them for rewards.
- Re-order favorites in one tap; receive real-time order-status notifications.

> **Adaptation note: Tropical Snow is a mobile vendor, not a fixed store.** Unlike Starbucks' fixed cafés, Tropical Snow moves between festivals and events. The ordering flow must be anchored to a live "where we are now / upcoming events" system rather than a static store list. Pre-ordering is tied to a specific event and service window, with support for on-site pickup, and a separate flow for catering / large event bookings.

---

## 3. Project Objectives & Goals

| # | Objective | How we measure it |
| --- | --- | --- |
| O1 | Enable mobile order-ahead and payment for pickup at events. | % of orders placed digitally; average wait time reduced. |
| O2 | Launch native iOS and Android apps mirroring the Starbucks convenience model. | App installs; monthly active users; app store rating ≥ 4.5. |
| O3 | Deliver a futuristic, mobile-first website with cinematic media. | Bounce rate down; mobile page-load < 2.5s; conversion up. |
| O4 | Embed AI across discovery, ordering, and support. | AI-assisted order rate; support deflection; recommendation uptake. |
| O5 | Answer "where are you?" with live locations and event schedule. | Map/schedule engagement; directions taps. |
| O6 | Build a repeat-customer loyalty loop. | Repeat order rate; reward redemptions; retention. |
| O7 | Give owners self-service control of menu, pricing, events, and promos. | Time to update menu/price; promos launched per month. |

---

## 4. Scope

### 4.1 In scope

- Responsive, mobile-first marketing + ordering website (rebuild).
- Native mobile apps for iOS and Android with full order-ahead & pay.
- Shared backend platform: menu, orders, payments, accounts, events, loyalty, notifications, content.
- Owner/admin dashboard and event-day "kitchen" order screen.
- AI features: recommendations, conversational ordering assistant, support chatbot, media/content tooling.
- Payments, digital wallets, and a reloadable balance.
- High-end photography/video production guidelines and a media asset library.
- Analytics, reporting, and standard legal/compliance (privacy, accessibility, PCI).

### 4.2 Out of scope (this phase)

- Third-party delivery marketplace integrations (e.g., DoorDash/Uber Eats), flagged as a future phase.
- Physical loyalty cards or dedicated hardware beyond a tablet/printer at the window.
- Franchise / multi-brand management.
- International localization beyond English (Spanish is a recommended fast-follow).

---

## 5. Stakeholders & User Personas

### 5.1 Stakeholders

| Stakeholder | Role / interest |
| --- | --- |
| Owners (Earnest & Sharon) | Product owners; approve menu, pricing, events, brand, and promotions. |
| Event / window staff | Receive and fulfill orders; update item availability during service. |
| Customers | Discover, order, pay, and pick up; join loyalty. |
| Development & design team | Build and maintain website, apps, and platform. |
| Payment / AI / maps providers | Third-party services integrated into the platform. |

### 5.2 Customer personas

**Persona A: "Festival-goer Maya."** At a crowded event, sees the Tropical Snow tent, doesn't want to wait in line. Wants to order from her phone, pay, and get a text when it's ready. Values speed, clear photos, and easy customization.

**Persona B: "Regular Marcus."** Loves the Philly cheesesteak and a specific shave ice combo. Wants one-tap re-orders, loyalty rewards, and notifications about which events Tropical Snow will attend next.

**Persona C: "Event planner Dana."** Organizes community events and weddings. Wants to browse a catering menu, request a booking, and get a quick response, a modern replacement for today's contact form.

---

## 6. Functional Requirements

Requirements are identified as FR-x and prioritized using MoSCoW: **M** (Must), **S** (Should), **C** (Could).

### 6.1 Accounts & profiles

| ID | Requirement | Pri. |
| --- | --- | --- |
| FR-1 | Sign up / log in via email, phone (OTP), Apple, and Google. | M |
| FR-2 | Guest checkout without a full account. | M |
| FR-3 | Saved profile: favorites, dietary/allergen preferences, saved payment methods, addresses. | M |
| FR-4 | Order history with one-tap re-order. | M |
| FR-5 | Manage notification and marketing preferences (opt-in/out). | M |

### 6.2 Menu & discovery

| ID | Requirement | Pri. |
| --- | --- | --- |
| FR-6 | Structured menu with categories (Shave Ice, Grill, Seafood, Sides, Drinks), each item with photo/video, description, price, and allergens. | M |
| FR-7 | Full customization: shave ice flavors & combos, toppings, portion sizes, cheesesteak/sub options, spice level, sides. | M |
| FR-8 | Real-time availability: staff can mark items sold out during an event. | M |
| FR-9 | Search, filter (dietary, spicy, popular), and "featured / new" merchandising. | S |
| FR-10 | Signature flavor story panels and cinematic "how our snow is made" media. | S |
| FR-11 | Nutrition / calorie display where available. | C |

### 6.3 Ordering & pickup (the Starbucks-style core)

| ID | Requirement | Pri. |
| --- | --- | --- |
| FR-12 | Add items to cart with customizations; edit quantities; see live subtotal, tax, and fees. | M |
| FR-13 | Select a pickup event/location from a live list of where Tropical Snow is today/upcoming. | M |
| FR-14 | Choose a pickup time window; app shows an AI-estimated ready time based on current queue. | M |
| FR-15 | Order-ahead scheduling for future events (pre-order before the vendor arrives). | S |
| FR-16 | Apply promo codes, loyalty rewards, and gift-card/balance credit at checkout. | M |
| FR-17 | Real-time order status (received → preparing → ready) with push/SMS notifications. | M |
| FR-18 | Digital order number / QR pickup code shown at the window. | M |
| FR-19 | Tip selection and post-order rating/feedback. | S |
| FR-20 | Catering / large-event booking request flow with quote handling. | S |

### 6.4 Payments & wallet

| ID | Requirement | Pri. |
| --- | --- | --- |
| FR-21 | In-app payment via card, Apple Pay, and Google Pay (PCI-compliant, tokenized). | M |
| FR-22 | Reloadable in-app balance / digital gift cards (Starbucks-style prepay). | S |
| FR-23 | Send a digital gift card to another person. | C |
| FR-24 | Automated receipts by email/in-app; refund & order-cancellation handling. | M |

### 6.5 Loyalty & engagement

| ID | Requirement | Pri. |
| --- | --- | --- |
| FR-25 | Points/"flakes" earned per order; tiers; redeemable rewards. | S |
| FR-26 | Personalized offers and birthday rewards. | S |
| FR-27 | Push, email, and SMS campaigns (e.g., "We're at the Atlanta Jazz Fest this Saturday"). | M |
| FR-28 | Referral / share-a-reward mechanic. | C |

### 6.6 Live locations & events

| ID | Requirement | Pri. |
| --- | --- | --- |
| FR-29 | Live map + list of current and upcoming event locations with dates, hours, and directions. | M |
| FR-30 | "Notify me when you're near me" geo-based alerts. | S |
| FR-31 | Add-to-calendar and social share for upcoming events. | C |

### 6.7 Owner / staff back office

| ID | Requirement | Pri. |
| --- | --- | --- |
| FR-32 | Admin dashboard: manage menu, pricing, photos, availability, and promotions in real time. | M |
| FR-33 | Event manager: create/schedule events, set service windows and locations. | M |
| FR-34 | Live order queue ("kitchen display") for event staff with status controls and printing. | M |
| FR-35 | Sales, product, and customer analytics with exportable reports. | M |
| FR-36 | Role-based access for owners vs. staff. | S |

---

## 7. AI & Emerging-Technology Requirements

AI is a core differentiator, not an add-on. The following capabilities are specified; each should be implemented with clear guardrails, human-review options for the owners, and privacy-respecting data handling.

| ID | AI capability | What it does | Pri. |
| --- | --- | --- | --- |
| AI-1 | Conversational ordering assistant | A chat/voice concierge that builds an order from natural language ("something sweet and not too filling for two") and adds it to the cart. | M |
| AI-2 | Personalized recommendations | Suggests flavors, combos, and add-ons from history, weather, time of day, and popularity. | M |
| AI-3 | Support chatbot | Answers FAQs (hours, allergens, locations, order status) and hands off to the owners when needed. | M |
| AI-4 | Smart wait-time / demand prediction | Estimates pickup-ready times and forecasts busy periods per event. | S |
| AI-5 | Visual "flavor finder" | Customer describes a mood or picks colors; AI proposes a shave ice combo with a generated preview image. | S |
| AI-6 | AI media & copy tooling | Assists owners in generating menu descriptions, promo copy, and social posts on-brand. | S |
| AI-7 | Review & feedback summarization | Summarizes customer feedback and flags issues for the owners. | C |
| AI-8 | Translation | On-the-fly Spanish (and other) translation of the interface and assistant. | C |

> **Emerging tech to feature:** AR flavor preview lets customers point their camera at the tent/table to see a 3D shave ice with their chosen flavors. Voice ordering, live cinematic "snow being made" video, and dynamic, animated futuristic UI round out the forward-looking experience.

---

## 8. Design, Brand & UX Requirements

The brand ambition is futuristic, premium, and sensory: the digital equivalent of biting into fresh island snow. The look should feel like a modern flagship food brand while keeping warmth and approachability.

### 8.1 Visual direction

- **Aesthetic:** clean, futuristic, and immersive: glassy "frosted" surfaces, soft gradients, subtle motion, and generous negative space.
- **Palette:** deep midnight navy and ice-cyan as the core, with a tropical coral/sunset accent; light frosted panels for content.
- **Motion:** tasteful micro-interactions, parallax hero video, and smooth transitions, performance-budgeted so it never slows the phone.
- **Imagery:** high-end, high-resolution photography and cinematic video of the snow, flavors, and grill items; every menu item professionally shot.
- Dark mode supported across web and apps.

### 8.2 Media & content requirements

| Asset | Requirement |
| --- | --- |
| Hero video | Cinematic loop of shave ice being crafted and flavors poured; muted autoplay, lightweight, with a static fallback. |
| Item photography | Every menu item shot on a consistent, premium set; multiple angles; optimized responsive formats (WebP/AVIF). |
| Brand story media | Short-form video telling the Hawaii origin story for the website and social. |
| Media library | Central, tagged asset store powering web, app, and social; CMS-managed by the owners. |
| Performance | All media compressed and served via CDN; lazy-loaded; no single image blocks first paint. |

### 8.3 UX principles

- **Mobile-first:** design for the phone before the desktop; thumb-friendly targets.
- **Three-tap ordering:** from open to paid in as few steps as possible.
- **Clarity over cleverness:** price, customization, and pickup time always visible.
- **Accessibility built in** from day one (see section 9.4).

---

## 9. Non-Functional Requirements

### 9.1 Performance

- Mobile web largest-contentful-paint under 2.5s on a typical 4G connection.
- App cold start under 3s; order actions respond in under 1s.
- Graceful behavior on weak festival-grade connectivity (offline cart, retry, queued sync).

### 9.2 Scalability & reliability

- Handle event-day traffic spikes (many orders in a short window) via auto-scaling cloud infrastructure.
- 99.9% uptime target for ordering; graceful degradation if a dependency (e.g., AI) is unavailable.

### 9.3 Security & privacy

- PCI-DSS compliant payments; card data tokenized and never stored on Tropical Snow servers.
- Encryption in transit (TLS) and at rest; secure authentication with OTP/social sign-in.
- Privacy compliance (US state privacy laws / CCPA-style rights); clear consent for marketing and location.
- Role-based access control and audit logging in the back office.

### 9.4 Accessibility

- WCAG 2.2 AA across web and apps; screen-reader support, sufficient contrast, captions on video.
- The current site references an ADA anchor; the rebuild should meet ADA/WCAG properly, not just link to a tool.

### 9.5 Localization & SEO

- Architecture ready for Spanish as a fast-follow language.
- Technical SEO, structured data (menu, local business, events), and social share metadata for the website.

---

## 10. Recommended Technical Architecture

These are recommendations; the delivery team may propose equivalents. The guiding principle is **one shared backend serving website, apps, and back office.**

| Layer | Recommendation | Notes |
| --- | --- | --- |
| Website | Modern JS framework (e.g., Next.js): server-rendered, mobile-first, PWA-capable. | Fast, SEO-friendly, installable web experience. |
| Mobile apps | Native or cross-platform (Swift/Kotlin, or React Native / Flutter) for iOS & Android. | Cross-platform can cut cost/time while keeping native feel. |
| Backend / API | Cloud-hosted API (REST/GraphQL) with a shared services layer. | Single source of truth for menu, orders, accounts. |
| Payments | Stripe or Square (Square adds vendor-friendly POS + tap-to-pay). | PCI handled by provider; supports wallets & gift cards. |
| AI services | LLM-based assistant + recommendation engine via a governed AI layer. | Guardrails, caching, and fallback for reliability. |
| Maps / location | Mapping & geolocation provider for events and directions. | Powers "where are we" and geo-alerts. |
| Notifications | Push (APNs/FCM), SMS, and email service. | Order status and event campaigns. |
| CMS / media | Headless CMS + CDN-backed media library. | Owners manage menu, content, and assets. |
| Analytics | Product analytics + dashboards. | Behavior, funnel, and sales reporting. |
| Infrastructure | Auto-scaling cloud (AWS/GCP/Azure) with CI/CD. | Handles event-day spikes; safe releases. |

---

## 11. Integrations

- Payment gateway & digital wallets (Apple Pay / Google Pay).
- Mapping / geolocation for live locations, directions, and geo-alerts.
- Push, SMS, and email messaging providers.
- AI / LLM provider for the assistant, recommendations, and content tooling.
- Social platforms (Facebook / Instagram) for sharing and content cross-post.
- Accounting/POS reconciliation and optional receipt printing at the window.
- Future: third-party delivery marketplaces (out of scope this phase).

---

## 12. Analytics, Reporting & KPIs

The platform must instrument behavior and sales so the owners can make data-driven decisions.

| Metric area | Example KPIs |
| --- | --- |
| Adoption | App installs, registered users, monthly active users. |
| Ordering | Digital order rate, average order value, cart abandonment, re-order rate. |
| Speed | Average prep/wait time, on-time pickup %. |
| AI | AI-assisted orders, recommendation acceptance, support deflection rate. |
| Loyalty | Enrolled members, points redeemed, repeat purchase rate. |
| Web | Mobile conversion, bounce rate, page-load times, top traffic sources. |
| Events | Orders per event, top-performing locations, geo-alert conversions. |

---

## 13. Assumptions, Constraints & Dependencies

### 13.1 Assumptions

- Tropical Snow will provide finalized menu items, pricing, allergens, and event schedule inputs.
- Professional photo/video production will be commissioned for high-end media.
- Owners will maintain a device (tablet/phone) at each event for the live order queue.

### 13.2 Constraints

- Festival connectivity can be unreliable; the app must tolerate intermittent networks.
- A small team operates the vendor, so back-office tools must be genuinely simple.

### 13.3 Dependencies

- Third-party providers for payments, AI, maps, and messaging.
- Apple App Store and Google Play review/approval for the native apps.

---

## 14. Suggested Delivery Phases

A phased rollout de-risks delivery and gets value to customers sooner. Timings are indicative and to be confirmed with the delivery team.

| Phase | Focus | Key deliverables |
| --- | --- | --- |
| Phase 1: Foundation | Website + platform core | Futuristic mobile-first website, brand/media system, menu, live event locations, backend, owner CMS. |
| Phase 2: Order & Pay | Ordering engine | Cart, customization, payments/wallets, pickup scheduling, order status, kitchen queue, loyalty v1. |
| Phase 3: Native apps | iOS & Android | Native apps with full order-ahead, push, wallet, re-order, geo-alerts. |
| Phase 4: AI & advanced | Intelligence layer | Conversational ordering, recommendations, support bot, wait-time prediction, AR preview, Spanish. |
| Phase 5: Optimize | Grow & refine | Analytics-driven improvements, campaigns, delivery-marketplace exploration. |

---

## 15. Definition of Success

The program is successful when Tropical Snow customers can reliably order and pay ahead and skip the line at events; when the website and apps feel unmistakably premium and futuristic; when AI meaningfully personalizes and speeds up ordering; and when the owners can run everything (menu, prices, events, and promotions) from a simple dashboard, with loyalty bringing customers back event after event.

---

## Appendix A. Glossary

| Term | Meaning |
| --- | --- |
| Order-ahead | Placing and paying for an order in advance for later pickup. |
| MoSCoW | Prioritization: Must / Should / Could / Won't have. |
| PWA | Progressive Web App: an installable, app-like website. |
| PCI-DSS | Payment Card Industry Data Security Standard for handling card data. |
| WCAG 2.2 AA | Web accessibility standard the products should meet. |
| Kitchen display | The live order-queue screen used by event staff. |
| CDN | Content Delivery Network: serves media fast worldwide. |
| LLM | Large Language Model: powers the AI assistant and chatbot. |

*End of document: Tropical Snow Digital Experience Requirements v1.0 · Confidential*
