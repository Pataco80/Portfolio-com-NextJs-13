'use client'

import Image from 'next/image'
import { TechBadge } from '@/app/components/TechBadge'
import { Button } from '@/app/components/Button'
import { LuArrowRight } from 'react-icons/lu'


import { RichText } from '@/app/components/RichText'
import { CMSIcon } from '@/app/components/CMSIcon';
import { HomePageInfo } from '@/app/types/page-info';

type PageInfoProps = {
	homeInfo:HomePageInfo
}


export const HeroSection = ({ homeInfo }: PageInfoProps) => {
	const handleContact = () => {
		const contactSection = document.querySelector('#contact-form')
		contactSection ? contactSection.scrollIntoView({ behavior: 'smooth' }) : null
	}
	return (
		<>
			<section className='w-full lg:h-[1050px] bg-hero-image bg-cover bg-right-bottom lg:bg-center bg-no-repeat flex flex-col justify-end py-32 pb-10 sm:pb-32 lg:pb-[110px]'>
				<div className='container flex justify-between flex-col-reverse lg:flex-row gap-20 lg:gap-8'>
					<div className='w-full lg:max-w-[550px]'>
						<Image
							src='/images/logos/logo-dwdevelopment.webp'
							alt='alt'
							width={600}
							height={72}
							className='mb-8'
						/>
						<p className='text-sm sm:text-base text-blue-ribbon-300 mb-4'>Bonjour je m'appèle</p>
						<h2 className='font-mono text-xl sm:text-2xl md:text-3xl'>Ricardo Do Vale</h2>
						<div className='my-8 text-pale-sky-500 text-sm sm:text-base'>
						<RichText content={homeInfo.introduction.raw}/>
						</div>
						<ul className='mt-5 flex gap-x-2 gap-y-3 flex-wrap max-w-[350px] list-none'>
							{homeInfo.technologies.map((item, index) => {
								return <li key={index}><TechBadge name={item.name}/></li>
							})}
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
		</>
	)
}
