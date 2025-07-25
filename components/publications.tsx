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
    return <div>No publications available.</div>;
  }

  return (
    <>
      <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
        {publications.map(publication => (
          <li key={publication.slug} className='group relative'>
            <Link href={`/publications/${publication.slug}`}>
              {publication.image && (
                <div className='h-72 w-full overflow-hidden bg-muted sm:h-60'>
                  <Image
                    src={publication.image}
                    alt={publication.title || 'Publication image'}
                    fill
                    className='rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-105'
                  />
                </div>
              )}
              
              <div className='absolute inset-[1px] rounded-lg bg-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
              
              <div className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
                <h2 className='title line-clamp-1 text-xl no-underline'>
                  {publication.title}
                </h2>
                <p className='line-clamp-1 text-sm text-muted-foreground'>
                  {publication.author}
                </p>
                <p className='text-xs font-light text-muted-foreground'>
                  {formatDate(publication.publishedAt ?? 'Unknown date')}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
