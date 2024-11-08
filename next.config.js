/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['eu-central-1-shared-euc1-02.graphassets.com'],
	},
}

module.exports = nextConfig
