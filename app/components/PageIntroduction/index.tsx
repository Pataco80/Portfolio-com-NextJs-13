import React from 'react'
import { SectionTitle } from '@/app/components/SectionTitle'
import { Link } from '@/app/components/Link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
export const PageIntroduction = () => {
  return (
    <section className='w-full h-[600px] flex flex-col items-center justify-center px-4 bg-hero-image bg-center bg-no-repeat bg-cover'>
      <SectionTitle title='Mes Projets' subtitle='projets' className='text-center items-center [&>h3]:text-4xl' />
      <div className="max-w-[650px] mt-4 flex flex-col items-center">
      <p className='my-6 sm:my-10 text-center text-sm sm:text-base text-pale-sky-400'>Ici vous pouvez voir une partie du travail que j'ai développé. Naviguez librement et explorez les projets pour voir comment ils ont été créés, les technologies utilisées et les fonctionnalités mises en œuvre.</p>
      <Link href="/"><HiArrowNarrowLeft/>Retour à la page d'Accueil</Link>
      </div>
    </section>
  )
}
