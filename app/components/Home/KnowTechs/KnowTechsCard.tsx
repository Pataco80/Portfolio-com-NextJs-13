import { ReactNode } from 'react'
import { getRelativeTimeString } from '@/app/utils/getRelativeTime'
type KnowTechsCardProps = {
	title: string
	icon: ReactNode
	startDate: string
}

export const KnowTechsCard = ({
	title,
	icon,
	startDate,
}: KnowTechsCardProps) => {
	const relativeTime = getRelativeTimeString(
		new Date(startDate),
		'fr-fr'
	).replace('il y a ', '')
	return (
		<div className='p-6 rounded-lg flex flex-col gap-2 bg-pale-sky-800 hover:bg-pale-sky-700 text-pale-sky-300 hover:text-blue-ribbon-800 transition-all hover:shadow-knowteckscard hover:shadow-blue-ribbon hover:scale-105'>
			<div className='flex items-center justify-between'>
				<p className='text-xl'>{title}</p>
				{icon}
			</div>
			<span>{`${relativeTime} d'expérience`}</span>
		</div>
	)
}
