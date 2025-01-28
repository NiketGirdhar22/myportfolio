'use client'

import { useState } from 'react'
import { ProjectMetadata } from '../lib/projects'

import Projects from '../components/projects'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Cross2Icon } from '@radix-ui/react-icons'

export default function ProjectsWithSearch({ projects }: { projects: ProjectMetadata[] }) {
  const [query, setQuery] = useState('')
  
  // Filter projects based on whether any of the tech matches the search query, safely handling undefined tech
  const filtered = projects.filter(project =>
    project.tech?.some(skill =>
      skill.toLowerCase().includes(query.toLowerCase())
    ) ?? false // Use a fallback if tech is undefined
  )

  const isFiltered = query.length > 0

  // Reset search query
  function resetFilter() {
    setQuery('')
  }

  return (
    <div>
      <div className='mb-12 flex items-center gap-3'>
        <Input
          type='text'
          placeholder='Search projects by tech...'
          className='h-9 w-full sm:w-1/2'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {isFiltered && (
          <Button
            size='sm'
            variant='secondary'
            onClick={resetFilter}
            className='h-8 px-2 lg:px-3'
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
