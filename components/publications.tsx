import Image from 'next/image'
import Link from 'next/link'

import { PublicationMetadata } from '@/lib/publications'
import { formatDate } from '@/lib/utils'

export default function Publications({
  publications
}: {
  publications: PublicationMetadata[]
}) {
  if (!publications || publications.length === 0) {
    return <div className='soft-card'>No publications available.</div>
  }

  return (
    <ul className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
      {publications.map(publication => (
        <li key={publication.slug}>
          <Link href={`/publications/${publication.slug}`} className='soft-card group block h-full p-4'>
            {publication.image ? (
              <div className='project-media-frame'>
                <Image
                  src={publication.image}
                  alt={publication.title || 'Publication image'}
                  fill
                  className='object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]'
                />
              </div>
            ) : null}

            <div className='mt-5'>
              <div className='flex flex-wrap items-center justify-between gap-3'>
                <p className='text-xs uppercase tracking-[0.24em] text-muted-foreground'>
                  Publication
                </p>
                {publication.publishedAt &&
                publication.publishedAt.toLowerCase() !== 'not needed' ? (
                  <span className='meta-pill text-xs text-muted-foreground'>
                    {formatDate(publication.publishedAt)}
                  </span>
                ) : null}
              </div>

              <h3 className='mt-3 font-serif text-2xl font-semibold tracking-tight'>
                {publication.title}
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                {publication.author}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
