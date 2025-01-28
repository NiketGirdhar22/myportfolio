import Link from 'next/link'
import { ExperienceMetadata } from '../lib/experiences'
import { formatDate } from '../lib/utils'

export default function Experiences({ experiences }: { experiences: ExperienceMetadata[] }) {
  return (
    <ul className="flex flex-col gap-8">
      {experiences.map(experience => {
        const formattedStartDate = experience.startDate ? formatDate(experience.startDate) : 'No start date available';
        const formattedEndDate = experience.endDate ? formatDate(experience.endDate) : 'No end date available';

        return (
          <li key={experience.slug} className="flex flex-col gap-4">
            <Link
              href={`/experiences/${experience.slug}`}
              className="flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row"
            >
              <div className="max-w-lg">
                <p className="text-lg font-semibold">{experience.title}</p>
                <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                  {experience.summary}
                </p>
              </div>

              <p className="mt-3 text-xs text-muted-foreground">
                {experience.startDate && <span>{formattedStartDate} - </span>}
                {experience.endDate && <span>{formattedEndDate}</span>}
              </p>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
