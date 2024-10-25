import { HeroSection } from '@/app/components/pages/home/HeroSection'
import { KnowTechs } from '@/app/components/pages/home/KnowTechs'
import { HighlightedProjects } from '@/app/components/pages/home/HighlightedProjects'
import { WorkExperience } from '@/app/components/pages/home/WorkExperience'
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'

const getPageData = async () => {
	const query = `
		query homePageData {
  		pages(where: {slug: "home"}) {
    		introduction {
      		raw
    		}
    		knownTechs {
      		iconSvg
      		name
      		startDate
    		}
    		technologies {
      		name
    		}
  		}
		}
	`

	return fetchHygraphQuery(query)
}

export default async function Home() {
	const response = await getPageData()
	console.log(response)
	return (
		<>
			<HeroSection />
			<KnowTechs />
			<HighlightedProjects />
			<WorkExperience />
		</>
	)
}
