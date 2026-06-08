import Link from 'next/link'

import { EventMetadata } from '@/lib/events'
import { formatDate } from '@/lib/utils'

export default function Events({ events }: { events: EventMetadata[] }) {
  return (
    <ul className='grid gap-4'>
      {events.map(event => {
        const formattedStartDate = event.startDate
          ? formatDate(event.startDate)
          : 'No start date available'
        const formattedEndDate = event.endDate
          ? formatDate(event.endDate)
          : 'No end date available'

        return (
          <li key={event.slug}>
            <Link href={`/events/${event.slug}`} className='soft-card block'>
              <div className='flex flex-col gap-4 md:flex-row md:items-start md:justify-between'>
                <div className='max-w-2xl'>
                  <p className='text-xs uppercase tracking-[0.24em] text-muted-foreground'>
                    Event
                  </p>
                  <h3 className='mt-3 font-serif text-2xl font-semibold tracking-tight'>
                    {event.title}
                  </h3>
                  <p className='mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground'>
                    {event.summary}
                  </p>
                </div>

                <p className='meta-pill text-xs text-muted-foreground'>
                  {formattedStartDate} - {formattedEndDate}
                </p>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
