import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './styles/globals.css'
import { ReactNode } from 'react'
import { MainNavigation } from './components/MainNavigation/MainNavigation'
import { ContactForm } from './components/ContactForm/ContactForm'
import { Footer } from './components/Footer/Footer'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
	variable: '--font-plex-mono',
	subsets: ['latin'],
	weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='pt-BR' className={`${inter.variable} ${plexMono.variable}`}>
			<body>
				<MainNavigation />
				{children}
				<ContactForm />
				<Footer />
			</body>
		</html>
	)
}
