import Events from '@/components/events'
import { getEvents } from '@/lib/events'

export default async function EventPage() {
  const events = await getEvents()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Events</h1>
        <Events events={events} />
      </div>
    </section>
  )
}