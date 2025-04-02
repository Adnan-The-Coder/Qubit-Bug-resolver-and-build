import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import type { NextConfig } from "next";

const nextConfig: NextConfig =  {images: {
  domains: ['img.icons8.com'],
},};

async function setup() {
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }
}
setup();

export default nextConfig;