// Imports Components
import { ProjectCard } from '@/pages/projects/project-card'
import { SectionLayout } from '@/components/layouts/section-layout'
import { SectionBackdrop } from '@/components/shared/section-backdrop'

// Import types
import { Project } from '@/types/projects'

type SurfaceTone = 'base' | 'sky950'

type ProjectsListProps = {
	projects: Project[]
	surface?: SurfaceTone
}

// Component
export const ProjectsList = ({ projects, surface = 'base' }: ProjectsListProps) => {
	return (
		<SectionLayout as='section' size='lg' variant={surface === 'sky950' ? 'alt-section' : 'default'} backdrop={<SectionBackdrop />}>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10'>
				{projects.map((project) => {
					return <ProjectCard key={project.title} project={project} />
				})}
			</div>
		</SectionLayout>
	)
}
