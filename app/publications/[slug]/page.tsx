import MDXContent from '@/components/mdx-content'
import DetailShell from '@/components/detail-shell'
import { getPublicationBySlug, getPublications } from '@/lib/publications'
import { formatDate } from '@/lib/utils'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const publications = await getPublications()
  return publications.map(publication => ({ slug: publication.slug }))
}

export default async function Publication({
  params
}: {
  params: { slug: string }
}) {
  const publication = await getPublicationBySlug(params.slug)

  if (!publication) {
    notFound()
  }

  const { metadata, content } = publication
  const { title, image, publicationType, author, publishedAt, grantDate } = metadata

  return (
    <DetailShell
      backHref='/publications'
      backLabel='Back to publications'
      eyebrow='Publication'
      title={title || ''}
      image={image}
      imageAlt={title || ''}
      meta={[
        author || '',
        publicationType ? `Type: ${publicationType}` : '',
        publishedAt && publishedAt.toLowerCase() !== 'not needed'
          ? `Published: ${formatDate(publishedAt)}`
          : '',
        grantDate && grantDate.toLowerCase() !== 'not needed'
          ? `Grant: ${formatDate(grantDate)}`
          : ''
      ]}
      contentClassName='content-panel prose max-w-none'
    >
      <MDXContent source={content} />
    </DetailShell>
  )
}
