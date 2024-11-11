// Imports Components
import { ProjectDetails } from '@/app/components/pages/projects/ProjectDetails'
import { ProjectSection } from '@/app/components/pages/projects/ProjectSection'
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'
import { ProjectPageData } from '@/app/types/page-info'

type ProjectProps = {
  params: {
    slug: string
  }
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query MyQuery() {
  project(where: {slug: "${slug}"}) {
    slug
    title
  }
}
  `
  return fetchHygraphQuery(query)
}

// Component
export default async function Project({ params: { slug } }: ProjectProps)  {
  const response = await getProjectDetails(slug)
  console.log(response)

	// JSX Component
  return (
    <>
      <ProjectDetails />
      <ProjectSection />
    </>
  )
}
