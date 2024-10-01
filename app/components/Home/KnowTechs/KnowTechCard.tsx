import { getRelativeTimeString } from '@/app/utils/get-relative-time'
import { ReactNode } from 'react'

type KnowTechCardProps = {
	tech: {
		name: string
		icon: ReactNode
		startDate: string
	}
}

export const KnowTechCard = ({ tech }: KnowTechCardProps) => {
	const relativeTime = getRelativeTimeString(
		new Date(tech.startDate),
		'fr-CH'
	).replace('il y a', '')
	return (
		<div className='p-6 flex flex-col rounded-lg bg-pale-sky-700/20 text-pale-sky hover:bg-pale-sky-700/30 hover:text-blue-ribbon hover:scale-105 hover:shadow-knowteckscard transition-all'>
			<div className='flex items-center justify-between'>
				<p className='text-xl font-medium'>{tech.name}</p>
				<span className='text-2xl'>{tech.icon}</span>
			</div>
			<span>{`${relativeTime} d'expérience`}</span>
		</div>
	)
}
