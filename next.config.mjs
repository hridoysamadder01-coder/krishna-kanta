/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  reactStrictMode: true,
  images: {
    // Static export cannot use the on-demand image optimizer.
    // Assets ship pre-sized; see IMAGE_GUIDE.md.
    unoptimized: true,
  },
};

export default nextConfig;
