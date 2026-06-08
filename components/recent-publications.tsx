import Link from 'next/link'
import { getPublications } from '@/lib/publications'
import Publications from '@/components/publications'
import SectionShell from '@/components/section-shell'

export default async function RecentCertificates() {
  const publications = await getPublications(4)

  const RecentPublications = publications.slice(0, 2)
  return (
    <SectionShell
      eyebrow='Research'
      title='Recent publications'
      description='Published work and documentation around problems worth understanding in more depth.'
      href='/publications'
      linkLabel='All publications'
    >
      <Publications publications={RecentPublications} />
    </SectionShell>
  )
}
