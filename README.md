# Nature's Way Soil — Next.js 14 (App Router)

A clean, fast site for Nature’s Way Soil with product catalog, product pages, Amazon/Walmart links, and optional Stripe checkout.

## Quickstart
1. **Install**: `npm install`
2. **Dev**: `npm run dev` → open http://localhost:3000
3. **Configure**: Copy `.env.example` → `.env.local` and set values

## Build & Deploy
- Build: `npm run build`
- Start: `npm start`

On **Vercel**:
- New Project → Import GitHub repo → Framework auto-detects Next.js
- Add environment variables from your `.env.local`
- Deploy

## Products
- Edit `lib/products.ts` to manage products manually, **or**
- Put your CSV at project root as `catalog.csv` and run:
  ```bash
  npm run import:catalog
  ```
  This will overwrite `lib/products.ts` from your CSV.

## Stripe Checkout (optional)
- Set `NEXT_PUBLIC_CHECKOUT_PROVIDER=stripe`
- Add `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- Set success/cancel URLs in env (e.g., yourdomain.com/success and /cancel)

## Square (optional later)
- You can swap the Stripe API route with Square’s CreatePayment route. Front-end UI stays the same.
