/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['upcdn.io']
    },
    output: 'standalone',
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ['sequelize']
    }
};
module.exports = nextConfig;
