// Imports Components
import { SectionTitle } from '@/components/shared/section-title'
import { Link } from '@/components/shared/link'
import { Button } from '@/components/shared/button'
import { TechBadge } from '@/components/shared/tech-badge'
import { LuGithub, LuGlobe, LuArrowLeft } from 'react-icons/lu'

// Imports types
import { Project } from '@/types/projects'

type ProjectDetailsProps = {
	project: Project
}

// Component
export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
	// JSX Component
	return (
		<section className='dark text-foreground relative overflow-hidden w-full sm:min-h-[750px] flex flex-col items-center justify-end px-4 py-20 lg:pt-16 lg:pb-28 bg-hero bg-hero-image bg-cover bg-right-bottom lg:bg-center bg-no-repeat [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]'>
			<div
				aria-hidden
				className='absolute inset-0 z-0 pointer-events-none'
				style={{
					background:
						'radial-gradient(900px circle at 50% 40%, rgba(0,85,255,0.26) 0%, transparent 60%), linear-gradient(to bottom, rgba(0,5,16,0.50) 0%, rgba(0,13,42,0.20) 45%, rgba(0,19,64,0.82) 100%)',
				}}
			/>
			<div className='relative z-10 flex flex-col items-center'>
				<SectionTitle as='h1' title={project.title} subtitle='projet' className='text-center items-center sm:[&>:last-child]:text-4xl' />
				<p className='my-4 text-sm text-center text-pale-sky-400 max-w-[640px] sm:my-6 sm:text-base'>{project.shortDescription}</p>
				<ul className='w-full sm:max-w-[330px] flex items-center justify-center gap-2 flex-wrap'>
					{project.technologies.map((tech) => (
						<li key={`${project.title}-tech-${tech.name}`}>
							<TechBadge name={tech.name} />
						</li>
					))}
				</ul>
				<div className='flex flex-col items-center justify-center w-full gap-4 my-6 sm:my-12 sm:flex-row'>
					{project.githubUrl && (
						<Button href={project.githubUrl} external className='min-w-[180px]'>
							<LuGithub size={20} />
							View on GitHub
						</Button>
					)}
					{project.liveProjectUrl && (
						<Button href={project.liveProjectUrl} external className='min-w-[180px]'>
							<LuGlobe size={20} />
							View Live Project
						</Button>
					)}
				</div>
				<Link href='/projects'>
					<LuArrowLeft size={20} />
					Voir tous les projets
				</Link>
			</div>
		</section>
	)
}
