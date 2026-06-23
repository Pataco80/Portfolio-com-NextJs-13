// Imports Components
import { ContactForm } from '@/components/shared/contact-form'
import { HiHeart } from 'react-icons/hi'
import { SectionLayout } from '@/components/layouts/section-layout'
// Component
export const Footer = () => {
	// JSX Component
	return (
		<SectionLayout as='footer' size='full' variant='default' className='dark flex flex-col items-center !pb-0'>
			<ContactForm />
			<span className='mt-20 lg:mt-28 flex items-center gap-2 h-[60px] text-xs sm:text-sm font-mono text-pale-sky-400 '>
				Made with <HiHeart className='text-blue-ribbon-400' /> by <strong className='font-medium'>DWDeveloppement</strong>
			</span>
		</SectionLayout>
	)
}
