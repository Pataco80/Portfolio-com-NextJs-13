import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'DWDeveloppement',
		short_name: 'DWDeveloppement',
		description: 'Portfolio - DWDeveloppement',
		start_url: '/',
		icons: [
			{
				src: '/favicons/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/favicons/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
		theme_color: '#e3e5e8',
		background_color: '#e3e5e8',
		display: 'standalone',
	}
}
