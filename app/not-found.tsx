// Imports Next plugins
import Link from 'next/link'

// Imports Components
import { Button } from '@/components/shared/button'
import { Icon } from '@/features/icons/icons'
// Component
export default function NotFound() {
	// JSX Component
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<h1 className='font-bold text-9xl text-blue-ribbon'>404</h1>
			<h2 className='mb-4 text-3xl font-medium text-pale-sky-400'>Page non trouvée</h2>
			<Link href='/'>
				<Button>
					<Icon name='arrow-left' size={20} className='mr-2' />
					Retour à la page d&apos;Accueil
				</Button>
			</Link>
		</div>
	)
}
