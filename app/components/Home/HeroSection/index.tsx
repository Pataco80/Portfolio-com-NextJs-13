import Image from 'next/image'
import { TechBadge } from '@/app/components/TechBadge'
import { Button } from '@/app/components/Button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import techBadgeData from '@/app/data/tech-badge.json'
import { SocialIcons } from '@/app/components/SocialIcons'

export const HeroSection = () => {
	return (
		<>
			<section className='w-full lg:h-[800px] bg-hero-image bg-cover bg-right-bottom lg:bg-center bg-no-repeat flex flex-col justify-end py-32 pb-10 sm:pb-32 lg:pb-[110px]'>
				<div className='container flex justify-between flex-col-reverse lg:flex-row gap-8'>
					<div className='w-full lg:max-w-[550px]'>
						<p className='text-blue-ribbon-300 mb-4'>Bonjour je m'appèle</p>
						<h2 className='font-mono text-4xl mb-4'>Ricardo Do Vale</h2>
						<Image
							src='/images/logos/logo-dwdevelopment.webp'
							alt='alt'
							width={600}
							height={72}
						/>
						<p className='mt-8 text-pale-sky text-sm sm:text-base mb-4'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
							soluta itaque fugit eos quos adipisci.
						</p>
						<ul className='flex gap-x-2 gap-y-3 flex-wrap max-w-[350px] list-none'>
							{techBadgeData.tech_badge.map((item, index) => (
								<li key={index}><TechBadge name={item.name} /></li>
							))}
						</ul>

						<div className='mt-6 lg:mt-10 flex flex-col md:flex-row items-start md:items-center gap-3 sm:gap-5'>
							<Button>
								Contactez-moi
								<HiArrowNarrowRight size={18} />
							</Button>
							<SocialIcons />
						</div>
					</div>
					<Image
						src='/images/profile-pic.webp'
						alt='Photo de profile'
						width={450}
						height={450}
						className='shadow-image object-cover rounded-full  self-center'
					/>
				</div>
			</section>
		</>
	)
}
