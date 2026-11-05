export default function sitemap() {
  return [
    {
      url: 'https://rmw-ai-tools.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ]
}
