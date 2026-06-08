import Image from 'next/image'
import Link from 'next/link'

import { ArrowRightIcon } from '@radix-ui/react-icons'

import authorImage from '@/public/images/authors/niket.png'
import { Button } from '@/components/ui/button'

const focusAreas = [
  'Python',
  'Generative AI',
  'Applied ML',
  'Developer Tooling',
  'Community Building'
]

const quickStats = [
  { label: 'Projects', value: '15+' },
  { label: 'Publications', value: '4' },
  { label: 'Events & talks', value: '10+' }
]

export default function Intro() {
  return (
    <section className='page-hero overflow-visible'>
      <div className='grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center'>
        <div>
          <p className='page-eyebrow'>Portfolio / selected work</p>
          <h1 className='page-title'>
            Hi, I&apos;m Niket. I build things with Python and write about it.
          </h1>
          <p className='page-description max-w-3xl'>
            I&apos;m Niket Girdhar, a Python developer exploring AI systems, practical
            engineering, and community-led learning. This redesign keeps things
            light, clearer to navigate, and easier to spend time with.
          </p>

          <div className='mt-8 flex flex-wrap gap-2'>
            {focusAreas.map(area => (
              <span key={area} className='soft-tag'>
                {area}
              </span>
            ))}
          </div>

          <div className='mt-8 flex flex-wrap gap-3'>
            <Button asChild>
              <Link href='/projects'>
                Explore projects
                <ArrowRightIcon className='ml-2 h-4 w-4' />
              </Link>
            </Button>
            <Button asChild variant='outline'>
              <Link href='/resume'>View resume</Link>
            </Button>
          </div>

          <div className='mt-10 grid gap-4 sm:grid-cols-3'>
            {quickStats.map(stat => (
              <div key={stat.label} className='soft-card p-4'>
                <p className='font-serif text-3xl font-semibold'>{stat.value}</p>
                <p className='mt-2 text-sm text-muted-foreground'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='relative mx-auto w-full max-w-[320px]'>
          <div className='media-panel rotate-[-4deg]'>
            <div className='rounded-[1.75rem] bg-[linear-gradient(145deg,rgba(255,240,235,0.95),rgba(220,236,255,0.92))] p-4'>
              <div className='relative aspect-[4/5] overflow-hidden rounded-[1.5rem]'>
                <Image
                  className='object-cover'
                  src={authorImage}
                  alt='Niket Girdhar'
                  fill
                  priority
                />
              </div>
            </div>
          </div>
          <div className='absolute -bottom-6 -left-6 soft-card max-w-[210px] p-4'>
            <p className='text-xs uppercase tracking-[0.24em] text-muted-foreground'>
              Based in India
            </p>
            <p className='mt-2 text-sm leading-6 text-muted-foreground'>
              Building useful systems, writing things down, and sharing what I learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
