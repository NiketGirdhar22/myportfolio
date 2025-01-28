import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content', 'patents')

export type Patent = {
  metadata: PatentMetadata
  content: string
}

export type PatentMetadata = {
  title?: string
  image?: string
  patentType?: string
  author?: string
  publishedAt?: string
  grantDate?: string | null
  slug: string
}

export async function getPatentBySlug(slug: string): Promise<Patent | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)
    return { metadata: { ...data, slug }, content }
  } catch (error) {
    return null
  }
}

export async function getPatents(limit?: number): Promise<PatentMetadata[]> {
  const files = fs.readdirSync(rootDirectory)

  const patents = files
    .map(file => getPatentMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  if (limit) {
    return patents.slice(0, limit)
  }

  return patents
}

export function getPatentMetadata(filepath: string): PatentMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return { ...data, slug }
}
