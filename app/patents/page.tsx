import Patents from '../../components/patents'
import { getPatents } from '../../lib/patents'

export default async function PatentsPage() {
  const patents = await getPatents()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Patents</h1>

        <Patents patents={patents} />
      </div>
    </section>
  )
}
