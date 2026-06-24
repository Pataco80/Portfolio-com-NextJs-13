// Imports Components
import { SectionLayout } from '@/components/layouts/section-layout'
import { SectionBackdrop } from '@/components/shared/section-backdrop'
import { SectionTitle } from '@/features/section-title/section-title'
import { KnowTechCard } from '@/features/knowtecks/know-tech-card'

// Imports types
import { knownTech } from '@/types/projects'
import { SurfaceTone } from '@/types/page-info'

// Types Props
type knownTechProps = {
	knownTechData: knownTech[]
	surface?: SurfaceTone
}

// Component
export const KnowTechs = ({ knownTechData, surface }: knownTechProps) => {
	// JSX Component
	return (
		<SectionLayout as='section' size='lg' variant={surface === 'sky950' ? 'alt-section' : 'default'} backdrop={<SectionBackdrop />}>
			<SectionTitle as='h2' title='Mes Connaissances' subtitle='compétences' />
			<div className='mt-16 grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-4'>
				{knownTechData?.map((tech) => {
					return <KnowTechCard key={tech.name} tech={tech} />
				})}
			</div>
		</SectionLayout>
	)
}
