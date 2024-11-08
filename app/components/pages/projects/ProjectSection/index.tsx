// Imports Next plugins
import Image from 'next/image'

// Datas
const sections = [
  {
					"title":"Home Page BookWise",
					"image":"default-1.jpg"
				},
				{
					"title":"Login BookWise",
					"image":"default-2.jpeg"
				}
]

// Component
export const ProjectSection = () => {

	// JSX Component
  return (
    <section className='container my-12 md:my-32 flex flex-col gap-8 md:gap-32'>
      {
        sections.map(section => {
          return (
            <div key={section.title} className="flex flex-col items-center gap-6 md:gap-12">
              <h2 className="text-2xl md:text-3xl font-medium text-pale-sky-300">{section.title}</h2>
              <Image src={`/images/projects/${section.image}`} alt={`image de ${section.title}`} width={1080} height={672} className='w-full aspect-auto rounded-lg object-cover' unoptimized/>
            </div>
          )
        })
      }
    </section>
  )
}
