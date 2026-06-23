'use client'

// Imports Form plugins
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Imports Components
import { SectionLayout } from '@/components/layouts/section-layout'
import { SectionBackdrop } from '@/components/shared/section-backdrop'
import { SectionTitle } from '@/components/shared/section-title'
import { Button } from '@/components/shared/button'
import { HiArrowNarrowRight } from 'react-icons/hi'

// Component
export const ContactForm = () => {
	// Form Schema for create types
	const ContactFormSchema = z.object({
		name: z.string().min(3).max(20),
		email: z.string().email(),
		message: z.string().min(1).max(500),
	})

	// Types Props
	type ContactFormData = z.infer<typeof ContactFormSchema>

	// Components Functions
	const { register, handleSubmit } = useForm<ContactFormData>({
		resolver: zodResolver(ContactFormSchema),
	})

	const onSubmit = (data: ContactFormData) => console.log(data)

	// JSX Component
	return (
		<>
			<SectionTitle as='h2' title='Prenez contact avec moi' subtitle='contact' className='items-center text-center' />
			<form id='contact-form' onSubmit={handleSubmit(onSubmit)} className='mt-12 w-full max-w-[450px] flex flex-col gap-6'>
				<input
					type='text'
					placeholder='Nom'
					aria-label='Nom'
					className='w-full p-4 rounded-lg h-11 bg-pale-sky-800 placeholder:text-pale-sky-300 text-pale-sky-50 focus:outline-none focus:ring-2 focus:ring-blue-ribbon-400'
					{...register('name')}
				/>
				<input
					type='email'
					placeholder='Email'
					aria-label='Email'
					className='w-full p-4 rounded-lg h-11 bg-pale-sky-800 placeholder:text-pale-sky-300 text-pale-sky-50 focus:outline-none focus:ring-2 focus:ring-blue-ribbon-400'
					{...register('email')}
				/>
				<textarea
					placeholder='Message'
					aria-label='Message'
					className='w-full h-32 p-4 rounded-lg resize-none bg-pale-sky-800 placeholder:text-pale-sky-300 text-pale-sky-50 focus:outline-none focus:ring-2 focus:ring-blue-ribbon-400'
					maxLength={500}
					{...register('message')}
				/>
				<Button className='self-center mt-4'>
					Contactez-moi
					<HiArrowNarrowRight size={18} />
				</Button>
			</form>
		</>
	)
}
