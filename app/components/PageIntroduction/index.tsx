// Imports Components
import { SectionTitle } from '@/app/components/SectionTitle'
import { Link } from '@/app/components/Link'
import { HiArrowNarrowLeft } from 'react-icons/hi'

// Component
export const PageIntroduction = () => {

	// JSX Component
  return (
    <section className='relative overflow-hidden w-full h-[600px] flex flex-col items-center justify-center px-4 bg-hero-image bg-right-bottom lg:bg-center bg-no-repeat bg-cover [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]'>
      <div aria-hidden className='pointer-events-none absolute inset-0 z-0' style={{ background: 'radial-gradient(800px circle at 50% 35%, rgba(0,85,255,0.28) 0%, transparent 58%), linear-gradient(to bottom, rgba(0,5,16,0.55) 0%, rgba(0,13,42,0.25) 45%, rgba(0,19,64,0.85) 100%)' }} />
      <SectionTitle as='h1' title='Mes Projets' subtitle='projets' className='relative z-10 text-center items-center [&>:last-child]:text-4xl' />
      <div className="relative z-10 max-w-[650px] mt-4 flex flex-col items-center">
      <p className='my-6 sm:my-10 text-center text-sm sm:text-base text-pale-sky-400'>Ici vous pouvez voir une partie du travail que j&apos;ai développé. Naviguez librement et explorez les projets pour voir comment ils ont été créés, les technologies utilisées et les fonctionnalités mises en œuvre.</p>
      <Link href="/"><HiArrowNarrowLeft/>Retour à la page d&apos;Accueil</Link>
      </div>
    </section>
  )
}
