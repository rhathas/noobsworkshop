export const generateMdxMetadata = (frontmatterData: BlogMetaDataType, slug: string) => {
  return {
    ...frontmatterData,
    openGraph: {
      title: frontmatterData.title,
      description: frontmatterData.description,
      url: `${process.env.BASE_URL}/blog/${slug}`,
      siteName: "noob's Workshop - Ogulcan Gündüz",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: `${process.env.BASE_URL}${frontmatterData.previewImage}`,
          alt: `noob's Workshop - Preview Image for ${frontmatterData.title}`,
        },
      ],
      article: {
        authors: frontmatterData.authors.map((author) => author.name),
        publishedDate: frontmatterData.date,
        author: `${process.env.BASE_URL}/resume`,
        publisher: `${process.env.BASE_URL}/resume`,
      },
      "article:author": `${process.env.BASE_URL}/resume`,
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatterData.title,
      description: frontmatterData.description,
      authors: frontmatterData.authors.map((author) => author.name),
      image: `${process.env.BASE_URL}${frontmatterData.previewImage}`,
    },
    article: {
      author: `${process.env.BASE_URL}/resume`,
      publisher: `${process.env.BASE_URL}/resume`,
    },
  }
}
