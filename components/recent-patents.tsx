import Link from 'next/link'
import { getPatents } from '@/lib/patents'
import Patents from '@/components/patents'

export default async function RecentCertificates() {
  const patents = await getPatents(4)

  const RecentPatents = patents.slice(0, 2)
  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent Patents</h2>
        <Patents patents={RecentPatents} />

        <Link
          href='/patents'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All Patents</span>
        </Link>
      </div>
    </section>
  )
}
