'use client'

import { useState } from 'react'
import Link from 'next/link'

const menuItems = [
  'resume',
  'posts',
  'experiences',
  'projects',
  'certificates',
  'events',
  'publications',
  'recommendations'
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className='fixed inset-x-0 top-0 z-50 px-4 pt-4'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/60 bg-background/80 px-5 py-3 shadow-[0_20px_60px_-30px_rgba(76,128,131,0.32)] backdrop-blur-xl'>
        <Link href='/' className='flex items-center gap-3'>
          <span className='flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(224,245,246,0.96),rgba(212,239,231,0.96))] font-serif text-xl font-semibold text-foreground shadow-[0_10px_30px_-18px_rgba(61,115,120,0.45)]'>
            NT
          </span>
          <span className='hidden text-sm uppercase tracking-[0.28em] text-muted-foreground md:inline-flex'>
            Niket Girdhar
          </span>
        </Link>

        <ul className='hidden items-center gap-2 lg:flex'>
          {menuItems.map(item => (
            <li key={item} className='list-none'>
              <Link
                href={`/${item}`}
                className='rounded-full px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:bg-white/80 hover:text-foreground'
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-3'>
          <button
            onClick={toggleMenu}
            className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-white/70 text-muted-foreground transition-colors hover:text-foreground lg:hidden'
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
        <div className='mx-auto mt-3 max-w-6xl px-1 lg:hidden'>
          <div className='rounded-[2rem] border border-white/60 bg-background/90 p-4 shadow-[0_20px_60px_-30px_rgba(76,128,131,0.32)] backdrop-blur-xl'>
            <ul className='grid gap-2'>
              {menuItems.map(item => (
                <li key={item} className='list-none'>
                  <Link
                    href={`/${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    className='block rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-white/80 hover:text-foreground'
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
