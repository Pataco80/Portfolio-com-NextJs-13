import { Button } from '@/app/components/Button'
import { Link } from '@/app/components/Link';
import { SectionTitle } from '@/app/components/SectionTitle'
import { TechBadge } from '@/app/components/TechBadge'
import React from 'react'
import { LuGithub, LuGlobe,LuArrowLeft } from 'react-icons/lu';



export const ProjectDetails = () => {
  return (
    <section className='w-full sm:min-h-[750px] relative flex flex-col items-center justify-end pb-10 sm:pb-24 px-6 py-24'>
      <div className='absolute inset-0 z-[-1]' style={{ background: 'url(/images/bg-portfolio-hero.webp) no-repeat right bottom/cover, url(/images/projects/default-1.jpg) no-repeat center/cover' }} />
      <SectionTitle title='My project'subtitle='projet' className='text-center items-center sm:[&>h3]:text-4xl' />
      <p className='text-pale-sky-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base'>BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js.</p>
      <div className='w-full sm:max-w-[330px] flex items-center justify-center gap-2 flex-wrap'>
        <TechBadge name='Nextjs'/>
        <TechBadge name='Nextjs'/>
        <TechBadge name='Nextjs'/>
        <TechBadge name='Nextjs'/>
        <TechBadge name='Nextjs'/>
      </div>
      <div className='w-full my-6 sm:my-12 flex flex-col sm:flex-row items-center justify-center gap-4'>
        <a href="#" target='_blank'>
          <Button className='min-w-[180px]'>
            <LuGithub size={20}/>Link github</Button>
        </a>
        <a href="#" target='_blank'>
          <Button className='min-w-[180px]'>
            <LuGlobe size={20}/>Link github</Button>
        </a>
      </div>
      <Link href="/projects">
      <LuArrowLeft size={20}/>Voir tous les projets</Link>
    </section>
  )
}
