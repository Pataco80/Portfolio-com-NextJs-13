// Imports Components
import { HeroSection } from '@/app/components/pages/home/HeroSection'
import { KnowTechs } from '@/app/components/pages/home/KnowTechs'
import { HighlightedProjects } from '@/app/components/pages/home/HighlightedProjects'
import { WorkExperience } from '@/app/components/pages/home/WorkExperience'

// Imports Queries
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'

// Imports types
import {HomePageData} from '@/app/types/page-info'

export const getPageData = async():Promise<HomePageData> => {
	const query = `
    query MyQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        knownTechs(orderBy: startDate_ASC) {
          iconSvg
          name
          startDate
        }
        socials {
          iconSvg
          name
        }
        technologies(orderBy: startDate_ASC) {
          name
          iconSvg
          startDate
        }
        profilePicture {
          textAlt
          url
        }
        highlightProjects {
          slug
          title
          thumbnail {
            url
            textAlt
          }
          shortDescription
          description {
            raw
          }
          technologies {
            name
          }
          gitHubUrl
          liveProjectUrl
          sections {
            title
            image {
              url
              textAlt
            }
          }
        }
        workExperience {
          compagnyName
          compagnyUrl
          compagnyLogo {
            url
            textAlt
          }
          role
          description {
            raw
          }
          startDate
          endDate
          technologies {
            name
          }
        }
      }
    }
	`
	return fetchHygraphQuery(query)
}

// Component
export default async function Home() {
	
  // Components Functions
  const { page: pageData } = await getPageData()

	// JSX Component
	return (
		<>
      <HeroSection homeInfo={pageData} />
      <KnowTechs knownTechData={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
			<WorkExperience workExperience={pageData.workExperience} />
		</>
	)
}

