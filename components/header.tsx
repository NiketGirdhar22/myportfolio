'use client'

import { useState } from 'react'
import Link from 'next/link'

const menuItems = [
  'resume',
  'projects',
  'experiences',
  'posts',
  'publications',
  'recommendations',
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl'>
      <nav className='container mx-auto flex max-w-6xl items-center justify-between px-8 py-4'>
        <Link href='/' className='flex items-center gap-3'>
          <span className='flex h-9 w-9 items-center justify-center border border-primary font-mono text-xs font-semibold text-primary'>
            NT
          </span>
          <span className='hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:inline-flex'>
            Niket Girdhar
          </span>
        </Link>

        <ul className='hidden items-center gap-2 lg:flex'>
          {menuItems.map(item => (
            <li key={item} className='list-none'>
              <Link
                href={`/${item}`}
                className='px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary'
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-3'>
          <button
            onClick={toggleMenu}
            aria-label='Toggle navigation'
            className='inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary lg:hidden'
          >
            {isMenuOpen ? (
              <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen ? (
        <div className='mx-auto max-w-6xl border-t border-border px-4 lg:hidden'>
          <div className='bg-background/95 p-4 backdrop-blur-xl'>
            <ul className='grid gap-2'>
              {menuItems.map(item => (
                <li key={item} className='list-none'>
                  <Link
                    href={`/${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    className='block border-b border-border px-4 py-3 font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary'
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  )
}
