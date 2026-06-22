// Imports Components
import { CSSProperties, ReactNode } from 'react'
import { ProjectCard } from '@/pages/projects/project-card'
import { SectionLayout } from '@/components/layouts/section-layout'

// Import types
import { Project } from '@/types/projects'

type SurfaceTone = 'base' | 'sky950'

type ProjectsListProps = {
	projects: Project[]
	surface?: SurfaceTone
}

// Masques en fondu haut/bas (Tailwind ne gere pas mask-image) : evitent la coupure nette
// au bord des sections (overflow-hidden). linesMask : fondu large pour le motif. haloMask :
// fondu serre qui eteint le blob bleu avant la frontiere sans trop l'attenuer (centres ~12%/85%).
const linesMask: CSSProperties = {
	WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 22%, #000 78%, transparent)',
	maskImage: 'linear-gradient(to bottom, transparent, #000 22%, #000 78%, transparent)',
}
const haloMask: CSSProperties = {
	WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
	maskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
}

// Halo + lignes circuit, passes au slot backdrop de SectionLayout
const LinesBackdrop = () => (
	<>
		<div className='absolute inset-0 bg-section-glow' style={haloMask} />
		<div
			className='absolute inset-0 bg-no-repeat bg-center bg-[length:100%_auto] rotate-[60deg] md:rotate-45 bg-[url(/images/circuit-lines.png)] opacity-25'
			style={linesMask}
		/>
	</>
)

// Component
export const ProjectsList = ({ projects, surface = 'base' }: ProjectsListProps) => {
	return (
		<SectionLayout as='section' size='lg' variant={surface === 'sky950' ? 'alt-section' : 'default'} backdrop={<LinesBackdrop />}>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10'>
				{projects.map((project) => {
					return <ProjectCard key={project.title} project={project} />
				})}
			</div>
		</SectionLayout>
	)
}
