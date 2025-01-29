import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { getExperiences, getExperienceBySlug } from '@/lib/experiences'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'
import RedirectButton from '@/components/RedirectButton'
import { Button } from '@/components/ui/button'

export async function generateStaticParams() {
  const experiences = await getExperiences()
  const slugs = experiences.map(experience => ({ slug: experience.slug }))

  return slugs
}

export default async function Experience({ params }: { params: { slug: string } }) {
  const { slug } = params
  const experience = await getExperienceBySlug(slug)

  if (!experience) {
    notFound()
  }

  const { metadata, content } = experience
  const { title, image, author, startDate, endDate, skills, documents } = metadata

  const formattedStartDate = startDate ? formatDate(startDate) : 'No start date available'
  const formattedEndDate = endDate ? formatDate(endDate) : 'No end date available'

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/experiences'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to experiences</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || 'Experience Image'}
              className='object-contain'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author && <span>{author} / </span>}
            {startDate && <span>{formattedStartDate} - </span>}
            {endDate && <span>{formattedEndDate}</span>}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
        
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

        {documents && Object.keys(documents).length > 0 && (
          <footer className='mt-16'>
            {Object.entries(documents).map(([label, url]) => (
              <RedirectButton key={label} redirectUrl={url} label={label} />
            ))}
          </footer>
        )}

      </div>
    </section>
  )
}
