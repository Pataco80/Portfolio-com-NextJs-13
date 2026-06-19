// Types Props
type TechBadgeProps = {
	name: string
}

// Component
export const TechBadge = ({ name }: TechBadgeProps) => {

	// JSX Component
	return (
		<span className='text-blue-ribbon-200 bg-blue-ribbon-700 px-2 py-1 rounded-lg'>
			{name}
		</span>
	)
}
