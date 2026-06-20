// Imports Next plugins
import Image from 'next/image'
import { ProjectSection } from '@/app/types/projects'
// Types
type ProjectSectionsProps = {
  sections: ProjectSection[]
}// Component
export const ProjectSections = ({sections}:ProjectSectionsProps) => {

	// JSX Component
  return (
    <section className='container my-12 md:my-32 flex flex-col gap-8 md:gap-32'>
      {
        sections.map(section => {
          return (
            <div key={section.title} className="flex flex-col items-center gap-6 md:gap-12">
              <div className="flex flex-col items-center gap-3">
                <h2 className="text-2xl md:text-3xl font-medium text-pale-sky-50 text-center">{section.title}</h2>
                <span aria-hidden className="h-0.5 w-12 rounded-full bg-blue-ribbon-500/70" />
              </div>
              <Image src={section.image.url} alt={section.image.textAlt || section.title} width={1080} height={672} className='w-full aspect-auto rounded-lg object-cover' unoptimized/>
            </div>
          )
        })
      }
    </section>
  )
}
