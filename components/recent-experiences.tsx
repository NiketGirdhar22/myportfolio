import Link from 'next/link'
import { getExperiences } from '@/lib/experiences'
import Experiences from '@/components/experiences'
import SectionShell from '@/components/section-shell'

export default async function Recentexperiences() {
  const experiences = await getExperiences(4)

  const recentExperiences = experiences.slice(0, 2)

  return (
    <SectionShell
      eyebrow='Experience'
      title='Recent experiences'
      description='The collaborations, internships, and practical environments that shaped how I build.'
      href='/experiences'
      linkLabel='All experiences'
    >
      <Experiences experiences={recentExperiences} />
    </SectionShell>
  )
}
