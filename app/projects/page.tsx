// Imports Components
import { PageIntroduction } from '@/components/shared/page-introduction'
import { ProjectsList } from '@/pages/projects/projects-list'
import { CircuitDivider } from '@/components/shared/circuit-divider'

// Imports Queries
import { getProjectsPageData } from '@/lib/queries'

export const metadata = {
	title: 'Mes Projets — DWDeveloppement',
	description: 'Une sélection de projets web développés par Ricardo Do Vale (Next.js, React, TypeScript).',
}

// Component
export default async function Projects() {
	const { projects } = await getProjectsPageData()

	// JSX Component
	return (
		<>
			<PageIntroduction />
			<CircuitDivider variant='hero' animate />
			<ProjectsList projects={projects} surface='base' />
		</>
	)
}
