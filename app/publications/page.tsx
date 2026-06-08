import Publications from '@/components/publications'
import { getPublications } from '@/lib/publications'
import PageShell from '@/components/page-shell'

export default async function PublicationsPage() {
  const publications = await getPublications()

  return (
    <PageShell
      eyebrow='Research archive'
      title='Publications'
      description='Published work presented with more breathing room and clearer visual hierarchy.'
    >
        <Publications publications={publications} />
    </PageShell>
  )
}
