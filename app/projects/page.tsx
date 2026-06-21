// Imports Components
import { PageIntroduction } from '@/app/components/PageIntroduction'
import { ProjectsList } from '@/app/components/pages/projects/ProjectsList'
import { CircuitDivider } from '@/app/components/circuit-divider'

// Imports Queries
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'

// Imports Types
import {ProjectsPageData} from '@/app/types/page-info'

// Page Query
export const getPageData = async ():Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
    projects {
      title
      slug
      shortDescription
      thumbnail {
        url
        textAlt
      }
      technologies {
        name
      }
    }
  }
  `

  return fetchHygraphQuery(query)
}

// Component
export default async function Projects() {
  const {projects} = await getPageData();

  // JSX Component
  return (
    <>
      <PageIntroduction />
      <CircuitDivider />
      <ProjectsList projects={projects} surface='base'/>
      <CircuitDivider from='#1E2024' to='#121315' />
      <ProjectsList projects={projects} surface='sky950'/>
      <CircuitDivider from='#121315' to='#1E2024' />
      <ProjectsList projects={projects} surface='base'/>
      <CircuitDivider from='#1E2024' to='#121315' />
      <ProjectsList projects={projects} surface='sky950'/>
    </>
  )
}
