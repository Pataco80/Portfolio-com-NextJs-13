// Imports Components
import { PageIntroduction } from '@/app/components/PageIntroduction'
import { ProjectsList } from '@/app/components/pages/projects/ProjectsList'

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
  const { projects } = await getPageData();
  console.log(projects)

  // JSX Component
  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects}/>
    </>
  )
}
