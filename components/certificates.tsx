import Image from 'next/image'
import Link from 'next/link'

import TagList from '@/components/tag-list'
import { CertificateMetadata } from '@/lib/certificates'
import { formatDate } from '@/lib/utils'

export default function Certificates({
  certificates
}: {
  certificates: CertificateMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
      {certificates.map(certificate => (
        <li key={certificate.slug}>
          <Link href={`/certificates/${certificate.slug}`} className='soft-card group block h-full p-4'>
            {certificate.image ? (
              <div className='relative aspect-[16/10] overflow-hidden rounded-[1.5rem]'>
                <Image
                  src={certificate.image}
                  alt={certificate.title || 'Certificate image'}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                />
              </div>
            ) : null}

            <div className='mt-5'>
              <div className='flex flex-wrap items-center justify-between gap-3'>
                <p className='text-xs uppercase tracking-[0.24em] text-muted-foreground'>
                  Certification
                </p>
                {certificate.publishedAt ? (
                  <span className='meta-pill text-xs text-muted-foreground'>
                    {formatDate(certificate.publishedAt)}
                  </span>
                ) : null}
              </div>

              <h3 className='mt-3 font-serif text-2xl font-semibold tracking-tight'>
                {certificate.title}
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                {certificate.By || certificate.author}
              </p>

              <TagList items={certificate.skills} className='mt-5' />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
