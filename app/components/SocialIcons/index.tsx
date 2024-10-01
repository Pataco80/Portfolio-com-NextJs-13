import {SOCIAL_ICONS} from '@/app/data/social-icons'

export const SocialIcons = () => {
	return (
		<ul className='flex text-2xl h-5 gap-3'>
			{SOCIAL_ICONS.map((item) => {
				return (
					<li key={item.name}>
						<a
							className='text-pale-sky-700 hover:text-pale-sky-500 transition-colors'
							href={item.url}>
							{item.icon}
						</a>
					</li>
				)
			})}
		</ul>
	)
}
