'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Icon } from '@/features/icons/icons'

export const ThemeToggle = () => {
	const { resolvedTheme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	// Avant le mount client, on suppose le theme par defaut (dark) pour eviter le mismatch d'hydratation.
	const isDark = mounted ? resolvedTheme === 'dark' : true

	return (
		<button
			type='button'
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
			aria-label={isDark ? 'Activer le theme clair' : 'Activer le theme sombre'}
			className='inline-flex items-center justify-center transition-colors rounded-md w-9 h-9 text-pale-sky-100 hover:text-blue-ribbon-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-ribbon-300'>
			{isDark ? <Icon name='sun' size={20} /> : <Icon name='moon' size={20} />}
		</button>
	)
}
