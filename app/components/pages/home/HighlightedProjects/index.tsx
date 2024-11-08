// Imports Components
import { SectionTitle } from '@/app/components/SectionTitle'
import { DividerHorizontal } from '@/app/components/DividerLine'
import { HighlightCard } from './HighlightCard'
import { Link } from '@/app/components/Link'
import { LuArrowRight } from 'react-icons/lu'

// Imports types
import { Project } from '@/app/types/projects'

// Types Props
type HighlightedProjectsProps = {
	projects:Project[]
}

// Component
export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {

	// JSX Component
	return (
		<section className='container py-16'>
			<SectionTitle title='Projets en vedette' subtitle="highlight's" />
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
		</section>
	)
}
