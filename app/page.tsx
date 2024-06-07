import { HeroSection } from './components/Home/HeroSection'
import { HighlightedProjects } from './components/Home/HighlightedProjects/HighlightedProjects'
import { KnowTechs } from './components/Home/KnowTechs/KnowTechs'
import { WorkExperience } from './components/Home/WorkExperience/WorkExperience'

export default async function Home() {
	return (
		<>
			<HeroSection />
			<KnowTechs />
			<HighlightedProjects />
			<WorkExperience />
		</>
	)
}
