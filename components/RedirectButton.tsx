'use client'

import { Button } from '@/components/ui/button'
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
      variant="outline"
      onClick={handleClick}
      className="items-center gap-2 border-border/60 bg-white/80 px-5 hover:-translate-y-0.5 hover:bg-white"
    >
      <span className="font-medium">{label}</span>
      <span className="sr-only">Redirect to {redirectUrl}</span>
    </Button>
  )
}
