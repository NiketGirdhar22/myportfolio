import CertificatesWithSearch from '@/components/certificates-with-search'
import { getCertificates } from '@/lib/certificates'
import PageShell from '@/components/page-shell'

export default async function CertificatesPage() {
  const certificates = await getCertificates()

  return (
    <PageShell
      eyebrow='Learning archive'
      title='Certificates'
      description='Courses, certifications, and topic clusters arranged in a more useful, searchable layout.'
    >
        <CertificatesWithSearch certificates={certificates} />
    </PageShell>
  )
}
