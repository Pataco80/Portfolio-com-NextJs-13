// Imports Components
import Image from 'next/image'
import { SectionLayout } from '@/components/layouts/section-layout'
import { SectionBackdrop } from '@/components/shared/section-backdrop'

// Imports types
import { ProjectSection } from '@/types/projects'

// Types
type ProjectSectionsProps = {
	sections: ProjectSection[]
}

// Component
export const ProjectSections = ({ sections }: ProjectSectionsProps) => {
	// JSX Component
	return (
		<SectionLayout as='section' size='lg' variant='default' backdrop={<SectionBackdrop />} className='flex flex-col gap-8 md:gap-32'>
			{sections.map((section) => {
				return (
					<div key={section.title} className='flex flex-col items-center gap-6 md:gap-12'>
						<div className='flex flex-col items-center gap-3'>
							<h2 className='text-2xl font-medium text-center md:text-3xl text-pale-sky-50'>{section.title}</h2>
							<span aria-hidden className='h-0.5 w-12 rounded-full bg-blue-ribbon-500/70' />
						</div>
						<Image
							src={section.image.url}
							alt={section.image.textAlt || section.title}
							width={1080}
							height={672}
							className='object-cover w-full rounded-lg aspect-auto border border-white/10 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.55)]'
							unoptimized
						/>
					</div>
				)
			})}
		</SectionLayout>
	)
}
