import withMDX from '@next/mdx'
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"
import readingTime from "remark-reading-time"
import readingMdxTime from "remark-reading-time/mdx.js"
import remarkFilenameSlugPlugin from "remark-file-name-slug-plugin"
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_exportFolderPath: "dist",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_exportFolderName: "exportedImages",
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
      },
    )

    if (config.isServer) {
      config.devtool = 'source-map'
    }

    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}
export default withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      remarkMdxFrontmatter,
      readingTime,
      readingMdxTime,
      [remarkFilenameSlugPlugin, {type: 'directory'}],
      remarkGfm
    ],

  },
})(nextConfig)
