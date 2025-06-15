import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            new URL('https://placehold.net/**')
        ]
    }
};

export default nextConfig;
