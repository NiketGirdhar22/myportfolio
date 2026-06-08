import Link from 'next/link'

import { ExperienceMetadata } from '@/lib/experiences'
import { formatDate } from '@/lib/utils'

export default function Experiences({
  experiences
}: {
  experiences: ExperienceMetadata[]
}) {
  return (
    <ul className='grid gap-4'>
      {experiences.map(experience => {
        const formattedStartDate = experience.startDate
          ? formatDate(experience.startDate)
          : 'No start date available'
        const formattedEndDate = experience.endDate
          ? formatDate(experience.endDate)
          : 'No end date available'

        return (
          <li key={experience.slug}>
            <Link href={`/experiences/${experience.slug}`} className='soft-card block'>
              <div className='flex flex-col gap-4 md:flex-row md:items-start md:justify-between'>
                <div className='max-w-2xl'>
                  <p className='text-xs uppercase tracking-[0.24em] text-muted-foreground'>
                    Experience
                  </p>
                  <h3 className='mt-3 font-serif text-2xl font-semibold tracking-tight'>
                    {experience.title}
                  </h3>
                  <p className='mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground'>
                    {experience.summary}
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
