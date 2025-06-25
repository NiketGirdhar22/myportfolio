import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content', 'publications')

export type Publication = {
  metadata: PublicationMetadata
  content: string
}

export type PublicationMetadata = {
  title?: string
  image?: string
  publicationType?: string
  author?: string
  publishedAt?: string
  grantDate?: string | null
  slug: string
}

export async function getPublicationBySlug(slug: string): Promise<Publication | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)
    return { metadata: { ...data, slug }, content }
  } catch (error) {
    return null
  }
}

export async function getPublications(limit?: number): Promise<PublicationMetadata[]> {
  const files = fs.readdirSync(rootDirectory)

  const publications = files
    .map(file => getPublicationMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  if (limit) {
    return publications.slice(0, limit)
  }

  return publications
}

export function getPublicationMetadata(filepath: string): PublicationMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return { ...data, slug }
}
