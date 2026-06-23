'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { LuSun, LuMoon } from 'react-icons/lu'

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
			className='inline-flex items-center justify-center w-9 h-9 rounded-md text-pale-sky-100 transition-colors hover:text-blue-ribbon-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-ribbon-300'>
			{isDark ? <LuSun size={20} /> : <LuMoon size={20} />}
		</button>
	)
}
