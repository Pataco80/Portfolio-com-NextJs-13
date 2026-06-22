import Image from 'next/image'
import { TechBadge } from '@/components/shared/tech-badge'
import { WorkExperience } from '@/types/works-experience'
import { RichText } from '@/components/shared/rich-text'

type WorkExperienceItemProps = {
	work:WorkExperience
}

export const WorkExperienceItem = ({work}:WorkExperienceItemProps) => {
	return (
			<article className='grid grid-cols-[40px,1fr] gap-4'>
			<div className='grid grid-col grid-rows-[40px,1fr] justify-items-center gap-4'>
				<div className='rounded-full p-1 border-2 border-blue-ribbon-500/70 bg-blue-ribbon-500/10 shadow-[0_0_12px_rgba(0,85,255,0.25)] grid items-center'>
					<Image src={work.compagnyLogo.url} alt={`logo de ${work.compagnyLogo.textAlt}`} width={40} height={40} />
				</div>
					<div className='w-[2px] bg-gradient-to-b from-blue-ribbon-500/60 to-pale-sky-700 h-full'/>
				</div>
			<div className='flex flex-col gap-6'>
				<div className='flex flex-col gap-2 text-sm sm:text-base'>
					<h3 className='w-fit'><a href={work.compagnyUrl} target='_blank' rel='noreferrer' className='rounded-sm text-base sm:text-lg font-semibold text-pale-sky-50 hover:text-blue-ribbon-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-ribbon-300 focus-visible:ring-offset-2 focus-visible:ring-offset-pale-sky-900'><span className='text-blue-ribbon-400'>@</span> {work.compagnyName}</a></h3>
					{work.role && <p className='text-blue-ribbon-300 font-medium'>{work.role}</p>}
					<p className='text-xs sm:text-sm font-mono text-pale-sky-400'>{`Du ${work.startDate} au ${work.endDate}`}</p>
					<div className='mt-3 text-pale-sky-300'>
						<RichText content={work.description.raw}/>
					</div>
				</div>
				<div className='flex flex-col gap-3'>
					<h4 className='font-semibold text-pale-sky-50'>Compétences</h4>
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
