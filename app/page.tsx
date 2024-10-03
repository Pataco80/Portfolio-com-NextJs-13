import { HeroSection } from '@/app/components/pages/home/HeroSection'
import { KnowTechs } from '@/app/components/pages/home/KnowTechs'
import { HighlightedProjects } from '@/app/components/pages/home/HighlightedProjects'
import { WorkExperience } from '@/app/components/pages/home/WorkExperience'
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
