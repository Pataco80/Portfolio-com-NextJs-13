// Imports Components
import { SectionTitle } from '@/components/shared/section-title'
import { WorkExperienceItem } from '@/pages/home/work-experience-item'
import { RichText } from '@/components/shared/rich-text'
// Imports types
import { WorkExperience as Works } from '@/types/works-experience'
import { HomePageInfo } from '@/types/page-info'
import { CMSIcon } from '@/components/shared/cms-icon'

// Types Props
type WorkExperienceProps = {
	homeInfo:HomePageInfo
	workExperience:Works[]
}

// Component
export const WorkExperience = ({homeInfo,workExperience}:WorkExperienceProps) => {
	return (
		// JSX Component
		<section className='container flex flex-col md:flex-row gap-8 lg:gap-10 py-16'>
			<article className='max-w-[450px] md:max-w-[300px] lg:max-w-[450px]'>
				<SectionTitle
					as='h2'
					title='Expériences professionnelles'
					subtitle='expériences'
				/>
				<div className='mt-6 text-pale-sky-400'>
				{homeInfo.workExperienceIntro?.raw && (
					<RichText content={homeInfo.workExperienceIntro.raw} />
				)}
				</div>
				<ul className="flex items-center gap-3 h-20 text-2xl">
					{homeInfo.socials.map((item, index) => {
						return <li key={index}><a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Voir mon profil ${item.name}`} className="inline-flex p-1 rounded-md text-pale-sky-400 hover:text-blue-ribbon-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-ribbon-300"><CMSIcon icon={item.iconSvg} /></a></li>
					})}
				</ul>
			</article>
			<div className='flex flex-col gap-12 lg:gap-16'>
				{
					workExperience.map((work) => {
						return <WorkExperienceItem key={work.compagnyName} work={work} />
					})
				}
			</div>
		</section>
	)
}
