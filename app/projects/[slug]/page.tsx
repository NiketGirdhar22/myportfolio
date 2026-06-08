import MDXContent from '@/components/mdx-content'
import DetailShell from '@/components/detail-shell'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { formatDate } from '@/lib/utils'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map(project => ({ slug: project.slug }))
}

export default async function Project({
  params
}: {
  params: { slug: string }
}) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { title, image, author, publishedAt, Github, presentation, blog, tech, summary } =
    metadata

  return (
    <DetailShell
      backHref='/projects'
      backLabel='Back to projects'
      eyebrow='Project'
      title={title || ''}
      summary={summary}
      image={image}
      imageAlt={title || ''}
      meta={[author || '', publishedAt ? formatDate(publishedAt) : '']}
      tags={tech}
      actions={[
        Github ? { label: 'GitHub repo', url: Github } : null,
        presentation ? { label: 'Presentation', url: presentation } : null,
        blog ? { label: 'Project blog', url: blog } : null
      ].filter(Boolean) as { label: string; url: string }[]}
      contentClassName='content-panel prose max-w-none'
    >
      <MDXContent source={content} />
    </DetailShell>
  )
}
