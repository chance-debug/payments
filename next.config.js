/** @type {import('next').NextConfig} */
// const withTM = require('next-transpile-modules')( ['@square/web-sdk','react-square-web-payments-sdk'])

// module.exports = withTM({
//   env: {
//     SQUARE_ACCESS_TOKEN: 'EAAAEQJoHO2cqAoQu8EfYLDQCw2iDqS0jbvsIl5KfV0Mcwex8LL-IW7uzu_2depr'
//   },
//   reactStrictMode: true,
//   experimental: {
//     esmExternals: 'loose'
//   }
// })
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
		domains: ['images.unsplash.com'],
	},
  transpilePackages: ['@acme/ui', 'lodash-es'],
};



module.exports = nextConfig
