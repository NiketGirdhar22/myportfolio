import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getPublicationBySlug, getPublications } from '@/lib/publications'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const publications = await getPublications()
  const slugs = publications.map((publication) => ({ slug: publication.slug }))

  return slugs
}

export default async function Publication({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const publication = await getPublicationBySlug(slug)

  if (!publication) {
    notFound()
  }


  const { metadata, content } = publication
  const { title, image, publicationType, author, publishedAt, grantDate } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/publications'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to Publications</span>
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
            {author}
          </p>
          {publicationType && (
            <p className='mt-2 text-sm text-muted-foreground'>
              <strong>Publication Type:</strong> {publicationType}
            </p>
          )}
          {(
            <p className='mt-2 text-sm text-muted-foreground'>
              <strong>Publication Date:</strong> {formatDate(publishedAt ?? '')}
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