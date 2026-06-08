import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type PageShellProps = {
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
  contentClassName?: string
}

export default function PageShell({
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName
}: PageShellProps) {
  return (
    <section className={cn('page-frame', className)}>
      <div className='container max-w-6xl'>
        <div className='page-hero'>
          {eyebrow ? <p className='page-eyebrow'>{eyebrow}</p> : null}
          <h1 className='page-title'>{title}</h1>
          {description ? <p className='page-description'>{description}</p> : null}
        </div>

        <div className={cn('mt-12', contentClassName)}>{children}</div>
      </div>
    </section>
  )
}
