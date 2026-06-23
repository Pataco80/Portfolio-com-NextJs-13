// Imports Components
import { HeroSection } from '@/pages/home/hero-section'
import { KnowTechs } from '@/pages/home/know-techs'
import { HighlightedProjects } from '@/pages/home/highlighted-projects'
import { WorkExperience } from '@/pages/home/work-experience'
import { CircuitDivider } from '@/components/shared/circuit-divider'

// Imports Queries
import { getHomePageData } from '@/lib/queries'

// Component
export default async function Home() {
	const { page: pageData } = await getHomePageData()

	// JSX Component
	return (
		<>
			<HeroSection homeInfo={pageData} />
			<CircuitDivider variant='hero-alt' animate />
			<KnowTechs knownTechData={pageData.knownTechs} surface='sky950' />
			<CircuitDivider variant='reverse' animate />
			<HighlightedProjects projects={pageData.highlightProjects} surface='base' />
			<CircuitDivider variant='base' animate />
			<WorkExperience homeInfo={pageData} workExperience={pageData.workExperience} surface='sky950' />
		</>
	)
}
