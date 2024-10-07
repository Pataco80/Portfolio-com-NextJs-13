import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { BackToTop } from '@/app/components/BackToTop'

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
	icons: {
		icon: '/favicon.ico',
	},
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='pt-BR' className={`${inter.variable} ${plexMono.variable}`}>
			<body>
				<Header />
				{children}
				<Footer />
				<BackToTop/>
			</body>
		</html>
	)
}
