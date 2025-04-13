import Link from 'next/link'
import { getEvents } from '@/lib/events'
import Events from '@/components/events'

export default async function Recentevents() {
  const events = await getEvents(4)

  const recentEvents = events.slice(0, 2)

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent Events</h2>
        <Events events={recentEvents} />

        <Link
          href='/events'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All Events</span>
        </Link>
      </div>
    </section>
  )
}