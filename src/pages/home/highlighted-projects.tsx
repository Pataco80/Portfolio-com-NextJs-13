// Imports Components
import { SectionLayout } from '@/components/layouts/section-layout'
import { SectionBackdrop } from '@/components/shared/section-backdrop'
import { SectionTitle } from '@/components/shared/section-title'
import { DividerHorizontal } from '@/components/shared/divider-line'
import { HighlightCard } from '@/pages/home/highlight-card'
import { Link } from '@/components/shared/link'
import { LuArrowRight } from 'react-icons/lu'

// Imports types
import { Project } from '@/types/projects'
import { SurfaceTone } from '@/types/page-info'

// Types Props
type HighlightedProjectsProps = {
	projects: Project[]
	surface?: SurfaceTone
}

// Component
export const HighlightedProjects = ({ projects, surface }: HighlightedProjectsProps) => {
	// JSX Component
	return (
		<SectionLayout as='section' size='lg' variant={surface === 'sky950' ? 'alt-section' : 'default'} backdrop={<SectionBackdrop />}>
			<SectionTitle as='h2' title='Projets en vedette' subtitle="highlight's" />
			<DividerHorizontal />
			{projects?.map((project) => {
				return (
					<div key={project.slug}>
						<HighlightCard project={project} />
						<DividerHorizontal className='my-16' />
					</div>
				)
			})}
			<p className='flex items-center gap-1.5'>
				<span className='text-pale-sky-400'>Si intéressé ?</span>
				<Link className='inline-flex' href='/projects'>
					Voir tous les projets
					<LuArrowRight />
				</Link>
			</p>
		</SectionLayout>
	)
}
