import Link from 'next/link'
import { EventMetadata } from '@/lib/events'
import { formatDate } from '@/lib/utils'

export default function Events({ events }: { events: EventMetadata[] }) {
  return (
    <ul className="flex flex-col gap-8">
      {events.map(event => {
        const formattedStartDate = event.startDate ? formatDate(event.startDate) : 'No start date available';
        const formattedEndDate = event.endDate ? formatDate(event.endDate) : 'No end date available';

        return (
          <li key={event.slug} className="flex flex-col gap-4">
            <Link
              href={`/events/${event.slug}`}
              className="flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row"
            >
              <div className="max-w-lg">
                <p className="text-lg font-semibold">{event.title}</p>
                <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                  {event.summary}
                </p>
              </div>

              <p className="mt-3 text-xs text-muted-foreground">
                {event.startDate && <span>{formattedStartDate} - </span>}
                {event.endDate && <span>{formattedEndDate}</span>}
              </p>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
