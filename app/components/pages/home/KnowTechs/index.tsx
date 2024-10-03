import React from 'react'
import { SectionTitle } from '@/app/components/SectionTitle'
import { KnowTechCard } from './KnowTechCard'
import { TbBrandHtml5 } from 'react-icons/tb'
import knowTechList from '@/app/data/know-techs-list'

export const KnowTechs = () => {
	return (
		<section className='container py-16'>
			<SectionTitle title='Mes Connaissances' subtitle='compétences' />
			<div className=' mt-16 grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-4'>
				{knowTechList.map((tech, index) => {
					return <KnowTechCard key={index} tech={tech} />
				})}
			</div>
		</section>
	)
}
