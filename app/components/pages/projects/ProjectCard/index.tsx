// Imports Next plugins
import { DividerHorizontal } from '@/app/components/DividerLine'
import { Project } from '@/app/types/projects'
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
    <Link href={`/projects/${project.slug}`}>
      <article className='group h-[480px] flex flex-col bg-pale-sky-800 border-2 border-pale-sky-800 transition-all hover:border-blue-ribbon-500 opacity-90 hover:opacity-100 rounded-lg overflow-hidden'>
      <div className='w-full h-48 overflow-hidden'>
        <Image className='object-cover w-full h-full transition-all duration-500 group-hover:scale-110' src={project.thumbnail.url} alt={project.thumbnail.textAlt} width={380} height={200} />
      </div>
      <div className='flex flex-col flex-1 p-8 gap-4'>
        <strong className='font-medium text-lg transition-all text-pale-sky-50/90 group-hover:text-blue-ribbon-400'>{project.title}</strong>
        <p className='text-pale-sky-400 line-clamp-4'>{project.shortDescription}</p>
        <DividerHorizontal className='my-0 bg-transparent bg-gradient-to-r from-transparent via-pale-sky-50/70 group-hover:via-blue-ribbon-400/70 to-transparent'/>
        <p className='text-sm font-light line-clamp-2 text-pale-sky-300'>{technologies}</p>
      </div>
      </article>
    </Link>
  )
}
