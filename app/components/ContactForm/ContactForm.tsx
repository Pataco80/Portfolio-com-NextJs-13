'use client'
import React from 'react'
import { SectionTitle } from '../SectionTitle'
import { Button } from '../Button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const FormSchema = z.object({
	name: z.string().min(2).max(15),
	email: z.string(),
	message: z.string().min(2).max(150),
})

type ContactFormSchema = z.infer<typeof FormSchema>

export const ContactForm = () => {
	const { handleSubmit, register } = useForm<ContactFormSchema>({
		resolver: zodResolver(FormSchema),
	})
	const onSubmitForm = (data: ContactFormSchema) => console.log(data)

	return (
		<section className='flex items-center justify-center px-6 py-16 md:py-32 bg-pale-sky-950'>
			<div className='w-full mx-auto max-w-[450px]'>
				<SectionTitle
					title='Vous souhaitez travailler avec moi ? Prenez donc contact.'
					subtitle='contact'
					className='text-center items-center'
				/>
				<form
					onSubmit={handleSubmit(onSubmitForm)}
					className='mt-12 w-full flex flex-col gap-4'>
					<input
						type='text'
						className='w-full h-14 p-4 rounded-lg bg-pale-sky-700 text-pale-sky-300 placeholder:text-pale-sky-200 text-xl focus:outline-none focus:ring-2 focus:ring-blue-ribbon-600'
						placeholder='Nom'
						{...register('name')}
					/>
					<input
						type='email'
						className='w-full h-14 p-4 rounded-lg bg-pale-sky-700 text-pale-sky-300 placeholder:text-pale-sky-200 text-xl focus:outline-none focus:ring-2 focus:ring-blue-ribbon-600'
						placeholder='E-mail'
						{...register('email')}
					/>
					<textarea
						className='resize-none w-full h-36 p-4 rounded-lg bg-pale-sky-700 text-pale-sky-300 placeholder:text-pale-sky-200 text-xl focus:outline-none focus:ring-2 focus:ring-blue-ribbon-600'
						placeholder='Message'
						{...register('message')}
					/>
					<Button className='flex items-center w-max mx-auto gap-2'>
						Envoyer le message
						<HiArrowNarrowRight size={18} />
					</Button>
				</form>
			</div>
		</section>
	)
}
