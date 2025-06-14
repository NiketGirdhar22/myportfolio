'use client'

import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    'resume',
    'posts',
    'experiences',
    'projects',
    'certificates',
    'events',
    'patents',
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-4 backdrop-blur-sm">
      <nav className="container mx-auto max-w-4xl px-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="font-serif text-2xl font-bold">
          NT
        </Link>

        {/* Middle: Desktop nav */}
        <ul className="hidden sm:flex items-center gap-6 text-sm font-light text-muted-foreground">
          {menuItems.map((item) => (
            <li
              key={item}
              className="transition-colors hover:text-foreground hover:border-b-2 hover:border-gray-300 transition-all duration-500"
            >
              <Link href={`/${item}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Hamburger and ThemeToggle */}
        <div className="flex items-center gap-4">
          {/* Always visible Theme Toggle */}
          <ThemeToggle />

          {/* Hamburger (mobile only) */}
          <button onClick={toggleMenu} className="sm:hidden text-muted-foreground">
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg py-6 px-4 z-40">
          <ul className="flex flex-col items-center gap-5 text-sm font-light text-muted-foreground">
            {menuItems.map((item) => (
              <li
                key={item}
                className="transition-colors hover:text-foreground hover:border-b-2 hover:border-gray-300 transition-all duration-500"
              >
                <Link href={`/${item}`} onClick={() => setIsMenuOpen(false)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
