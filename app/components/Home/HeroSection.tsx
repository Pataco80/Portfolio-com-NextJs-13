import { ReactNode } from 'react'
import Image from 'next/image'
import { TechBadge } from '../TechBadge'
import { Button } from '../Button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { socialLinksList } from '@/app/constants/socialLinks'
type TechBadgeProps = {
	name: string
}

type SocialLinksProps = {
	icon: ReactNode
	url: string
}

export const HeroSection = () => {
	return (
		<header className='bg-hero-image bg-cover bg-no-repeat w-full h-full lg:h-[750px] py-20 lg:py-32 pb-12'>
			<h1 className='hidden'>Accueil - Bienvenue chez DWDeveloppement</h1>
			<div className='container flex items-center lg:items-start justify-between flex-col-reverse lg:flex-row gap-8 lg:gap-16'>
				<section className='max-w-[600px]'>
					<p className='text-pale-sky-500 text-2xl'>Bienvenue chez</p>
					<Image
						src='/images/logo-dwdeveloppment.png'
						alt='logo DWDeveloppement'
						width={500}
						height={74}
						className='pt-2 sm:pt-4 pb-10'
					/>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
						deserunt tempora minus aliquid eveniet repellendus dolorum ipsam
						nisi excepturi maiores!
					</p>
					<ul className='flex flex-wrap gap-x-4 gap-y-6 my-8 max-w-sm'>
						{Array.from({ length: 5 }).map((_, index) => (
							<TechBadge name='Next.js' />
						))}
					</ul>
					<div className='flex flex-col items-start lg:flex-row lg:items-center gap-6'>
						<Button className='flex items-center gap-2'>
							Contactez-moi
							<HiArrowNarrowRight size={24} />
						</Button>
						<ul className='flex justify-center items-center gap-4'>
							{socialLinksList.map(({ ...link }: SocialLinksProps, index) => (
								<li key={index}>
									<a
										className='text-pale-sky-500 hover:text-pale-sky-700'
										href={link.url}>
										{link.icon}
									</a>
								</li>
							))}
						</ul>
					</div>
				</section>
				<section>
					<Image
						src='/images/profile-pic.png'
						alt='Photo de profile'
						width={400}
						height={400}
						className='rounded-full max-w-[300px] h-auto lg:max-w-[400px] shadow-image'
					/>
				</section>
			</div>
		</header>
	)
}
