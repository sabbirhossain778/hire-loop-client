/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  serverExternalPackages: ["@better-auth/kysely-adapter", "kysely"]
};

export default nextConfig;
