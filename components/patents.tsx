import Image from 'next/image'
import Link from 'next/link'
import { PatentMetadata } from '../lib/patents'
import { formatDate } from '../lib/utils'

export default function Patents({
  patents
}: {
  patents: PatentMetadata[]
}) {
  if (!patents || patents.length === 0) {
    return <div>No patents available.</div>;
  }

  return (
    <>
      <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
        {patents.map(patent => (
          <li key={patent.slug} className='group relative'>
            <Link href={`/patents/${patent.slug}`}>
              {patent.image && (
                <div className='h-72 w-full overflow-hidden bg-muted sm:h-60'>
                  <Image
                    src={patent.image}
                    alt={patent.title || 'Patent image'}
                    fill
                    className='rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-105'
                  />
                </div>
              )}
              
              <div className='absolute inset-[1px] rounded-lg bg-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
              
              <div className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
                <h2 className='title line-clamp-1 text-xl no-underline'>
                  {patent.title}
                </h2>
                <p className='line-clamp-1 text-sm text-muted-foreground'>
                  {patent.author}
                </p>
                <p className='text-xs font-light text-muted-foreground'>
                  {formatDate(patent.publishedAt ?? 'Unknown date')}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
