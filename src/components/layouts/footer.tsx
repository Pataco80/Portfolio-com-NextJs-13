// Imports Components
import { ContactForm } from '@/features/form/contact-form'
import { Icon } from '@/features/icons/icons'
import { SectionLayout } from '@/components/layouts/section-layout'
// Component
export const Footer = () => {
	// JSX Component
	return (
		<SectionLayout as='footer' size='full' variant='default' className='flex flex-col items-center !px-0 !pb-0'>
			<ContactForm />
			<div className='w-full bg-pale-sky-950 mt-20 lg:mt-28 flex items-center justify-center gap-2 h-[60px] text-xs sm:text-sm font-mono text-pale-sky-400 '>
				Made with <Icon name='heart' size={16} className='text-blue-ribbon-400' fill='currentColor' /> by <strong className='font-medium'>DWDeveloppement</strong>
			</div>
		</SectionLayout>
	)
}
