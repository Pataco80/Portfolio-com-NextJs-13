import Image from 'next/image'
import { TechBadge } from '@/app/components/TechBadge'
import { WorkExperience } from '@/app/types/works-experience'
import { RichText } from '@/app/components/RichText'

type WorkExperienceItemProps = {
	work:WorkExperience
}

export const WorkExperienceItem = ({work}:WorkExperienceItemProps) => {
	return (
			<article className='grid grid-cols-[40px,1fr] gap-4'>
			<div className='grid grid-col grid-rows-[40px,1fr] justify-items-center gap-4'>
				<div className='rounded-full p-1 border border-pale-sky-600 grid items-center'>
					<Image src={work.compagnyLogo.url} alt={`logo de ${work.compagnyLogo.textAlt}`} width={40} height={40} />
				</div>
					<div className='w-[2px] bg-pale-sky-600 h-full'/>
				</div>
			<div className='flex flex-col gap-6'>
				<div className='flex flex-col gap-2 text-sm sm:text-base'>
					<a href={work.compagnyUrl} target='_blank' rel='noreferrer' className='text-pale-sky-500 hover:text-blue-ribbon transition-colors'>{`@ ${work.compagnyName}`}</a>
					<h4>{work.role}</h4>
					<p className='text-pale-sky-500'>{`Du ${work.startDate} au ${work.endDate}`}</p>
					<div className='text-pale-sky-400'>
						<RichText content={work.description.raw}/>
					</div>
				</div>
				<div className='flex flex-col gap-3'>
					<h5 className='font-semibold'>Compétences</h5>
					<ul className='flex gap-x-2 gap-y-3 flex-wrap max-w-[400px] list-none'>
					{work.technologies.map((tech) => {
						return <li key={tech.name}><TechBadge name={tech.name} /></li>
					})}
					</ul>
				</div>
			</div>
		</article>		
	)
}
