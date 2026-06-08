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
    <div className='space-y-6'>
      <div className='soft-card flex flex-col gap-3 md:flex-row md:items-center'>
        <Input
          type='text'
          placeholder='Search certifications by skill...'
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

      <Certificates certificates={filtered} />
    </div>
  )
}
