import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'
import SectionShell from '@/components/section-shell'

export default async function RecentPosts() {
  const posts = await getPosts(4)

  const recentPosts = posts.slice(0, 2)

  return (
    <SectionShell
      eyebrow='Writing'
      title='Recent posts'
      description='Notes, explainers, and experiments shaped into something easier to revisit.'
      href='/posts'
      linkLabel='All posts'
    >
      <Posts posts={recentPosts} />
    </SectionShell>
  )
}
