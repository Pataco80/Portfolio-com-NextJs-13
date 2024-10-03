import React from 'react'
import { SectionTitle } from '@/app/components/SectionTitle'
import { DividerHorizontal } from '@/app/components/DividerLine'
import { HighlightCard } from './HighlightCard'
import { Link } from '@/app/components/Link'
import data from '@/app/data/highlight-projects.json'
import { HiArrowNarrowRight } from 'react-icons/hi'
export const HighlightedProjects = () => {
	const projectsList = data.highlight_projects
	return (
		<section className='container py-16'>
			<SectionTitle title='Projets en vedette' subtitle="highlight's" />
			<DividerHorizontal />

			{projectsList.map((item, index) => {
				return (
					<>
						<HighlightCard
							key={index}
							name={item.name}
							image={item.image}
							altImage={item.altImage}
							url={item.url}
							description={item.description}
							techs={item.techs}
						/>
						<DividerHorizontal className='my-16' />
					</>
				)
			})}
			<p className='flex items-center gap-1.5'>
				<span className='text-pale-sky-400'>Si intéressé ?</span>
				<Link className='inline-flex' href='/projects'>
					Voir tous les projets
					<HiArrowNarrowRight />
				</Link>
			</p>
		</section>
	)
}
