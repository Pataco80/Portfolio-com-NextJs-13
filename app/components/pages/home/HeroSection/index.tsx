'use client'

// Imports Next plugins
import Image from 'next/image'

// Imports Components
import { TechBadge } from '@/app/components/TechBadge'
import { Button } from '@/app/components/Button'
import { RichText } from '@/app/components/RichText'
import { CMSIcon } from '@/app/components/CMSIcon'
import { LuArrowRight } from 'react-icons/lu'

// Imports types
import { HomePageInfo } from '@/app/types/page-info'

// Types Props
type PageInfoProps = {
	homeInfo:HomePageInfo
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
			<section className='relative overflow-hidden w-full lg:h-[1050px] bg-hero-image bg-cover bg-right-bottom lg:bg-center bg-no-repeat flex flex-col justify-end py-32 pb-10 sm:pb-32 lg:pb-[110px]'>
				<div
					aria-hidden
					className='pointer-events-none absolute inset-0 z-0'
					style={{
						background:
							'radial-gradient(900px circle at 50% 28%, rgba(0,85,255,0.30) 0%, transparent 55%), radial-gradient(650px circle at 80% 52%, rgba(0,85,255,0.18) 0%, transparent 60%), linear-gradient(to bottom, rgba(0,5,16,0.65) 0%, rgba(0,13,42,0.30) 40%, rgba(0,19,64,0.88) 100%)',
					}}
				/>
				<div className='relative z-10 container flex justify-between flex-col-reverse lg:flex-row gap-20 lg:gap-8 [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]'>
					<div className='w-full lg:max-w-[550px]'>
						<Image
							src='/images/logos/logo-dwdevelopment.webp'
							alt='alt'
							width={600}
							height={72}
							className='mb-8'
						/>
						<p className='text-sm sm:text-base text-blue-ribbon-300 mb-4'>Bonjour je m&apos;appèle</p>
						<h2 className='font-mono text-xl sm:text-2xl md:text-3xl'>Ricardo Do Vale</h2>
						<div className='my-8 text-pale-sky-500 text-sm sm:text-base'>
						<RichText content={homeInfo.introduction.raw}/>
						</div>
						<ul className='mt-5 flex gap-x-2 gap-y-3 flex-wrap max-w-[350px] list-none'>
							{homeInfo.technologies.map((tech) => <li key={tech.name}>
								<TechBadge name={tech.name} />
							</li>)}
						</ul>
						<div className='mt-6 lg:mt-10 flex flex-col md:flex-row items-start md:items-center gap-3 sm:gap-5'>
							<Button onClick={handleContact}>
								Contactez-moi
								<LuArrowRight size={18} />
							</Button>
							<ul className="flex items-center gap-3 h-20 text-2xl text-pale-sky-600">
							{homeInfo.socials.map((item, index) => {
								return <li key={index}><a href={item.url}><CMSIcon icon={item.iconSvg} /></a></li>
							})}
							</ul>
						</div>
					</div>
					<Image
						src={homeInfo.profilePicture.url}
						alt={homeInfo.profilePicture.textAlt}
						width={450}
						height={450}
						className='shadow-image object-cover rounded-full  self-center'
					/>
				</div>
			</section>
	)
}
