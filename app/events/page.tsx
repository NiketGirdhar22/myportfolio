import Events from '@/components/events'
import { getEvents } from '@/lib/events'
import PageShell from '@/components/page-shell'

export default async function EventPage() {
  const events = await getEvents()

  return (
    <PageShell
      eyebrow='Community archive'
      title='Events'
      description='Workshops, talks, and community moments collected into one easier-to-scan archive.'
    >
        <Events events={events} />
    </PageShell>
  )
}
