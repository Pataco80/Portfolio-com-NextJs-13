import { HeroSection } from '@/app/components/Home/HeroSection'
import { KnowTechs } from '@/app/components/Home/KnowTechs'
import { HighlightedProjects } from '@/app/components/Home/HighlightedProjects'
export default async function Home() {
	return (
		<>
			<HeroSection />
			<KnowTechs />
			<HighlightedProjects />
		</>
	)
}
