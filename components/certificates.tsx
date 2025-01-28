import Image from 'next/image'
import Link from 'next/link'
import { CertificateMetadata } from '../lib/certificates'
import { formatDate } from '../lib/utils'

export default function Certificates({
  certificates
}: {
  certificates: CertificateMetadata[]
}) {
  return (
    <>
      <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
        {certificates.map(certificate => (
          <li key={certificate.slug} className='group relative'>
            <Link href={`/certificates/${certificate.slug}`}>
              {certificate.image && (
                <div className='h-72 w-full overflow-hidden bg-muted sm:h-60'>
                  <Image
                    src={certificate.image}
                    alt={certificate.title || 'Certificate image'}
                    fill
                    className='rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-105'
                  />
                </div>
              )}
              
              <div className='absolute inset-[1px] rounded-lg bg-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
              
              <div className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
                <h2 className='title line-clamp-1 text-xl no-underline'>
                  {certificate.title}
                </h2>
                <p className='line-clamp-1 text-sm text-muted-foreground'>
                  {certificate.By}
                </p>
                <p className='text-xs font-light text-muted-foreground'>
                  {formatDate(certificate.publishedAt ?? 'Unknown date')}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
