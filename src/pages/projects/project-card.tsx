// Imports Next plugins
import { DividerHorizontal } from '@/components/shared/divider-line'
import { Project } from '@/types/projects'
import Image from 'next/image'
import Link from 'next/link'

// Types Props
type ProjectCardProps = {
  project:Project
}

// Component
export const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.technologies.map(x => x.name).join(', ')
	// JSX Component
  return (
    <Link href={`/projects/${project.slug}`} className='block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-ribbon-300 focus-visible:ring-offset-2 focus-visible:ring-offset-pale-sky-900'>
      <article className='group h-[480px] flex flex-col bg-pale-sky-800/45 hover:bg-pale-sky-800/70 backdrop-blur-lg border border-white/10 hover:border-blue-ribbon-500/70 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.55)] transition-all rounded-lg overflow-hidden'>
      <div className='w-full h-48 overflow-hidden'>
        <Image className='object-cover w-full h-full transition-all duration-500 group-hover:scale-110' src={project.thumbnail.url} alt={project.thumbnail.textAlt} width={380} height={200} />
      </div>
      <div className='flex flex-col flex-1 p-8 gap-4'>
        <h2 className='font-medium text-lg transition-all text-pale-sky-50/90 group-hover:text-blue-ribbon-400'>{project.title}</h2>
        <p className='text-pale-sky-300 line-clamp-4'>{project.shortDescription}</p>
        <DividerHorizontal className='my-0 bg-transparent bg-gradient-to-r from-transparent via-pale-sky-50/70 group-hover:via-blue-ribbon-400/70 to-transparent'/>
        <p className='text-sm font-light line-clamp-2 text-pale-sky-300'>{technologies}</p>
      </div>
      </article>
    </Link>
  )
}
