import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '../../../lib/utils'
import MDXContent from '../../../components/mdx-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getPatentBySlug, getPatents } from '../../../lib/patents'
import { notFound } from 'next/navigation'
import RedirectButton from '../../../components/RedirectButton'

export async function generateStaticParams() {
  const patents = await getPatents()
  const slugs = patents.map((patent) => ({ slug: patent.slug }))

  return slugs
}

export default async function Patent({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const patent = await getPatentBySlug(slug)

  if (!patent) {
    notFound()
  }

  const { metadata, content } = patent
  const { title, image, patentType, author, publishedAt, grantDate } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/patents'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to Patents</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-contain'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-md text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
          {patentType && (
            <p className='mt-2 text-sm text-muted-foreground'>
              <strong>Patent Type:</strong> {patentType}
            </p>
          )}
          {(
            <p className='mt-2 text-sm text-muted-foreground'>
              <strong>Grant Date:</strong> {grantDate ? formatDate(grantDate) : 'Pending'}
            </p>
          )}
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
}