'use client'

import { useEffect } from 'react'
import { Button } from '@/components/shared/button'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<section className='flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-background px-4 text-center text-foreground'>
			<span className='font-mono text-base text-accent'>.../erreur</span>
			<h1 className='text-3xl font-medium'>Oups, une erreur est survenue</h1>
			<p className='max-w-[480px] text-muted-foreground'>
				Le contenu n&apos;a pas pu être chargé pour le moment. Tu peux réessayer ou revenir à l&apos;accueil.
			</p>
			<div className='mt-2 flex flex-wrap items-center justify-center gap-4'>
				<Button type='button' onClick={reset}>
					Réessayer
				</Button>
				<Button href='/'>Retour à l&apos;accueil</Button>
			</div>
		</section>
	)
}
