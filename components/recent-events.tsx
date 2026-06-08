import Link from 'next/link'
import { getEvents } from '@/lib/events'
import Events from '@/components/events'
import SectionShell from '@/components/section-shell'

export default async function Recentevents() {
  const events = await getEvents(4)

  const recentEvents = events.slice(0, 2)

  return (
    <SectionShell
      eyebrow='Community'
      title='Recent events'
      description='Talks, workshops, and community moments that add texture beyond shipping code.'
      href='/events'
      linkLabel='All events'
    >
      <Events events={recentEvents} />
    </SectionShell>
  )
}
