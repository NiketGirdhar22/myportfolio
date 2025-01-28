import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content', 'experiences')

export type Experience = {
  metadata: ExperienceMetadata
  content: string
}

export type ExperienceMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  startDate: string
  endDate: string
  skills?: string[]
  documents: Record<string, string> // New field for documents
  slug: string
}

export async function getExperienceBySlug(slug: string): Promise<Experience | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)

    // Ensure startDate, endDate, and documents always have values
    const metadata: ExperienceMetadata = {
      ...data,
      startDate: data.startDate || '',  // Default empty string if missing
      endDate: data.endDate || '',      // Default empty string if missing
      documents: data.documents || {},  // Default empty object if missing
      slug
    }

    return { metadata, content }
  } catch (error) {
    console.error('Error fetching experience by slug:', error)
    return null
  }
}

export async function getExperiences(limit?: number): Promise<ExperienceMetadata[]> {
  const files = fs.readdirSync(rootDirectory)

  // Map through the files and get metadata
  const experiences = await Promise.all(
    files.map(async (file) => await getExperienceMetadata(file))
  )

  // Sort experiences by startDate (descending)
  experiences.sort((a, b) => {
    const dateA = new Date(a.startDate)
    const dateB = new Date(b.startDate)

    return dateB.getTime() - dateA.getTime() // Sort in descending order based on startDate
  })

  // Apply limit if specified
  if (limit) {
    return experiences.slice(0, limit)
  }

  return experiences
}

export function getExperienceMetadata(filepath: string): ExperienceMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)

  // Ensure documents, startDate, and endDate have default values
  const documents = data.documents || {}
  const startDate = data.startDate || ''
  const endDate = data.endDate || ''

  return {
    ...data,
    documents,   // Documents field
    startDate,   // Start date field
    endDate,     // End date field
    slug
  }
}
