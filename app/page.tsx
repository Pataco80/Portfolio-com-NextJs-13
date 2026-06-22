// Imports Components
import { HeroSection } from '@/pages/home/hero-section'
import { KnowTechs } from '@/pages/home/know-techs'
import { HighlightedProjects } from '@/pages/home/highlighted-projects'
import { WorkExperience } from '@/pages/home/work-experience'

// Imports Queries
import { fetchHygraphQuery } from '@/lib/fetch-hygraph-query'

// Imports types
import {HomePageData} from '@/types/page-info'

export const getPageData = async():Promise<HomePageData> => {
	const query = `query MyQuery {
  page(where: {slug: "home"}) {
    title
    slug
    introduction {
      raw
    }
    socials {
      name
      iconSvg
      url
    }
    technologies {
      name
    }
    profilePicture {
      url
      textAlt
    }
    knownTechs {
      name
      iconSvg
      startDate
    }
    highlightProjects {
      title
      slug
      thumbnail{
        url
        textAlt
      }
      shortDescription
      technologies{
        name
      }
    }
    workExperienceIntro{
      raw
    }
    workExperience {
      compagnyName
      compagnyUrl
      compagnyLogo{
        url
        textAlt
      }
      description{
        raw
      }
      startDate
      endDate
      technologies{
        name
      }
    }
  }
}`
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
			<WorkExperience homeInfo={pageData} workExperience={pageData.workExperience} />
		</>
	)
}

