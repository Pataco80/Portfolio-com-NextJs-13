import React from 'react'
import { SectionTitle } from '@/app/components/SectionTitle'
import { KnowTechCard } from './KnowTechCard'
import { TbBrandHtml5 } from 'react-icons/tb'
import { knownTech } from '@/app/types/projects'

type knownTechProps = {
	knownTechData:knownTech[]
}


export const KnowTechs = ({ knownTechData }: knownTechProps) => {
	return (
		<section className='container py-16'>
			<SectionTitle title='Mes Connaissances' subtitle='compétences' />
			<div className=' mt-16 grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-4'>
				{knownTechData?.map((tech) => {
					return <KnowTechCard key={tech.name} tech={tech} />
				})}
			</div>
		</section>
	)
}
