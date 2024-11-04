import { getRelativeTimeString } from '@/app/utils/get-relative-time'
import { knownTech } from '@/app/types/projects'
import { CMSIcon } from '@/app/components/CMSIcon'

type KnowTechProps = {
	tech:knownTech
}

export const KnowTechCard = ({ tech }: KnowTechProps) => {
	const relativeTime = getRelativeTimeString(
		new Date(tech.startDate),
		'fr-CH'
	).replace('il y a', '')
	return (
		<div className='p-6 flex flex-col rounded-lg bg-pale-sky-700/20 text-pale-sky hover:bg-pale-sky-700/30 hover:text-blue-ribbon hover:scale-105 hover:shadow-knowteckscard transition-all'>
			<div className='flex items-center justify-between'>
				<p className='text-xl font-medium'>{tech.name}</p>
				<CMSIcon icon={tech.iconSvg}/>
			</div>
			<span>{`${relativeTime} d'expérience`}</span>
		</div>
	)
}
