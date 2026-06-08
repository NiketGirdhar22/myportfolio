import React from 'react'

import RedirectButton from '@/components/RedirectButton'

export interface Recommendation {
  slug: string
  name: string
  title: string
  date: string
  content: string
  contact: string
}

export default function Recommendations({
  recommendations
}: {
  recommendations: Recommendation[]
}) {
  return (
    <ul className='grid gap-5'>
      {recommendations.map(({ slug, name, title, date, content, contact }) => (
        <li key={slug} className='soft-card'>
          <div className='flex flex-col gap-5 md:flex-row md:items-start md:justify-between'>
            <div className='max-w-2xl'>
              <p className='text-xs uppercase tracking-[0.24em] text-muted-foreground'>
                Recommendation
              </p>
              <h3 className='mt-3 font-serif text-2xl font-semibold tracking-tight'>{name}</h3>
              <p className='mt-2 text-sm text-muted-foreground'>{title}</p>
              <p className='mt-4 whitespace-pre-line text-sm leading-7 text-muted-foreground'>
                {content}
              </p>
            </div>

            <div className='space-y-4 md:text-right'>
              <p className='meta-pill text-xs text-muted-foreground'>
                {new Date(date).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                })}
              </p>
              <div>
                <RedirectButton redirectUrl={contact} label='Contact recommender' />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
