import Link from 'next/link'
import { getPublications } from '@/lib/publications'
import Publications from '@/components/publications'

export default async function RecentCertificates() {
  const publications = await getPublications(4)

  const RecentPublications = publications.slice(0, 2)
  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent Publications</h2>
        <Publications publications={RecentPublications} />

        <Link
          href='/publications'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All Publications</span>
        </Link>
      </div>
    </section>
  )
}
