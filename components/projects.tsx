import Image from 'next/image'
import Link from 'next/link'

import TagList from '@/components/tag-list'
import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
      {projects.map(project => (
        <li key={project.slug}>
          <Link href={`/projects/${project.slug}`} className='soft-card group block h-full p-4'>
            {project.image ? (
              <div className='project-media-frame'>
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  fill
                  className='object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]'
                />
              </div>
            ) : null}

            <div className='mt-5'>
              <div className='flex flex-wrap items-center justify-between gap-3'>
                <p className='text-xs uppercase tracking-[0.24em] text-muted-foreground'>
                  Project
                </p>
                {project.publishedAt ? (
                  <span className='meta-pill text-xs text-muted-foreground'>
                    {formatDate(project.publishedAt)}
                  </span>
                ) : null}
              </div>

              <h3 className='mt-3 font-serif text-2xl font-semibold tracking-tight'>
                {project.title}
              </h3>
              <p className='mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground'>
                {project.summary}
              </p>

              <TagList items={project.tech} className='mt-5' />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
