import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import MDXContent from '@/components/mdx-content'
import DetailShell from '@/components/detail-shell'
import RedirectButton from '@/components/RedirectButton'
import TagList from '@/components/tag-list'
import { getEvents, getEventBySlug } from '@/lib/events'
import { formatDate } from '@/lib/utils'

export async function generateStaticParams() {
  const events = await getEvents()
  return events.map(event => ({ slug: event.slug }))
}

function getImagesFromPublicFolder(folderPath: string): string[] {
  const absolutePath = path.join(process.cwd(), 'public', folderPath)

  if (!fs.existsSync(absolutePath)) return []
  if (!fs.statSync(absolutePath).isDirectory()) return []

  return fs
    .readdirSync(absolutePath)
    .filter(file => /\.(jpe?g|png|gif|webp)$/i.test(file))
    .map(file => path.join(folderPath, file))
}

export default async function Event({ params }: { params: { slug: string } }) {
  const event = await getEventBySlug(params.slug)

  if (!event) {
    notFound()
  }

  const { metadata, content } = event
  const { title, image, author, startDate, endDate, skills, documents, summary } = metadata
  const imagePaths = image ? getImagesFromPublicFolder(image) : []

  return (
    <DetailShell
      backHref='/events'
      backLabel='Back to events'
      eyebrow='Event'
      title={title || ''}
      summary={summary}
      meta={[
        author || '',
        startDate ? formatDate(startDate) : '',
        endDate ? formatDate(endDate) : ''
      ]}
      contentClassName='space-y-8'
      aside={
        <>
          <div className='content-panel'>
            <p className='text-xs uppercase tracking-[0.24em] text-muted-foreground'>
              Skills acquired
            </p>
            <TagList items={skills} className='mt-4' />
          </div>
          {documents && Object.keys(documents).length > 0 ? (
            <div className='content-panel'>
              <p className='text-xs uppercase tracking-[0.24em] text-muted-foreground'>
                Related links
              </p>
              <div className='mt-4 flex flex-wrap gap-3'>
                {Object.entries(documents).map(([label, url]) => (
                  <RedirectButton key={label} redirectUrl={url} label={label} />
                ))}
              </div>
            </div>
          ) : null}
        </>
      }
    >
      <div className='content-panel prose max-w-none'>
        <MDXContent source={content} />
      </div>

      {imagePaths.length > 0 ? (
        <div className='content-panel'>
          <p className='text-xs uppercase tracking-[0.24em] text-muted-foreground'>
            From the event
          </p>
          <div className='mt-6 columns-1 gap-4 space-y-4 md:columns-2'>
            {imagePaths.map((src, idx) => (
              <div key={idx} className='overflow-hidden rounded-[1.5rem]'>
                <Image
                  src={src}
                  alt={`Event image ${idx + 1}`}
                  width={800}
                  height={600}
                  className='h-auto w-full object-cover'
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </DetailShell>
  )
}
