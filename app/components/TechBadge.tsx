type TechBadgeProps = {
	name: string
}

export const TechBadge = ({ name }: TechBadgeProps) => {
	return (
		<li className='text-blue-ribbon-300 py-1 px-3 text-sm rounded-lg bg-blue-ribbon-700/70'>
			{name}
		</li>
	)
}
