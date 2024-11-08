// Imports Components
import { ProjectCard } from '@/app/components/pages/projects/ProjectCard'

// Datas
import data from '@/app/data/projects-list.json'


// Component
export const ProjectsList = () => {

	// Components variables
  const projectsList = data.projects_list

	// JSX Component
  return (
    <section className='container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-4 gap-y-6'>
      {projectsList.map((item, index) => {
        const { name, url, image, altImage, description, techs } = item
        return <ProjectCard key={index} name={name} url={url} image={image} altImage={altImage} description={description} techs={techs} />
      })}
    </section>
  )
}
