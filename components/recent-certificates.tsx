import Link from 'next/link'
import { getCertificates } from '@/lib/certificates'
import Certificates from './certificates'

export default async function RecentCertificates() {
  const certificates = await getCertificates(4)

  const RecentCertificates = certificates.slice(0, 2)
  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent Certifications</h2>
        <Certificates certificates = {RecentCertificates} />

        <Link
          href='/certificates'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All Certifications</span>
        </Link>
      </div>
    </section>
  )
}