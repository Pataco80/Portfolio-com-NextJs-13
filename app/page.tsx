import { HeroSection } from '@/app/components/pages/home/HeroSection'
import { KnowTechs } from '@/app/components/pages/home/KnowTechs'
import { HighlightedProjects } from '@/app/components/pages/home/HighlightedProjects'
import { WorkExperience } from '@/app/components/pages/home/WorkExperience'
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'
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
      technology {
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
  }
  }
}
	`
	return fetchHygraphQuery(query)
}

export default async function Home() {
  const {page:pageData} = await getPageData()
  console.log(pageData)
	return (
		<>
			<HeroSection homeInfo={pageData}/>
      <KnowTechs knownTechData={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
			<WorkExperience />
		</>
	)
}

