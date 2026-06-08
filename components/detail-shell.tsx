import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

import RedirectButton from '@/components/RedirectButton'
import TagList from '@/components/tag-list'

type Action = {
  label: string
  url: string
}

type DetailShellProps = {
  backHref: string
  backLabel: string
  eyebrow?: string
  title: string
  meta?: string[]
  image?: string
  imageAlt?: string
  summary?: string
  tags?: string[]
  actions?: Action[]
  children: ReactNode
  aside?: ReactNode
  contentClassName?: string
}

export default function DetailShell({
  backHref,
  backLabel,
  eyebrow,
  title,
  meta,
  image,
  imageAlt,
  summary,
  tags,
  actions,
  children,
  aside,
  contentClassName
}: DetailShellProps) {
  const filteredMeta = meta?.filter(Boolean) ?? []
  const filteredActions = actions?.filter(action => action.url) ?? []

  return (
    <section className='page-frame'>
      <div className='container max-w-6xl'>
        <Link href={backHref} className='back-link'>
          <ArrowLeftIcon className='h-4 w-4' />
          <span>{backLabel}</span>
        </Link>

        <div className='detail-grid'>
          <div className='space-y-6'>
            {eyebrow ? <p className='page-eyebrow'>{eyebrow}</p> : null}
            <div className='space-y-4'>
              <h1 className='page-title max-w-4xl'>{title}</h1>
              {summary ? <p className='page-description max-w-3xl'>{summary}</p> : null}
              {filteredMeta.length > 0 ? (
                <div className='flex flex-wrap gap-3 text-sm text-muted-foreground'>
                  {filteredMeta.map(item => (
                    <span key={item} className='meta-pill'>
                      {item}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            <TagList items={tags} />

            {filteredActions.length > 0 ? (
              <div className='flex flex-wrap gap-3'>
                {filteredActions.map(action => (
                  <RedirectButton
                    key={action.label}
                    redirectUrl={action.url}
                    label={action.label}
                  />
                ))}
              </div>
            ) : null}
          </div>

          {image ? (
            <div className='media-panel'>
              <div className='relative aspect-[4/3] overflow-hidden rounded-[2rem]'>
                <Image
                  src={image}
                  alt={imageAlt || title}
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          ) : null}
        </div>

        <div className='mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]'>
          <main className={contentClassName}>{children}</main>
          {aside ? <aside className='space-y-6'>{aside}</aside> : null}
        </div>
      </div>
    </section>
  )
}
