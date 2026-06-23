'use client'

// Imports Next plugins
import Image from 'next/image'

// Imports Components
import { TechBadge } from '@/components/shared/tech-badge'
import { Button } from '@/components/shared/button'
import { RichText } from '@/components/shared/rich-text'
import { CMSIcon } from '@/components/shared/cms-icon'
import { LuArrowRight } from 'react-icons/lu'

// Imports types
import { HomePageInfo } from '@/types/page-info'

// Types Props
type PageInfoProps = {
	homeInfo: HomePageInfo
}

// Component
export const HeroSection = ({ homeInfo }: PageInfoProps) => {
	// Components Functions
	const handleContact = () => {
		const contactSection = document.querySelector('#contact-form')
		contactSection ? contactSection.scrollIntoView({ behavior: 'smooth' }) : null
	}

	// JSX Component
	return (
		<section className='dark relative w-full lg:h-[1050px] bg-pale-sky-950 bg-hero-image bg-cover bg-right-bottom lg:bg-center bg-no-repeat flex flex-col justify-end px-4 pt-20 lg:pt-16'>
			<div
				aria-hidden
				className='absolute inset-0 z-0 pointer-events-none'
				style={{
					background:
						'radial-gradient(900px circle at 50% 28%, rgba(0,85,255,0.30) 0%, transparent 55%), radial-gradient(650px circle at 80% 52%, rgba(0,85,255,0.18) 0%, transparent 60%), linear-gradient(to bottom, rgba(0,5,16,0.65) 0%, rgba(0,13,42,0.30) 40%, rgba(0,19,64,0.88) 100%)',
				}}
			/>
			<div className='relative z-10 container flex justify-between flex-col-reverse lg:flex-row gap-20 lg:gap-8 [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]'>
				<div className='w-full lg:max-w-[550px]'>
					<Image src='/images/logos/logo-dwdevelopment.webp' alt='' width={600} height={72} className='mb-8 h-auto' />
					<p className='mb-4 text-sm sm:text-base text-blue-ribbon-300'>Bonjour je m&apos;appèle</p>
					<h1 className='font-mono text-xl sm:text-2xl md:text-3xl text-pale-sky-50'>
						<span className='sr-only'>DWDeveloppement - </span>Ricardo Do Vale
					</h1>
					<div className='my-8 text-sm text-pale-sky-400 sm:text-base'>
						<RichText content={homeInfo.introduction.raw} />
					</div>
					<ul className='mt-5 flex gap-x-2 gap-y-3 flex-wrap max-w-[350px] list-none'>
						{homeInfo.technologies.map((tech) => (
							<li key={tech.name}>
								<TechBadge name={tech.name} />
							</li>
						))}
					</ul>
					<div className='flex flex-col items-start gap-3 mt-6 lg:mt-10 md:flex-row md:items-center sm:gap-5'>
						<Button onClick={handleContact} type='button'>
							Contactez-moi
							<LuArrowRight size={18} />
						</Button>
						<ul className='flex items-center h-20 gap-3 text-2xl'>
							{homeInfo.socials.map((item, index) => {
								return (
									<li key={item.name}>
										<a
											href={item.url}
											target='_blank'
											rel='noopener noreferrer'
											aria-label={`Voir mon profil ${item.name}`}
											className='inline-flex p-1 transition-colors rounded-md text-pale-sky-400 hover:text-blue-ribbon-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-ribbon-300'>
											<CMSIcon icon={item.iconSvg} />
										</a>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
				<Image
					src={homeInfo.profilePicture.url}
					alt={homeInfo.profilePicture.textAlt}
					width={450}
					height={450}
					className='self-center object-cover rounded-full shadow-image'
				/>
			</div>
		</section>
	)
}
