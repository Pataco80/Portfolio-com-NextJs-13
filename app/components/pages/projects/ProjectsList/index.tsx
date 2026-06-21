// Imports Components
import { ProjectCard } from '@/app/components/pages/projects/ProjectCard'

// Datas
import data from '@/app/data/projects-list.json'

// Import types
import { Project } from '@/app/types/projects'

type ProjectsListProps = {
  projects:Project[]
}

// Component
export const ProjectsList = ({projects}:ProjectsListProps) => {
	// Components variables

	// JSX Component
  return (
    <section className='relative'>
      <div aria-hidden className='pointer-events-none absolute inset-0 -z-10' style={{ background: 'radial-gradient(900px circle at 25% 12%, rgba(0,85,255,0.30), transparent 60%), radial-gradient(820px circle at 85% 85%, rgba(41,112,255,0.22), transparent 60%)' }} />
      <div className='container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-4 gap-y-6'>
        {projects.map((project) => {
          return <ProjectCard key={project.title} project={project} />
        })}
      </div>
    </section>
  )
}
