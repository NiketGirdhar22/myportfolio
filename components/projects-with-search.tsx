'use client'

import { useState } from 'react'
import { ProjectMetadata } from '@/lib/projects'

import Projects from '@/components/projects'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Cross2Icon } from '@radix-ui/react-icons'

export default function ProjectsWithSearch({ projects }: { projects: ProjectMetadata[] }) {
  const [query, setQuery] = useState('')
  
  const filtered = projects.filter(project =>
    project.tech?.some(skill =>
      skill.toLowerCase().includes(query.toLowerCase())
    ) ?? false
  )

  const isFiltered = query.length > 0

  function resetFilter() {
    setQuery('')
  }

  return (
    <div className='space-y-6'>
      <div className='soft-card flex flex-col gap-3 md:flex-row md:items-center'>
        <Input
          type='text'
          placeholder='Search projects by tech...'
          className='w-full md:max-w-md'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {isFiltered && (
          <Button
            size='sm'
            variant='outline'
            onClick={resetFilter}
            className='self-start md:self-auto'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>

      <Projects projects={filtered} />
    </div>
  )
}
