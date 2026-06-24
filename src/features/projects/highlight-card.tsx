// Imports Next plugins
import Image from 'next/image'

// Imports Components
import { TechBadge } from '@/features/tech-badge/tech-badge'
import { Link } from '@/components/shared/link'
import { Icon } from '@/features/icons/icons'
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
		<article className='flex flex-col gap-6 lg:flex-row lg:gap-12'>
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
				<h3 className='flex items-center gap-3 text-lg font-medium text-foreground'>
					<Image src='/icons/icon-react.png' alt='' width={30} height={30} />
					{project.title}
				</h3>
				<p className='my-6 text-muted-foreground'>{project.shortDescription}</p>
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
					<Icon name='arrow-right' size={20} />
				</Link>
			</div>
		</article>
	)
}
