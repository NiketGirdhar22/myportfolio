import Link from 'next/link'

import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className='grid gap-4'>
      {posts.map(post => (
        <li key={post.slug}>
          <Link href={`/posts/${post.slug}`} className='soft-card block'>
            <div className='flex flex-col gap-4 md:flex-row md:items-start md:justify-between'>
              <div className='max-w-2xl'>
                <p className='text-xs uppercase tracking-[0.24em] text-muted-foreground'>
                  Post
                </p>
                <h3 className='mt-3 font-serif text-2xl font-semibold tracking-tight'>
                  {post.title}
                </h3>
                <p className='mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground'>
                  {post.summary}
                </p>
              </div>

              {post.publishedAt ? (
                <p className='meta-pill text-xs text-muted-foreground'>
                  {formatDate(post.publishedAt)}
                </p>
              ) : null}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
