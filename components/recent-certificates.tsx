import Link from 'next/link'
import { getCertificates } from '@/lib/certificates'
import Certificates from './certificates'
import SectionShell from '@/components/section-shell'

export default async function RecentCertificates() {
  const certificates = await getCertificates(4)

  const RecentCertificates = certificates.slice(0, 2)
  return (
    <SectionShell
      eyebrow='Learning'
      title='Recent certifications'
      description='Structured learning, hands-on practice, and the topics I have been sharpening lately.'
      href='/certificates'
      linkLabel='All certifications'
    >
      <Certificates certificates={RecentCertificates} />
    </SectionShell>
  )
}
