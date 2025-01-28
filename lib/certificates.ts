import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content', 'certificates')

export type Certificate = {
  metadata: CertificateMetadata
  content: string
}

export type CertificateMetadata = {
  title?: string
  By?: string
  image?: string
  author?: string
  publishedAt?: string
  Github?: string
  courseLink?: string
  skills?: string[]
  credential?: string
  slug: string
}

export async function getCertificateBySlug(slug: string): Promise<Certificate | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)
    return { metadata: { ...data, slug }, content }
  } catch (error) {
    return null
  }
}

export async function getCertificates(limit?: number): Promise<CertificateMetadata[]> {
  const files = fs.readdirSync(rootDirectory)

  const projects = files
    .map(file => getCertificateMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  if (limit) {
    return projects.slice(0, limit)
  }

  return projects
}

export function getCertificateMetadata(filepath: string): CertificateMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return { ...data, slug }
}
