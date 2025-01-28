import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '../../../lib/utils'
import MDXContent from '../../../components/mdx-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getCertificateBySlug, getCertificates } from '../../../lib/certificates'
import { notFound } from 'next/navigation'
import RedirectButton from '../../../components/RedirectButton'
import { Button } from '../../../components/ui/button'

export async function generateStaticParams() {
  const certificates = await getCertificates()
  const slugs = certificates.map(certificate => ({ slug: certificate.slug }))

  return slugs
}

export default async function Certificate({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const certificate = await getCertificateBySlug(slug)

  if (!certificate) {
    notFound()
  }

  const { metadata, content } = certificate
  const { title, image, author, publishedAt, Github, courseLink, skills,credential } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/certificates'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to Certifications</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-contain'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <div>
        <p className='mt-8 font-light text-muted-foreground'>
          Skills acquired: 
        </p>
        </div>
        {skills && skills.length > 0 && (
          <div className='mt-6 flex flex-wrap gap-2'>
            {skills.map((skill, index) => (
              <Button key={index} variant="outline">
                {skill}
              </Button>
            ))}
          </div>
        )}

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      <footer className='mt-16'>
        {Github && (
          
            <RedirectButton redirectUrl={Github} label="Check the GitHub Repo" />
        )}
        {courseLink && (
            <RedirectButton redirectUrl={courseLink} label="Checkout the Course" />
        )}
        {credential && (
            <RedirectButton redirectUrl={credential} label="Completion Credentials" />
        )}
      </footer>
      </div>
    </section>
  )
}