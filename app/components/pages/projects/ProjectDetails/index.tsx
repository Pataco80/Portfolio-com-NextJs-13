// Imports Components
import { SectionTitle } from '@/app/components/SectionTitle'
import { Link } from '@/app/components/Link';
import { Button } from '@/app/components/Button'
import { TechBadge } from '@/app/components/TechBadge'
import { LuGithub, LuGlobe, LuArrowLeft } from 'react-icons/lu';
import { Project } from '@/app/types/projects'

type ProjectDetailsProps = {
  project: Project
}

// Component
export const ProjectDetails = ({ project }: ProjectDetailsProps) => {

  // JSX Component
  return (
    <section className='w-full sm:min-h-[750px] relative flex flex-col items-center justify-end pb-10 sm:pb-24 px-6 py-24'>
      <div className='absolute inset-0 z-[-1]' style={{ background: 'url(/images/bg-portfolio-hero.webp) no-repeat right bottom/cover, url(/images/projects/default-1.jpg) no-repeat center/cover' }} />
      <SectionTitle as='h1' title={project.title} subtitle='projet' className='text-center items-center sm:[&>:last-child]:text-4xl' />
      <p className='text-pale-sky-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base'>{project.shortDescription}</p>
      <ul className='w-full sm:max-w-[330px] flex items-center justify-center gap-2 flex-wrap'>
        {project.technologies.map((tech) => (
          <li key={`${project.title}-tech-${tech.name}`}><TechBadge name={tech.name} /></li>
        ))}
      </ul>
      <div className='flex flex-col items-center justify-center w-full gap-4 my-6 sm:my-12 sm:flex-row'>
        {project.githubUrl && (
          <Button href={project.githubUrl} external className='min-w-[180px]'>
            <LuGithub size={20} />View on GitHub
          </Button>
        )}
        {project.liveProjectUrl && (
          <Button href={project.liveProjectUrl} external className='min-w-[180px]'>
            <LuGlobe size={20} />View Live Project
          </Button>
        )}
      </div>
      <Link href="/projects">
        <LuArrowLeft size={20} />Voir tous les projets
      </Link>
    </section>
  )
}
