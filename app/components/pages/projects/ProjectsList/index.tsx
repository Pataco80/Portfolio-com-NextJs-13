// Imports Components
import { CSSProperties } from 'react'
import { ProjectCard } from '@/app/components/pages/projects/ProjectCard'

// Import types
import { Project } from '@/app/types/projects'

type SurfaceTone = 'base' | 'sky950'

type ProjectsListProps = {
  projects:Project[]
  surface?:SurfaceTone
}

// Fond de section pour l'alternance (calque arriere dedie, sous le halo/lignes)
const surfaceClass: Record<SurfaceTone, string> = {
  base: 'bg-pale-sky-900',
  sky950: 'bg-pale-sky-950',
}

// Masque du motif de lignes : seul reliquat inline (Tailwind ne gere pas mask-image)
const linesMask: CSSProperties = {
  WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 22%, #000 78%, transparent)',
  maskImage: 'linear-gradient(to bottom, transparent, #000 22%, #000 78%, transparent)',
}

// Component
export const ProjectsList = ({projects, surface='base'}:ProjectsListProps) => {

	// JSX Component
  return (
    <section className='relative overflow-hidden'>
      <div aria-hidden className={`pointer-events-none absolute inset-0 -z-20 ${surfaceClass[surface]}`} />
      <div aria-hidden className='pointer-events-none absolute inset-0 -z-10 bg-section-glow' />
      <div aria-hidden className='pointer-events-none absolute inset-0 -z-10 bg-no-repeat bg-center bg-[length:100%_auto] rotate-[60deg] md:rotate-45 bg-[url(/images/circuit-lines.png)] opacity-25' style={linesMask} />
      <div className='container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-4 gap-y-6'>
        {projects.map((project) => {
          return <ProjectCard key={project.title} project={project} />
        })}
      </div>
    </section>
  )
}
