import React from 'react'
import { ContactForm } from '@/app/components/ContactForm'
import { HiHeart } from "react-icons/hi";

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center bg-pale-sky-950'>
      <ContactForm />
      <span className='flex items-center gap-2 h-[60px] text-xs sm:text-sm font-mono text-pale-sky-400 '>Made with <HiHeart className='text-blue-ribbon' /> by <strong className='font-medium'>DWDeveloppement</strong></span>
    </footer>
  )
}
