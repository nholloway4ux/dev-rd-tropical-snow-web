# Tropical Snow: Design Rules & Anti-Patterns

These rules apply to every UI surface: `apps/web`, `apps/mobile`, and the back office.
Read this before writing any component, layout, or style.

---

## Brand direction

**Who it's for:** Festival-goers and regulars in Atlanta who want a fast, delightful ordering experience on their phone.

**How it should feel:** Futuristic, premium, and sensory — the digital equivalent of biting into fresh island snow. Clean and immersive. Warm enough to feel like a family brand, sharp enough to feel like a flagship product.

**Palette — use only these, derived from the brand:**

| Token | Hex | Use |
| --- | --- | --- |
| `navy` | `#0B1D3A` | Primary background, headings on light surfaces |
| `iceCyan` | `#A8EEF0` | Primary accent, interactive elements, highlights |
| `coral` | `#FF6B5B` | Call-to-action, alerts, energy moments |
| White / near-white | `#F4FAFC` | Content panels, body backgrounds |
| Mid-tone | `#4A6580` | Secondary text, borders, dividers |

Do not introduce purple, indigo, green, orange, or any color not derived from this palette without explicit approval.

**Type:**
- Headings: a typeface with character — something geometric or display that reads "futuristic island." Do not default to Inter, Geist, or Roboto for headings.
- Body: simple, highly readable sans-serif at 16px minimum. Inter or similar is fine for body text only.
- Scale from size and weight. Do not use gradient text for emphasis.

**Motion:** tasteful micro-interactions only. Parallax on the hero video is intentional. Everything else animates only when something actually changes (order status, cart update, availability toggle). No decorative animation.

---

## 15 AI design anti-patterns — eliminate every instance

When building or reviewing UI, check for and remove each of these. If a detector like Impeccable flags one, fix it before merging.

### 1. Purple / indigo → blue gradients
Build every gradient from the brand palette: navy-to-midnight, cyan-to-white, coral-to-transparent. No purple, no indigo.

### 2. Inter / Geist / Roboto on headings
Pick a heading typeface with character. Body text can use a clean readable sans-serif — that's correct. Headings cannot be generic.

### 3. Gradient text
Use one solid color. Get emphasis from size, weight, and spacing — not a CSS gradient on `background-clip: text`.

### 4. Pill badges above headlines ("Introducing →", "New", "✦ Now available")
Delete them. If the information matters, put it in the headline. If it doesn't, cut it entirely.

### 5. Glowing halos and soft spotlights behind sections
Use spacing and contrast to create hierarchy. A radial-gradient spotlight behind a card is not a design decision — it's a shortcut. Remove it.

### 6. Glassmorphism as decoration
`backdrop-filter: blur`, frosted cards, and glow borders are only acceptable when they solve a real layering problem (e.g., a modal over a video, or the order cart overlaid on the menu). Never use them as a default card style.

### 7. Icons in rounded squares above every heading
If an icon adds meaning, place it beside the heading inline. Remove the colored rounded-square container unless the icon is a brand mark or status indicator.

### 8. Grids of identical cards
Group related content and give the important items more space. A hero item, a secondary row, and a tertiary list is more honest than six equal cards.

### 9. Cards inside cards
Flatten nested cards with spacing, typography, and dividers. If you have a card with a card inside, one of them is wrong.

### 10. Thick colored left-border stripes on cards
Reserve colored stripes for real alerts or order status (received / preparing / ready). Not for decorating menu categories.

### 11. Giant hero stats with no context
"10,000+ orders served" is fine if it explains something real. Do not invent stats or show numbers without a sentence that makes them meaningful.

### 12. Tiny sequential labels (01, 02, 03)
Only number things that are actually a sequence the user must follow (e.g., checkout steps). Do not number marketing sections.

### 13. Pulsing dots, bouncy easing, hover zooms, auto-scrolling logo strips
Remove all of these unless they signal a real state change. The sold-out pulse on a menu item is intentional. A bouncing CTA button is not.

### 14. Generic copy and em dashes
No "supercharge," "world-class," "seamless," "next-level," or "Not a feature — a platform." Write what the product actually does. Use plain words. Avoid em dashes as a stylistic tic.

### 15. Beige / cream background with an oversized italic serif headline
The brand palette is navy and cyan. Do not default to warm neutrals or editorial serif type because they feel "premium." They feel generic. Use this brand's specific palette and type.

---

## Spacing and readability checklist

Run these checks before any component is considered done:

- [ ] Related things sit close together; unrelated things have clear space between them
- [ ] Body text is 16px or larger on all viewports
- [ ] Text contrast meets WCAG 2.2 AA (4.5:1 for normal text, 3:1 for large text)
- [ ] Touch targets are at least 44×44px on mobile
- [ ] No section bleeds into the next without intentional separation (spacing, divider, or color change)

---

## Running the detector

```bash
# Scan source files
npx impeccable detect apps/web

# Scan the live dev server (best results)
cd apps/web && pnpm dev
npx impeccable detect http://localhost:3000

# After fixing issues, re-run to confirm
npx impeccable detect http://localhost:3000
```

The detector currently returns no findings because the site is a placeholder. Re-run it after every significant UI build session.
