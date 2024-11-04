/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['eu-central-1-shared-euc1-02.graphassets.com'],
	},
}

module.exports = nextConfig
