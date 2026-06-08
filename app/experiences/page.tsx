import Experiences from '@/components/experiences'
import { getExperiences } from '@/lib/experiences'
import PageShell from '@/components/page-shell'

export default async function ExperiencePage() {
  const experiences = await getExperiences()

  return (
    <PageShell
      eyebrow='Career path'
      title='Experience'
      description='A timeline of internships, collaborations, and roles that shaped my engineering practice.'
    >
        <Experiences experiences={experiences} />
    </PageShell>
  )
}
