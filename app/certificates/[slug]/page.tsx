import MDXContent from '@/components/mdx-content'
import DetailShell from '@/components/detail-shell'
import TagList from '@/components/tag-list'
import { getCertificateBySlug, getCertificates } from '@/lib/certificates'
import { formatDate } from '@/lib/utils'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const certificates = await getCertificates()
  return certificates.map(certificate => ({ slug: certificate.slug }))
}

export default async function Certificate({
  params
}: {
  params: { slug: string }
}) {
  const certificate = await getCertificateBySlug(params.slug)

  if (!certificate) {
    notFound()
  }

  const { metadata, content } = certificate
  const { title, image, author, publishedAt, Github, courseLink, skills, credential } = metadata

  return (
    <DetailShell
      backHref='/certificates'
      backLabel='Back to certifications'
      eyebrow='Certification'
      title={title || ''}
      image={image}
      imageAlt={title || ''}
      meta={[author || '', publishedAt ? formatDate(publishedAt) : '']}
      actions={[
        Github ? { label: 'GitHub repo', url: Github } : null,
        courseLink ? { label: 'Course page', url: courseLink } : null,
        credential ? { label: 'Credential', url: credential } : null
      ].filter(Boolean) as { label: string; url: string }[]}
      contentClassName='content-panel prose max-w-none'
      aside={
        <div className='content-panel'>
          <p className='text-xs uppercase tracking-[0.24em] text-muted-foreground'>
            Skills acquired
          </p>
          <TagList items={skills} className='mt-4' />
        </div>
      }
    >
      <MDXContent source={content} />
    </DetailShell>
  )
}
