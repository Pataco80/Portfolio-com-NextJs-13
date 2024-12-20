'use client'

// Imports Form plugins
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Imports Components
import { SectionTitle } from '../SectionTitle'
import { Button } from '../Button'
import { HiArrowNarrowRight } from 'react-icons/hi'

// Component
export const ContactForm = () => {
  // Form Schema for create types
  const ContactFormSchema = z.object({
    name:z.string().min(3).max(20),
    email:z.string().email(),
    message:z.string().min(1).max(500),
  })
  
  // Types Props
  type ContactFormData = z.infer<typeof ContactFormSchema>
  
  // Components Functions
  const { register, handleSubmit } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema)
  })
  
  const onSubmit = (data:ContactFormData) => console.log(data)
  
	// JSX Component
  return (
    <section id='contact-form' className='container py-16 md:py-32 flex flex-col items-center'>
      <SectionTitle title='Prenez contact avec moi' subtitle='contact' className='text-center items-center'/>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-12 w-full max-w-[450px] flex flex-col gap-6' action="">
        <input type='text' placeholder='Nom' className='w-full h-11 p-4 bg-pale-sky-800 rounded-lg placeholder:text-pale-sky-500 text-pale-sky-50 focus:outline-none focus:ring-2 ring-blue-ribbon' {...register('name')}/>

        <input type='email' placeholder='Email' className='w-full h-11 p-4 bg-pale-sky-800 rounded-lg placeholder:text-pale-sky-500 text-pale-sky-50 focus:outline-none focus:ring-2 ring-blue-ribbon' {...register('email')}/>
        
        <textarea placeholder='Message' className='w-full h-32 p-4 bg-pale-sky-800 rounded-lg placeholder:text-pale-sky-500 text-pale-sky-50 focus:outline-none focus:ring-2 ring-blue-ribbon resize-none' maxLength={500} {...register('message')}/>
        
        <Button className='mt-4 self-center'>
          Contactez-moi
					<HiArrowNarrowRight size={18} />
				</Button>
      </form>
    </section>
  )
}
