import { CSSProperties } from 'react'

// Fondu haut/bas du halo : evite la coupure nette du glow au bord des sections (overflow-hidden),
// en l'eteignant avant la frontiere sans trop l'attenuer en son centre (~12%/85%).
const haloMask: CSSProperties = {
	WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
	maskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
}

// Halo (glow bleu) seul, a passer au slot `backdrop` de SectionLayout.
// NB : les lignes circuit (PNG) ont ete retirees — trop deformees selon la taille des sections.
export const SectionBackdrop = () => <div className='absolute inset-0 bg-section-glow' style={haloMask} />
