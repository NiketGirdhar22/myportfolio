import Experiences from '@/components/experiences'
import { getExperiences } from '@/lib/experiences'

export default async function ExperiencePage() {
  const experiences = await getExperiences()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Experience</h1>
        <Experiences experiences={experiences} />
      </div>
    </section>
  )
}