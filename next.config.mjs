import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: {
      // Explicitly set the root directory to silence the lockfile warning
      root: resolve(__dirname),
    },
  },
};

export default nextConfig;
