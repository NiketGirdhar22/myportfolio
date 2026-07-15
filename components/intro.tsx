import Image from 'next/image'
import Link from 'next/link'

import { ArrowRightIcon } from '@radix-ui/react-icons'

import authorImage from '@/public/images/authors/niket.png'
import { Button } from '@/components/ui/button'

const focusAreas = [
  'Python',
  'PyTorch',
  'Generative AI',
  'RAG Systems',
  'MLOps'
]

const quickStats = [
  { label: 'Projects', value: '15+' },
  { label: 'Publications', value: '4' },
  { label: 'Events & talks', value: '10+' }
]

export default function Intro() {
  return (
    <section className='page-hero overflow-visible'>
      <div className='grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end'>
        <div>
          <p className='page-eyebrow'>ML engineer / Python developer</p>
          <h1 className='page-title'>
            Building intelligent systems that work <span className='text-primary'>beyond the demo.</span>
          </h1>
          <p className='page-description max-w-3xl'>
            I&apos;m Niket Girdhar — an ML engineer focused on applied AI, reliable
            Python systems, and turning research ideas into useful products.
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
                <p className='font-mono text-3xl text-primary'>{stat.value}</p>
                <p className='mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='relative mx-auto w-full max-w-[300px] lg:mx-0 lg:ml-auto'>
          <div className='media-panel'>
            <div className='bg-[#d8d8cf] p-3'>
              <div className='relative aspect-[4/5] overflow-hidden grayscale transition-all duration-500 hover:grayscale-0'>
                <Image
                  className='object-contain p-2'
                  src={authorImage}
                  alt='Niket Girdhar'
                  fill
                  priority
                />
              </div>
            </div>
          </div>
          <div className='absolute -bottom-5 -left-4 border border-primary/40 bg-background px-4 py-3'>
            <p className='font-mono text-[10px] uppercase tracking-[0.16em] text-primary'>
              ● Available for opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
