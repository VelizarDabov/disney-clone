/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'m.media-amazon.com'
            },
            {
                protocol:'https',
                hostname:'images.thedirect.com'
            },
            {
                protocol:'https',
                hostname:'google.com'
            }
        ]
    }
}

module.exports = nextConfig
