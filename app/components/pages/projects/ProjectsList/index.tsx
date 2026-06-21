// Imports Components
import { CSSProperties } from 'react'
import { ProjectCard } from '@/app/components/pages/projects/ProjectCard'

// Import types
import { Project } from '@/app/types/projects'

type LinesMode = 'A' | 'B' | 'C'
type LinesVariant = 'blue' | 'neutral'
type SurfaceTone = 'base' | 'sky950' | 'black' | 'blue950'

type ProjectsListProps = {
  projects:Project[]
  linesMode?:LinesMode
  linesVariant?:LinesVariant
  linesFaint?:boolean
  surface?:SurfaceTone
}

// Fond de section pour l'alternance (calque arriere dedie, sous le halo/lignes)
const surfaceClass: Record<SurfaceTone, string> = {
  base: 'bg-pale-sky-900',
  sky950: 'bg-pale-sky-950',
  black: 'bg-black',
  blue950: 'bg-blue-ribbon-950',
}

// Taille du motif de lignes par couverture (Tailwind)
const linesSize: Record<LinesMode, string> = {
  A: 'bg-[length:82%_auto]',
  B: 'bg-[length:100%_auto]',
  C: 'bg-[length:100%_100%]',
}

// Masque en degrade : seul reliquat inline (Tailwind ne gere pas les mask-image)
const linesMask: Record<LinesMode, CSSProperties> = {
  A: { WebkitMaskImage:'radial-gradient(ellipse 62% 80% at 50% 50%, #000 30%, transparent 78%)',
       maskImage:'radial-gradient(ellipse 62% 80% at 50% 50%, #000 30%, transparent 78%)' },
  B: { WebkitMaskImage:'linear-gradient(to bottom, transparent, #000 22%, #000 78%, transparent)',
       maskImage:'linear-gradient(to bottom, transparent, #000 22%, #000 78%, transparent)' },
  C: {},
}

// Component
export const ProjectsList = ({projects, linesMode='A', linesVariant='blue', linesFaint=false, surface='base'}:ProjectsListProps) => {

  const linesImg = linesVariant === 'neutral' ? 'bg-[url(/images/circuit-lines-neutral.png)]' : 'bg-[url(/images/circuit-lines.png)]'
  const linesOpacity = linesFaint ? 'opacity-25' : 'opacity-50'

	// JSX Component
  return (
    <section className='relative overflow-hidden'>
      <div aria-hidden className={`pointer-events-none absolute inset-0 -z-20 ${surfaceClass[surface]}`} />
      <div aria-hidden className='pointer-events-none absolute inset-0 -z-10 bg-section-glow' />
      <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 bg-no-repeat bg-center rotate-[60deg] md:rotate-45 ${linesImg} ${linesSize[linesMode]} ${linesOpacity}`} style={linesMask[linesMode]} />
      <div className='container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-4 gap-y-6'>
        {projects.map((project) => {
          return <ProjectCard key={project.title} project={project} />
        })}
      </div>
    </section>
  )
}
