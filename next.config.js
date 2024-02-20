/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net"
            },
            {
                hostname: "avatars.githubusercontent.com"
            },
            {
                hostname: "lh3.googleusercontent.com"
            },
            {
                hostname: "https://www.instagram.com/"
            }
        ]
    }
}

const withPWA = require('@ducanh2912/next-pwa').default({
    dest: 'public',
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    disable: false,workboxOptions: {
        disableDevLogs: true,
    }
})


module.exports = withPWA(nextConfig)

