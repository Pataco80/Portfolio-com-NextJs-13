// Imports Components
import { PageIntroduction } from '@/components/shared/page-introduction'
import { ProjectsList } from '@/pages/projects/projects-list'
import { CircuitDivider } from '@/components/shared/circuit-divider'

// Imports Queries
import { fetchHygraphQuery } from '@/lib/fetch-hygraph-query'

// Imports Types
import { ProjectsPageData } from '@/types/page-info'
type SurfaceTone = 'base' | 'sky950'

// Page Query
export const getPageData = async (): Promise<ProjectsPageData> => {
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
	const { projects } = await getPageData()

	// JSX Component
	return (
		<>
			<PageIntroduction />
			<CircuitDivider from='#121315' to='#1E2024' animate />
			<ProjectsList projects={projects} surface='base' />
		</>
	)
}
