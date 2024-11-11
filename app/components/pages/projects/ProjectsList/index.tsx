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
  const projectsList = data.projects_list

	// JSX Component
  return (
    <section className='container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-4 gap-y-6'>
      {projects.map((project) => {
        return <ProjectCard key={project.title} project={project} />
      })}
    </section>
  )
}
