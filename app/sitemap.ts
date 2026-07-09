
export const baseUrl = 'https://biancabensen.vercel.app'

export default async function sitemap() {

  const routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
