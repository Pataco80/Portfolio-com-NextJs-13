# 🔍 Audit — Portfolio-com-NextJs-13

**Date :** 23 juin 2026 · **Branche :** `refactor/application-global-refactor-one-shot`
**Périmètre :** Accessibilité (WCAG 2.1 AA), Performance, Responsive, Qualité de code.
**Exclu :** SEO (volontairement — rendu data-driven Hygraph, peu de marge ici).

**Méthode :** axe-core sur pages live (`/`, `/projects`, `/projects/[slug]`, en light **et** dark) · audit DOM (titres, landmarks, alt, labels, cibles tactiles) · perf via Performance API + console · captures responsive de 244px à 538px · revue de code (layout, formulaire, fetch, deps).

---

## Synthèse

Le refactor est **globalement sain** : sémantique propre (skip-link, landmarks complets, hiérarchie de titres sans saut), thème light/dark tokenisé, responsive **sans débordement horizontal jusqu'à 244px**. axe-core ne remonte **qu'une seule violation récurrente** (contraste des sous-titres).

Deux points **bloquants fonctionnels** (formulaire de contact inopérant, fetch Hygraph sans garde-fou) et un **défaut de contraste systémique** sont prioritaires. Le reste est du polissage.

### Tableau priorisé


| #  | Sévérité | Axe             | Problème                                                                                                                                | Fichier                                 |
| ---- | ------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| 1  | 🔴 Haute    | Qualité / UX   | Formulaire de contact non-fonctionnel :`onSubmit = console.log`, aucun envoi ni feedback                                                 | `contact-form.tsx`                      |
| 2  | 🔴 Haute    | Robustesse      | Fetch Hygraph :`json.data` `undefined` non géré → crash de la page si l'API échoue                                                   | `lib/fetch-hygraph-query.ts`            |
| 3  | 🟠 Moyenne  | A11y 1.4.3      | Sous-titres`text-accent` (14px) sous le seuil AA : light **4.44:1**, dark **3.77:1** (min 4.5)                                           | `section-title.tsx` / `globals.css`     |
| 4  | 🟠 Moyenne  | A11y 3.3.1      | Erreurs de validation Zod jamais affichées à l'utilisateur                                                                             | `contact-form.tsx`                      |
| 5  | 🟠 Moyenne  | A11y 2.4.2      | Titre de page identique partout (« DWDeveloppement »)                                                                                  | `layout.tsx` + pages                    |
| 6  | 🟠 Moyenne  | Perf            | Image hero`bg-portfolio-hero.webp` = **561 KB**, above-the-fold, chargée en CSS (hors next/image)                                       | `globals.css` / `tailwind.config.js`    |
| 7  | 🟠 Moyenne  | Perf / Bundle   | Dépendances**mortes** : `axios`, `framer-motion`, `react-hot-toast` (0 usage)                                                           | `package.json`                          |
| 8  | 🟠 Moyenne  | Perf            | CircuitDivider : animations SMIL en boucle infinie (×3 sur la home) +`backdrop-blur-lg` = coût paint continu, pas de pause hors-écran | `circuit-divider.tsx`, cartes           |
| 9  | 🟡 Basse    | A11y 1.1.1      | Logo hero`alt="alt"` (texte alternatif vide de sens)                                                                                     | `hero-section.tsx`                      |
| 10 | 🟡 Basse    | Perf / Qualité | Warning next/image (ratio largeur/hauteur) sur`logo.svg` + SVG de **59 KB**                                                              | header / logo                           |
| 11 | 🟡 Basse    | A11y            | Cibles tactiles < 44px (nav 24px, icônes sociales 32px, toggle 36px) — conforme AA 2.1, sous l'optimum mobile                          | header / socials                        |
| 12 | 🟡 Basse    | A11y 1.1.1      | Alts CMS = noms de fichiers (« logo de X-logo », « talentforge-thumb »)                                                              | Hygraph (contenu)                       |
| 13 | 🟡 Basse    | A11y (AAA)      | Hover/zoom CSS (`group-hover:scale-110`, `transition-all`) non désactivés en `prefers-reduced-motion`                                  | cartes,`globals.css`                    |
| 14 | 🟡 Basse    | Qualité        | `getPageData` exporté depuis `page.tsx` → erreur tsc TS2344 (pré-existante)                                                           | `app/page.tsx`, `app/projects/page.tsx` |
| 15 | 🟡 Basse    | Maintenance     | Deps figées 2023 +`eslint-config-next` 13.3 alors que Next est en 15.1 ; script `"refrech"` (typo)                                      | `package.json`                          |

---

## 1. Accessibilité (WCAG 2.1 AA)

### ✅ Acquis

- Skip-link `Aller au contenu` → `<main id="contenu" tabIndex={-1}>` ✓
- Landmarks complets : `header` / `nav` / `main` / `footer` (1 de chaque) ✓
- Hiérarchie de titres **logique, sans saut** : h1 (hero) → h2 (sections) → h3 (cartes / expériences) → h4 (compétences) ✓
- `html lang="fr"` + `suppressHydrationWarning` (next-themes) ✓
- Champs du formulaire avec `aria-label` (nom accessible présent) ✓
- `focus-visible:ring` généralisé sur liens/boutons/champs ✓
- CircuitDivider respecte `prefers-reduced-motion` ✓

### ⚠️ À corriger

- **[#3 — serious] Contraste des sous-titres accent.** Le `text-accent` à 14px échoue partout :
  - Light : `#0055ff` sur `#e3e5e8` = **4.44:1** (manque 0.06)
  - Dark : `#2970ff` sur `#1e2024` = **3.77:1**
  - Touche tous les sous-titres `.../xxx` des `SectionTitle`. **Fix au choix** : (a) passer le sous-titre en « grand texte » (≥ 18px ou 14px bold → seuil 3:1, les deux passent), ou (b) ajuster le token accent pour le petit texte (assombrir le light, éclaircir le dark jusqu'à 4.5:1).
- **[#4 — 3.3.1/3.3.3] Erreurs de formulaire silencieuses.** Zod valide mais `formState.errors` n'est jamais rendu → l'utilisateur ne sait pas pourquoi rien ne se passe. Afficher les messages sous chaque champ + `aria-invalid` / `aria-describedby`.
- **[#5 — 2.4.2] Titre de page unique.** Toutes les pages affichent « DWDeveloppement ». Ajouter `generateMetadata` sur `/projects` et `/projects/[slug]` (titre = nom du projet). *Niveau A — recoupe le SEO mais reste un critère a11y.*
- **[#9 — 1.1.1] `alt="alt"`** sur le logo webp du hero → alt descriptif (« DWDeveloppement ») ou `alt=""` si décoratif.
- **[#11] Cibles tactiles** sous 44px (nav, icônes sociales, toggle). Conforme AA 2.1 (pas d'exigence) ; pour le confort mobile, viser 44px (padding).
- **[#12] Alts CMS** filename-based — à améliorer côté contenu Hygraph.
- **[#13 — AAA] Reduced-motion partiel** : les micro-animations CSS (zoom carte/image au hover) restent actives. Ajouter un bloc global `@media (prefers-reduced-motion: reduce)` neutralisant `transition`/`transform`.

---

## 2. Performance

> ⚠️ Mesures faites en **dev** (`next dev`) : les bundles JS (~3 MB : `main-app.js` 1.3 MB, `page.js` 866 KB…) ne sont **pas représentatifs de la prod** (non minifiés, sourcemaps, HMR). À confirmer via `next build` + `@next/bundle-analyzer`. FCP dev = 376 ms, DCL = 1.05 s.

### Constats prod-pertinents

- **[#6] Hero `bg-portfolio-hero.webp` = 561 KB**, critique (above-the-fold), chargée via `background-image` CSS → **hors pipeline next/image** (pas de redimensionnement responsive, pas de `priority`, pas d'AVIF). Recompresser/redimensionner (cible < 150 KB) ; idéalement passer par `next/image` avec `priority`.
- **[#7] Dépendances mortes** (0 import) : `axios` (le fetch natif est utilisé), `framer-motion` (remplacé par `motion`), `react-hot-toast`. Les retirer allège l'install et le risque de bundle.
- **[#8] Animations continues.** CircuitDivider lance des animations SMIL `repeatCount="indefinite"` (orbites 20–28 s, photons, pulsations) **× 3 sur la home**, jamais mises en pause hors-écran ; cumulé au `backdrop-blur-lg` des cartes (paint coûteux), c'est du coût GPU/CPU permanent. Pistes : pause via IntersectionObserver / `animation-play-state`, limiter le blur.
- **[#10] `logo.svg` = 59 KB** (lourd pour un SVG → SVGO, vérifier raster embarqué) + **warning next/image ratio** : ajouter `style={{ height: 'auto' }}` (ou `width: 'auto'`) sur l'Image du logo.

---

## 3. Responsive / mobile

### ✅ Très bon

- **Aucun débordement horizontal** testé de **244px à 538px** (`scrollWidth ≤ innerWidth`).
- Hero : empilement propre (photo → nom h1 → intro → badges) en `flex-col-reverse`.
- Header (#Home / #Projects / toggle) tient sans casser.
- Grilles : 1 colonne en mobile, multi-colonnes en desktop (`grid-cols-1 sm:2 md:3`), cartes lisibles.

### Mineur

- À ~244px les gros titres (`text-3xl`) frôlent les bords et passent sur 2 lignes — acceptable, mais un `clamp()` ou un cran `text-2xl` en dessous de `sm` gagnerait en respiration.

---

## 4. Qualité de code & best-practices

### ✅ Acquis

- Architecture `src/` claire (components/layouts/pages/lib/hooks/types), alias `@/*`.
- Fonts via `next/font/google` (self-hosted, variables, pas de CLS) ✓
- **Sécurité OK** : `HYGRAPH_TOKEN` / `HYGRAPH_URL` en `process.env` **server-side uniquement** (jamais `NEXT_PUBLIC`), appelés depuis des Server Components → token non exposé au client ✓
- Validation de formulaire typée (react-hook-form + Zod) ✓

### ⚠️ À corriger

- **[#1 — Haute] Formulaire de contact inopérant** : `const onSubmit = (data) => console.log(data)`. Aucun envoi (API route / service mail) ni retour visuel. `react-hot-toast` est installé mais non câblé. → brancher un endpoint + toast succès/erreur.
- **[#2 — Haute] Fetch Hygraph sans garde-fou** : en cas d'échec, la fonction logge puis **retourne `json.data` (`undefined`)** ; le composant déstructure ensuite `pageData` → crash, sans `notFound()` ni fallback. → `throw` explicite + `error.tsx` / `not-found.tsx`.
- **[#14] `getPageData` exporté depuis `page.tsx`** → TS2344 (Next type les exports de page). Déplacer la query dans `lib/queries/*` et n'exporter que `default`.
- **[#15] Maintenance** : nombreuses deps figées en 2023 ; `eslint-config-next@13.3` vs `next@15.1` (lint désaligné) ; script `"refrech"` (typo de `refresh`).
- **[mineur] `Button`** ne fixe pas `type` : OK dans le formulaire (submit par défaut voulu), mais le bouton « Contactez-moi » du hero devrait être `type="button"` par robustesse.
- **[mineur] Labels visibles** : le formulaire repose sur `placeholder` + `aria-label` ; un `<label>` persistant améliorerait l'UX (le placeholder disparaît à la saisie).

---

## Plan de correction suggéré (ordre)

1. **🔴 Formulaire** : brancher l'envoi (API route Next) + affichage des erreurs Zod + toast succès/erreur (#1, #4).
   R: on va faire avec Resend et on mettera un toast pour le message confirmation comme pour NOW.TS
2. **🔴 Robustesse Hygraph** : `throw` + `error.tsx` / `not-found.tsx` (#2).
   R: Chaque page devra retourner une page erreur si pas de données avec les pages dédiées à Next.js
3. **🟠 Contraste accent** : agrandir/grossir les sous-titres ou ajuster le token (#3).
   R: On pousse à text-base ou au pire sur text-lg.
4. **🟠 Metadata par page** : `generateMetadata` projets + slug (#5).
   R: On fait une simulation de metadata simple
5. **🟠 Image hero** : recompresser `bg-portfolio-hero.webp` (#6) + warning ratio logo (#10).
   R: Tu me donnes tous les paramêtres pour Affinity Photo.
6. **🟠 Nettoyage deps** : retirer `axios`, `framer-motion`, `react-hot-toast` (#7).
   R: React-hot-toast ou le remplacer par le même que NOW.TS qui serait préférable puis un Resend. Toutes les autres, on retire.
7. **🟠 Animations** : pause hors-écran + reduced-motion CSS global (#8, #13).
   R: Il faudra aussi prévoir un critical-css au cas ou pour le départ et charger le css progressivement pour éviter le blocage... faire pareil pour la font avec une charge système dans le critical-css et il passe après sur la font google.
8. **🟡 Finitions** : `alt` logo (#9), cibles tactiles (#11), TS2344 (#14), deps/lint (#15), `Button type` & labels visibles.
   R: Les finitions seront les dernières.

---

*Note : tous les chiffres de perf JS sont en mode développement. Lancer `next build` puis `npx @next/bundle-analyzer` pour la taille réelle de prod avant toute optimisation de bundle.*
