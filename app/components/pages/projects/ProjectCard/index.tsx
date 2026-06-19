// Imports Next plugins
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
      <article className='group h-[450px] flex flex-col bg-pale-sky-800 border-2 border-pale-sky-800 transition-all hover:border-blue-ribbon opacity-70 hover:opacity-100 rounded-lg overflow-hidden'>
      <div className='w-full h-48 overflow-hidden'>
        <Image className='object-cover w-full h-full transition-all duration-500 group-hover:scale-110' src={project.thumbnail.url} alt={project.thumbnail.textAlt} width={380} height={200} />
      </div>
      <div className='flex flex-col flex-1 p-8'>
        <strong className='font-medium transition-all text-pale-sky-50/90 group-hover:text-blue-ribbon'>{project.title}</strong>
        <p className='my-2 text-pale-sky-400 line-clamp-4'>{project.shortDescription}</p>
        <p className='block text-sm truncate text-pale-sky-300'>{technologies}</p>
      </div>
      </article>
    </Link>
  )
}
