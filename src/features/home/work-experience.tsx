// Imports Components
import { SectionLayout } from '@/components/layouts/section-layout'
import { SectionBackdrop } from '@/components/shared/section-backdrop'
import { SectionTitle } from '@/features/section-title/section-title'
import { WorkExperienceItem } from '@/features/work-experiences/work-experience-item'
import { RichText } from '@/features/rich-text/rich-text'
import { CMSIcon } from '@/features/icons/cms-icon'

// Imports types
import { WorkExperience as Works } from '@/types/works-experience'
import { HomePageInfo, SurfaceTone } from '@/types/page-info'

// Types Props
type WorkExperienceProps = {
	homeInfo: HomePageInfo
	workExperience: Works[]
	surface?: SurfaceTone
}

// Component
export const WorkExperience = ({ homeInfo, workExperience, surface }: WorkExperienceProps) => {
	// JSX Component
	return (
		<SectionLayout
			as='section'
			size='lg'
			variant={surface === 'sky950' ? 'alt-section' : 'default'}
			backdrop={<SectionBackdrop />}
			className='flex flex-col gap-8 md:flex-row lg:gap-10'>
			<article className='max-w-[450px] md:max-w-[300px] lg:max-w-[450px]'>
				<SectionTitle as='h2' title='Expériences professionnelles' subtitle='expériences' />
				<div className='mt-6 text-muted-foreground'>
					{homeInfo.workExperienceIntro?.raw && <RichText content={homeInfo.workExperienceIntro.raw} />}
				</div>
				<ul className='flex items-center h-20 gap-3 text-2xl'>
					{homeInfo.socials.map((item, index) => {
						return (
							<li key={index}>
								<a
									href={item.url}
									target='_blank'
									rel='noopener noreferrer'
									aria-label={`Voir mon profil ${item.name}`}
									className='inline-flex p-1 transition-colors rounded-md text-muted-foreground hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'>
									<CMSIcon icon={item.iconSvg} />
								</a>
							</li>
						)
					})}
				</ul>
			</article>
			<div className='flex flex-col gap-12 lg:gap-16'>
				{workExperience.map((work) => {
					return <WorkExperienceItem key={work.compagnyName} work={work} />
				})}
			</div>
		</SectionLayout>
	)
}
