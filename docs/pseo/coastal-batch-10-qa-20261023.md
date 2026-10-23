# LegalNexum coastal pSEO batch 10 — QA 2026-10-23

## Scope
Benidorm, Jávea/Xàbia, Marbella, Orihuela Costa (part of Orihuela municipality), Estepona, Mijas, Dénia, Calpe, Altea, Fuengirola. 10 slugs × 4 languages (es/en/de/fr) × 3 intents (alquiler/imputacion/venta) = 120 candidate URLs. These are an editorial priority hypothesis, not a verified ranking of nonresident owners, demand or fiscal density.

## Reproducible technical checks (isolated Hetzner clone)
- Branch: `feat/pseo-coastal-batch-10-20261023`; initial batch commit `4c6f071e016939e385b1614bc0b4d7ab205d6cbd`.
- `npm install --no-audit --no-fund`: success.
- `npm run build`: EXIT 0, Next.js 15.5.28, 1,207 static pages.
- Inspect `.next/server/app` for all 120 candidate HTML files: 120 exist, 120 unique paths, zero missing; all `noindex`, zero in sitemap; generated sitemap has 2 `<loc>` entries (homepage + Torrevieja pilot).
- Verify `<html lang>`, canonical and Modelo 210 text on all 120: 0 mismatches.

## Editorial audit: blocking findings
- Localized editorial guide sections: **0/120**. Torrevieja-specific guide is implemented only for its single editorial pilot URL, not these candidates.
- Direct AEAT Modelo 210 instructions link in `<main>`: **0/120** (a general Agencia Tributaria homepage link exists in footer; it is not the same thing).
- Approximate visible `<main>` text (includes shared calculator/form): alquiler 231–303 words; imputacion 255–323; venta 238–315. This is NOT a quality score; locality-specific editorial content is missing.
- Administrative locality/source verification: not completed for this batch. Orihuela Costa is a district/area within Orihuela municipality, not a separate municipality.
- Tax correctness: calculator is generic across all locations; no location-specific tax rates should be inferred. Detailed legal/AEAT validation for year, taxpayer residence, income type, deductions, imputations, withholding, and translated claims remains pending. Do not infer certified tax advice from a successful build.
- No verified search volume, nonresident ownership density, or competition scores for this batch.

## Publication gates
1. Document administrative classification and reliable locality sources for each slug.
2. Add independently useful, sourced local content for each intended indexable page, with links to official AEAT instructions and accurate caveats.
3. Validate tax calculations and translation equivalence by intent, tax year, and residence category; test edge cases.
4. Review 120 pages in a preview environment and run production smoke checks only after approval.
5. Keep `noindex` and sitemap exclusion until page-by-page approval. Do not merge this draft PR as an indexing authorization.

**Status: technical build PASS; editorial/fiscal publication gate FAIL/PENDING; production unchanged.**
