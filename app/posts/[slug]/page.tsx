import MDXContent from '@/components/mdx-content'
import DetailShell from '@/components/detail-shell'
import { getPosts, getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, author, publishedAt, Github, summary } = metadata

  return (
    <DetailShell
      backHref='/posts'
      backLabel='Back to posts'
      eyebrow='Post'
      title={title || ''}
      summary={summary}
      image={image}
      imageAlt={title || ''}
      meta={[author || '', publishedAt ? formatDate(publishedAt) : '']}
      actions={Github ? [{ label: 'Check the GitHub repo', url: Github }] : []}
      contentClassName='content-panel prose max-w-none'
    >
      <MDXContent source={content} />
    </DetailShell>
  )
}
