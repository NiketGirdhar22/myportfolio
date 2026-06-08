import { getPosts } from '@/lib/posts'
import PostsWithSearch from '@/components/posts-with-search'
import PageShell from '@/components/page-shell'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <PageShell
      eyebrow='Writing archive'
      title='Posts'
      description='A calmer, searchable reading space for ideas, notes, and technical explainers.'
    >
        <PostsWithSearch posts={posts} />
    </PageShell>
  )
}
