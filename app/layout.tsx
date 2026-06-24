import type { Metadata, Viewport } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Providers } from './providers'
import { Header } from '@/components/layouts/header'
import { Footer } from '@/components/layouts/footer'
import { BackToTop } from '@/components/shared/back-to-top'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
	variable: '--font-plex-mono',
	subsets: ['latin'],
	weight: ['400', '500'],
})

export const metadata: Metadata = {
	title: 'DWDeveloppement',
	description: 'Web Developpeur',
	manifest: '/manifest.webmanifest',
	appleWebApp: {
		title: 'DWDev',
		capable: true,
		statusBarStyle: 'black-translucent',
	},
}

export const viewport: Viewport = {
	themeColor: '#0042C7',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='fr' suppressHydrationWarning className={`${inter.variable} ${plexMono.variable}`}>
			<body suppressHydrationWarning>
				<Providers>
					<a
						href='#contenu'
						className='sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[100] focus:rounded-br-md focus:bg-blue-ribbon-700 focus:px-3 focus:py-1.5 focus:text-sm focus:font-medium focus:text-white focus:shadow-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-ribbon-300'
					>
						Aller au contenu
					</a>
					<Header />
					<main id='contenu' tabIndex={-1} className='focus:outline-none'>{children}</main>
					<Footer />
					<BackToTop/>
				</Providers>
			</body>
		</html>
	)
}
