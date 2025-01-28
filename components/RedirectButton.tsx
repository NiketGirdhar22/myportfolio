'use client'

import { Button } from '../components/ui/button'
import { useEffect, useState } from 'react'

interface RedirectButtonProps {
  redirectUrl: string
  label: string
  newWindow?: 'Yes' | 'No'
}

export default function RedirectButton({ redirectUrl, label, newWindow = 'Yes' }: RedirectButtonProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = () => {
    if (mounted) {
      if (newWindow === 'No') {
        window.location.href = redirectUrl
      } else {
        window.open(redirectUrl, '_blank', 'noopener noreferrer')
      }
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={handleClick}
      className="items-center gap-2 border-b-2 border-transparent hover:border-b-2 hover:border-gray-300 hover:bg-transparent transition-all duration-200"
    >
      <span className="font-semibold text-primary-500 hover:text-gray-400 transition-colors duration-200">
        {label}
      </span>
      <span className="sr-only">Redirect to {redirectUrl}</span>
    </Button>
  )
}
