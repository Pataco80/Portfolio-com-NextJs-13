// Imports Components
import { CMSIcon } from '@/components/shared/cms-icon'

// Imports utilities
import { getRelativeTimeString } from '@/lib/get-relative-time'

// Imports types
import { knownTech } from '@/types/projects'

// Types Props
type KnowTechProps = {
	tech:knownTech
}

// Component
export const KnowTechCard = ({ tech }: KnowTechProps) => {

	// Components Functions
	const relativeTime = getRelativeTimeString(
		new Date(tech.startDate),
		'fr-CH'
	).replace('il y a', '')

	// JSX Component
	return (
		<div className='p-6 flex flex-col rounded-lg bg-pale-sky-700/20 text-pale-sky-200 hover:bg-pale-sky-700/30 hover:text-blue-ribbon-300 hover:scale-105 hover:shadow-knowteckscard transition-all'>
			<div className='flex items-center justify-between'>
				<p className='text-xl font-medium'>{tech.name}</p>
				<CMSIcon icon={tech.iconSvg}/>
			</div>
			<span>{`${relativeTime} d'expérience`}</span>
		</div>
	)
}
