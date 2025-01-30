'use client'

import { useState } from 'react'
import { CertificateMetadata } from '@/lib/certificates'

import Certificates from '@/components/certificates'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Cross2Icon } from '@radix-ui/react-icons'

export default function CertificatesWithSearch({ certificates }: { certificates: CertificateMetadata[] }) {
  const [query, setQuery] = useState('')
  
  const filtered = certificates.filter(certificate =>
    certificate.skills?.some(skill =>
      skill.toLowerCase().includes(query.toLowerCase())
    ) ?? false
  )

  const isFiltered = query.length > 0

  function resetFilter() {
    setQuery('')
  }

  return (
    <div>
      <div className='mb-12 flex items-center gap-3'>
        <Input
          type='text'
          placeholder='Search projects by skill...'
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

      <Certificates certificates={filtered} />
    </div>
  )
}