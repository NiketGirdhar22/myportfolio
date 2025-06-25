import Publications from '@/components/publications'
import { getPublications } from '@/lib/publications'

export default async function PublicationsPage() {
  const publications = await getPublications()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Publications</h1>

        <Publications publications={publications} />
      </div>
    </section>
  )
}