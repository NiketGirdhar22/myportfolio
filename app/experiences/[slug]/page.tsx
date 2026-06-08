import MDXContent from '@/components/mdx-content'
import DetailShell from '@/components/detail-shell'
import RedirectButton from '@/components/RedirectButton'
import TagList from '@/components/tag-list'
import { getExperiences, getExperienceBySlug } from '@/lib/experiences'
import { formatDate } from '@/lib/utils'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const experiences = await getExperiences()
  return experiences.map(experience => ({ slug: experience.slug }))
}

export default async function Experience({ params }: { params: { slug: string } }) {
  const experience = await getExperienceBySlug(params.slug)

  if (!experience) {
    notFound()
  }

  const { metadata, content } = experience
  const { title, image, author, startDate, endDate, skills, documents, summary } = metadata

  return (
    <DetailShell
      backHref='/experiences'
      backLabel='Back to experiences'
      eyebrow='Experience'
      title={title || ''}
      summary={summary}
      image={image}
      imageAlt={title || ''}
      meta={[
        author || '',
        startDate ? formatDate(startDate) : '',
        endDate ? formatDate(endDate) : ''
      ]}
      contentClassName='content-panel prose max-w-none'
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
      <MDXContent source={content} />
    </DetailShell>
  )
}
