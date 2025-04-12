import Link from 'next/link'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { getEvents, getEventBySlug } from '@/lib/events'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'
import RedirectButton from '@/components/RedirectButton'
import { Button } from '@/components/ui/button'

export async function generateStaticParams() {
  const events = await getEvents()
  const slugs = events.map(event => ({ slug: event.slug }))
  return slugs
}

// Helper to get all image paths from a public folder
function getImagesFromPublicFolder(folderPath: string): string[] {
  const absolutePath = path.join(process.cwd(), 'public', folderPath)

  if (!fs.existsSync(absolutePath)) return []

  const stats = fs.statSync(absolutePath)
  if (!stats.isDirectory()) return []  // Not a folder, so return empty list

  const files = fs.readdirSync(absolutePath)

  return files
    .filter(file => /\.(jpe?g|png|gif|webp)$/i.test(file))
    .map(file => path.join(folderPath, file))  // relative to public
}

export default async function Event({ params }: { params: { slug: string } }) {
  const { slug } = params
  const event = await getEventBySlug(slug)

  if (!event) {
    notFound()
  }

  const { metadata, content } = event
  const { title, image, author, startDate, endDate, skills, documents } = metadata

  const formattedStartDate = startDate ? formatDate(startDate) : 'No start date available'
  const formattedEndDate = endDate ? formatDate(endDate) : 'No end date available'

  // Get images from the folder specified in `image` field
  const imagePaths = image ? getImagesFromPublicFolder(image) : []

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-5xl'>
        <Link
          href='/events'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to events</span>
        </Link>

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author && <span>{author} / </span>}
            {startDate && <span>{formattedStartDate} - </span>}
            {endDate && <span>{formattedEndDate}</span>}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>

        <div>
          <p className='mt-8 font-light text-muted-foreground'>
            Skills acquired:
          </p>
        </div>

        {skills && skills.length > 0 && (
          <div className='mt-6 flex flex-wrap gap-2'>
            {skills.map((skill, index) => (
              <Button key={index} variant="outline">
                {skill}
              </Button>
            ))}
          </div>
        )}
    <div>
          <p className='mt-8 font-light text-muted-foreground'>
            From the Event
          </p>
        </div>

{imagePaths.length > 0 && (
          <div className='columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 mt-10'>
            {imagePaths.map((src, idx) => (
              <div key={idx} className='break-inside-avoid overflow-hidden rounded-lg'>
                <Image
                  src={src}
                  alt={`Event Image ${idx + 1}`}
                  width={800}
                  height={600}
                  className='w-full h-auto object-cover rounded-lg'
                />
              </div>
            ))}
          </div>
        )}

        {documents && Object.keys(documents).length > 0 && (
          <footer className='mt-16'>
            {Object.entries(documents).map(([label, url]) => (
              <RedirectButton key={label} redirectUrl={url} label={label} />
            ))}
          </footer>
        )}
      </div>
    </section>
  )
}
