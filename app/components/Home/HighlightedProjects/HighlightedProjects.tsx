import React from 'react'
import { SectionTitle } from '../../SectionTitle'
import { Divider } from '../../Divider'
import { HighlightedCard } from './HighlightedCard'
import { Link } from '@/app/components/Link'
import { HiArrowNarrowRight } from 'react-icons/hi'
export const HighlightedProjects = () => {
	return (
		<section className='container py-16'>
			<SectionTitle
				title='Mes projets mis en avent'
				subtitle='projets phares'
			/>
			<Divider />
			<HighlightedCard />
			<Divider />
			<HighlightedCard />
			<Divider />
			<HighlightedCard />
			<Divider />
			<HighlightedCard />
			<Divider />
			<p className='flex items-center gap-2'>
				<span className='inline-flex text-pale-sky'>Si intéréssé voir</span>
				<Link href='projects'>
					Tous les projets
					<HiArrowNarrowRight size={32} />
				</Link>
			</p>
		</section>
	)
}
