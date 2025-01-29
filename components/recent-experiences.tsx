import Link from 'next/link'
import { getExperiences } from '@/lib/experiences'
import Experiences from '@/components/experiences'

export default async function Recentexperiences() {
  const experiences = await getExperiences(4)

  const recentExperiences = experiences.slice(0, 2)

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent Experiences</h2>
        <Experiences experiences={recentExperiences} />

        <Link
          href='/experiences'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All Experiences</span>
        </Link>
      </div>
    </section>
  )
}