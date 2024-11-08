// Imports Components
import { SectionTitle } from '@/app/components/SectionTitle'
import { WorkExperienceItem } from '@/app/components/pages/home/WorkExperience/WorkExperienceItem'

// Imports types
import { WorkExperience as Works } from '@/app/types/works-experience'

// Types Props
type WorkExperienceProps = {
	workExperience:Works[]
}

// Component
export const WorkExperience = ({workExperience}:WorkExperienceProps) => {
	return (
		// JSX Component
		<section className='container flex flex-col md:flex-row gap-8 lg:gap-10 py-16'>
			<article className='max-w-[450px] md:max-w-[300px] lg:max-w-[450px]'>
				<SectionTitle
					title='Expériences professionnelles'
					subtitle='expériences'
				/>
				<p className='mt-6 text-pale-sky-400'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a
					similique temporibus quaerat soluta nulla distinctio assumenda velit.
					Laboriosam, aperiam?
				</p>
			</article>
			<div className='flex flex-col gap-8'>
				{
					workExperience.map((work) => {
						return <WorkExperienceItem key={work.compagnyName} work={work} />
					})
				}
			</div>
		</section>
	)
}
