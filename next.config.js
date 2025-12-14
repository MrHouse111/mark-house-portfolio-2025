/**
 * Next.js configuration for static export on Vercel.
 * Setting `output` to 'export' will instruct Next.js to generate
 * a fully static site in the `out` directory during `next build`.
 * `images.unoptimized` disables the built‑in image optimization,
 * which is required for Capacitor/Android builds.
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;