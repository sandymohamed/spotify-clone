// /** @type {import('next').NextConfig} */

const nextConfig = {
    // images: {
    //     domains: [
    //         "jynhdltibkdbuvfqedyh.supabase.co"
    //     ]
    // }

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname:  "jynhdltibkdbuvfqedyh.supabase.co",
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
