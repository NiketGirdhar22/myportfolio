import CertificatesWithSearch from '@/components/certificates-with-search'
import { getCertificates } from '@/lib/certificates'

export default async function CertificatesPage() {
  const certificates = await getCertificates()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Certificates</h1>

        <CertificatesWithSearch certificates={certificates} />
      </div>
    </section>
  )
}
