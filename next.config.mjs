import withMDX from '@next/mdx'
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"
import readingTime from "remark-reading-time"
import readingMdxTime from "remark-reading-time/mdx.js"
import remarkFilenameSlugPlugin from "remark-file-name-slug-plugin"
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
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
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/blog/1',
        permanent: true,
      },
    ]
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
