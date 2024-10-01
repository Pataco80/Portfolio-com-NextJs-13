import React from 'react'

type TechBadgeProps = {
	name: string
}

export const TechBadge = ({ name }: TechBadgeProps) => {
	return (
		<span className='text-blue-ribbon-300 bg-blue-ribbon-700/80 px-2 py-1 rounded-lg'>
			{name}
		</span>
	)
}
