// Imports Next plugins
import Image from 'next/image'

// Imports Components
import { TechBadge } from '@/components/shared/tech-badge'
import { Link } from '@/components/shared/link'
import { LuArrowRight } from 'react-icons/lu'

// Imports types
import { Project } from '@/types/projects'

// Types Props
type HighlightCardProps = {
	project: Project
}

// Component
export const HighlightCard = ({ project }: HighlightCardProps) => {
	// JSX Component
	return (
		<article className='flex flex-col lg:flex-row gap-6 lg:gap-12'>
			<div className='w-full h-full lg:w-[420px]'>
				<Image
					src={project.thumbnail.url}
					alt={project.thumbnail.textAlt}
					width={400}
					height={300}
					className='w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg'
				/>
			</div>
			<div className='flex-1 lg:py-5'>
				<h3 className='flex items-center gap-3 font-medium text-lg text-foreground'>
					<Image src='/images/icons/project-title-icon.svg' alt='' width={20} height={20} />
					{project.title}
				</h3>
				<p className='text-muted-foreground my-6'>{project.shortDescription}</p>
				<ul className='flex flex-wrap gap-x-2 gap-y-3 mb-8 lg:max-w-[350px]'>
					{project.technologies.map((tech) => {
						return (
							<li key={`${project.title}-tech-${tech.name}`}>
								<TechBadge name={tech.name} />
							</li>
						)
					})}
				</ul>
				<Link href={`/projects/${project.slug}`}>
					Voir le projet
					<LuArrowRight />
				</Link>
			</div>
		</article>
	)
}
