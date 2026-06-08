import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { ReactNode } from 'react'

type SectionShellProps = {
  eyebrow: string
  title: string
  description: string
  href: string
  linkLabel: string
  children: ReactNode
}

export default function SectionShell({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  children
}: SectionShellProps) {
  return (
    <section className='section-panel'>
      <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
        <div className='max-w-2xl'>
          <p className='section-eyebrow'>{eyebrow}</p>
          <h2 className='section-title'>{title}</h2>
          <p className='section-description'>{description}</p>
        </div>

        <Link href={href} className='section-link'>
          <span>{linkLabel}</span>
          <ArrowRightIcon className='h-4 w-4' />
        </Link>
      </div>

      <div className='mt-8'>{children}</div>
    </section>
  )
}
