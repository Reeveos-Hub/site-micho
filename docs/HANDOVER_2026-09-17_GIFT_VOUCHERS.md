# HANDOVER — Micho gift vouchers (Dojo, no WooCommerce)
**Date:** 17 Sep 2026 (evening)
**Client:** Micho Turkish Bar & Grill, 200 Crookes, Sheffield
**Ask from:** Yaren (owner's daughter) via WhatsApp to Ibby
**Decision owner:** Ibby (commerce). Not a build ticket tonight.

Read only unless Ibby asks to implement.

## Plain answer

**Yes.** We can sell gift vouchers on their existing site without WooCommerce.

We build the voucher picker (the "cart"). Dojo takes the payment via the Payment Intent API + hosted checkout at `pay.dojo.tech`. After payment is captured, we email the voucher code to the customer.

WooCommerce is optional, not required. The Dojo Woo plugin only exists so Woo can make that same API call. We can make the call ourselves.

## Do not do

- Do not convert michoturkishbargrill.co.uk to WordPress.
- Do not install WooCommerce unless Ibby explicitly chooses the sidecar-shop path.
- Do not use Shopify (Dojo does not support it).
- Do not promise IKA till redemption or physical cards on day one.
- Do not take card numbers on our server. Cards stay on Dojo's hosted page.

## What exists today

| Piece | Where | Notes |
|---|---|---|
| Live site | https://michoturkishbargrill.co.uk/ | Custom Vite SPA. Brochure + menu. |
| Source | `/opt/site-micho` (git) → app in `micho-app/` | |
| Served from | `/var/www/michoturkishbargrill.co.uk` | nginx `micho-bargrill` |
| Bookings | Dojo widget `web.dojo.app/create_booking/vendor/...` | They are a Dojo merchant. |
| Collection | Phone order, 15% off | No online checkout. |
| Vouchers | None | This is the new work. |

Bookings live ≠ Online Checkout live. Remote payments / Online Checkout must still be enabled on the Micho Dojo merchant (Developer Portal). Typical extra ~0.5% above in-person rate.

## How it works without Woo

1. Page on the existing site: pick £25 / £50 / £100 (optional custom). Buyer email, recipient name, gift message. That is the whole cart.
2. Our backend `POST https://api.dojo.tech/payment-intents` with amount (pence), currency `GBP`, reference e.g. `MICHO-VOUCHER-50`. Auth: `Authorization: Basic <sk_prod_...>`, header `Version: 2024-02-05` (or current docs version).
3. Redirect browser to `https://pay.dojo.tech/checkout/{id}` (Dojo hosted page: card, Apple Pay, Google Pay, 3DS).
4. Webhook `payment_intent.status_updated` with status `Captured`.
5. Issue unique code, email branded voucher, store the record (code, amount, remaining balance, buyer, Dojo payment id).
6. Until IKA is ready: staff lookup page / printed list to redeem in-house.

Docs: https://docs.dojo.tech/payments/accept-payments/online-payments/checkout-page/step-by-step-guide
Payment intent: https://docs.dojo.tech/payments/manage-payments/payment-intent

Dojo no-code plugins (not needed here): WooCommerce, Magento, PrestaShop, OpenCart only.

## IKA (later, not v1)

Yaren: launch online first; IKA + physical cards take time.
IKA = IKA EPOS (ikaepos.com), their till. Not a Dojo product. Dojo does not issue or redeem gift vouchers. Till redemption is IKA's job later. We hand them the code list / an API.

## Blocker before go-live

Micho (or their Dojo rep) must enable **Online Checkout / remote payments** and give us a production API key (`sk_prod_...`) plus webhook secret. Sandbox key `sk_sandbox_` is fine to build against.

## If Dojo approval is slow (not the default)

- Stopgap: Dojo Payment Links from the Dojo app. One-use, 30 days. Staff keep a sheet of codes.
- Gift Up embed: fast, but money goes Stripe/PayPal, **not Dojo**. Avoid unless they accept a second processor.

## Suggested reply to Yaren (commerce)

We can add Gift Vouchers to the website. Customers pick an amount, pay on a secure Dojo page (same company as table bookings), and get the voucher by email. We can go live online while IKA and physical cards are still being set up — staff just check the code when someone comes in. First step is asking Dojo to turn on Online Checkout for the restaurant.

## Server

- VPS: `178.128.33.73` (this box)
- This file also copied to rezvo-app docs so Codex/Claude see it from the main project.