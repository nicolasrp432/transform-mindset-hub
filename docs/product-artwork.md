# Product artwork and 3D presentation

Updated 24 October 2026. Artwork is rendered from Ainara's supplied final editorial PDFs, not generated approximations. CSS creates the depth, spine, edges and Wire-O representation. Dimensions and binding in the mockups are illustrative, not a manufacturing promise.

## Source map

- `products/guide-front.webp`, `guide-back.webp`: `Guia_Portada_y_Contraportada.pdf`, pages 1–2, full pages.
- `products/princess-front.webp`, `princess-back.webp`: `Princesa_Cubierta_KDP_TapaBlanda.pdf`, page 1. Trim crops in PDF points: front `(382.519, 9, 742.519, 585)`, back `(9, 9, 369, 585)`; excludes bleed and spine.
- `products/agenda-front.webp`, `agenda-back.webp`, `agenda-volume-{2,3,4}.webp`: `Ainara_2027_Cubiertas_WireO.pdf`, pages 1, 2, 3, 5, 7 respectively. Trim crop `(8.504, 8.504, 603.779, 850.394)`.
- `products/guide-page-{7,8,15,16}.webp`: same numbered pages of `Guia_Interior_1397x2159.pdf`.
- `products/agenda-page-{9,10,11,12}.webp`: same numbered pages of `Ainara_2027_Tomo_1.pdf`.
- Existing `entre-tu-y-yo` cover, back and samples remain unchanged.

Exports use 1000px-wide RGB WebP, quality 87. Only covers and four selected sample pages per new preview are public. Full paid PDFs are NOT in the repository.

## Reusable components

- `BookShowcase`: front/back button, CSS perspective and page edge, `compact` passive variant safe inside links, keyboard-accessible control and reduced-motion support. Artwork data is in `product-visuals.ts`.
- `ProgramShowcase`: dimensional tablet with a real Ainara portrait. Explicitly marked as editorial composition, not an actual platform screenshot. Digital agenda retains its illustrative artwork, not the unrelated 2027 cover.
- `BookPreview`: the existing page-turn interaction now accepts samples, base path and aspect ratio. Defaults preserve the memory book. Unique help IDs allow multiple instances.

## Commercial boundaries

No price, Stripe key, product ID, payment action, delivery configuration or lead form behavior was changed. `/agenda-2027` is an unpriced, non-payable preview with a user-initiated WhatsApp enquiry. It is explicitly distinguished from the existing €19 digital agenda at `/agenda-reflexion`; both remain discoverable in `/herramientas`. Final price, formats and sale date must be confirmed before enabling checkout.
