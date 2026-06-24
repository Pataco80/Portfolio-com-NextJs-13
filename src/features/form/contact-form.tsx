'use client'

// Imports Form plugins
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { toast } from 'sonner'

// Imports Components
import { SectionTitle } from '@/features/section-title/section-title'
import { Button } from '@/components/shared/button'
import { Icon } from '@/features/icons/icons'
import { sendContact } from '@/lib/actions/send-contact'

// Form Schema (messages FR)
const ContactFormSchema = z.object({
	name: z.string().min(3, 'Au moins 3 caractères').max(20, 'Maximum 20 caractères'),
	email: z.string().email('Adresse email invalide'),
	message: z.string().min(1, 'Le message est requis').max(500, 'Maximum 500 caractères'),
})
type ContactFormData = z.infer<typeof ContactFormSchema>

const STORAGE_KEY = 'contact-form-draft'

const fieldClass =
	'w-full p-4 rounded-lg bg-pale-sky-800 placeholder:text-pale-sky-300 text-pale-sky-50 focus:outline-none focus:ring-2 focus:ring-blue-ribbon-400 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-400'

// Component
export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		watch,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormData>({
		resolver: zodResolver(ContactFormSchema),
		defaultValues: { name: '', email: '', message: '' },
	})

	// Restaure le brouillon depuis localStorage au montage
	useEffect(() => {
		try {
			const saved = localStorage.getItem(STORAGE_KEY)
			if (!saved) return
			const draft = JSON.parse(saved) as Partial<ContactFormData>
			if (draft.name) setValue('name', draft.name)
			if (draft.email) setValue('email', draft.email)
			if (draft.message) setValue('message', draft.message)
		} catch {
			/* localStorage indispo ou JSON invalide : on ignore */
		}
	}, [setValue])

	// Persiste le brouillon a chaque frappe (utile si rechargement / erreur d'envoi)
	useEffect(() => {
		const sub = watch((value) => {
			try {
				localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
			} catch {
				/* ignore */
			}
		})
		return () => sub.unsubscribe()
	}, [watch])

	const onSubmit = async (data: ContactFormData) => {
		const res = await sendContact(data)
		if (res.success) {
			toast.success('Message envoyé, merci ! Je te réponds vite.')
			try {
				localStorage.removeItem(STORAGE_KEY)
			} catch {
				/* ignore */
			}
			reset({ name: '', email: '', message: '' })
		} else {
			toast.error(res.error ?? "L'envoi a échoué, réessaie.")
		}
	}

	// JSX Component
	return (
		<section className='px-4'>
			<SectionTitle as='h2' title='Prenez contact avec moi' subtitle='contact' className='items-center text-center' />
			<form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate className='mt-12 w-full max-w-[450px] flex flex-col gap-5'>
				<div className='flex flex-col gap-1.5'>
					<input
						type='text'
						placeholder='Nom'
						aria-label='Nom'
						aria-invalid={!!errors.name}
						aria-describedby={errors.name ? 'contact-error-name' : undefined}
						className={`h-11 ${fieldClass}`}
						{...register('name')}
					/>
					{errors.name && (
						<p id='contact-error-name' className='text-sm text-red-400'>
							{errors.name.message}
						</p>
					)}
				</div>

				<div className='flex flex-col gap-1.5'>
					<input
						type='email'
						placeholder='Email'
						aria-label='Email'
						aria-invalid={!!errors.email}
						aria-describedby={errors.email ? 'contact-error-email' : undefined}
						className={`h-11 ${fieldClass}`}
						{...register('email')}
					/>
					{errors.email && (
						<p id='contact-error-email' className='text-sm text-red-400'>
							{errors.email.message}
						</p>
					)}
				</div>

				<div className='flex flex-col gap-1.5'>
					<textarea
						placeholder='Message'
						aria-label='Message'
						aria-invalid={!!errors.message}
						aria-describedby={errors.message ? 'contact-error-message' : undefined}
						maxLength={500}
						className={`h-32 resize-none ${fieldClass}`}
						{...register('message')}
					/>
					{errors.message && (
						<p id='contact-error-message' className='text-sm text-red-400'>
							{errors.message.message}
						</p>
					)}
				</div>

				<Button type='submit' disabled={isSubmitting} className='self-center mt-4'>
					{isSubmitting ? 'Envoi…' : 'Contactez-moi'}
					<Icon name='arrow-right' size={18} />
				</Button>
			</form>
		</section>
	)
}
