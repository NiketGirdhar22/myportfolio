'use client'

import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="container flex max-w-4xl items-center justify-between">
        <div>
          <Link href="/" className="font-serif text-2xl font-bold">
            NT
          </Link>
        </div>

        <ul className="hidden sm:flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10">
          <li className="transition-colors hover:text-foreground hover:border-b-2 hover:border-gray-300 hover:bg-transparent transition-all duration-500">
            <Link href="/resume">Resume</Link>
          </li>
          <li className="transition-colors hover:text-foreground hover:border-b-2 hover:border-gray-300 hover:bg-transparent transition-all duration-500">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="transition-colors hover:text-foreground hover:border-b-2 hover:border-gray-300 hover:bg-transparent transition-all duration-500">
            <Link href="/experiences">Experience</Link>
          </li>
          <li className="transition-colors hover:text-foreground hover:border-b-2 hover:border-gray-300 hover:bg-transparent transition-all duration-500">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="transition-colors hover:text-foreground hover:border-b-2 hover:border-gray-300 hover:bg-transparent transition-all duration-500">
            <Link href="/certificates">Certifications</Link>
          </li>
          <li className="transition-colors hover:text-foreground hover:border-b-2 hover:border-gray-300 hover:bg-transparent transition-all duration-500">
            <Link href="/events">Events</Link>
          </li>
          <li className="transition-colors hover:text-foreground hover:border-b-2 hover:border-gray-300 hover:bg-transparent transition-all duration-500">
            <Link href="/patents">Patents</Link>
          </li>
        </ul>

        <div className="sm:hidden flex items-center ml-auto">
          <button onClick={toggleMenu} className="text-muted-foreground">
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-background/75 backdrop-blur-sm py-4`}>
          <ul className="flex flex-col items-center gap-4 text-sm font-light text-muted-foreground">
            <li className="transition-colors hover:text-foreground hover:border-b-2 hover:border-gray-300 hover:bg-transparent transition-all duration-500">
              <Link href="/resume">Resume</Link>
            </li>
            <li className="transition-colors hover:text-foreground hover:border-b-2 hover:border-gray-300 hover:bg-transparent transition-all duration-500">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="transition-colors hover:text-foreground hover:border-b-2 hover:border-gray-300 hover:bg-transparent transition-all duration-500">
              <Link href="/experiences">Experience</Link>
            </li>
            <li className="transition-colors hover:text-foreground hover:border-b-2 hover:border-gray-300 hover:bg-transparent transition-all duration-500">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="transition-colors hover:text-foreground hover:border-b-2 hover:border-gray-300 hover:bg-transparent transition-all duration-500">
              <Link href="/certificates">Certifications</Link>
            </li>
            <li className="transition-colors hover:text-foreground hover:border-b-2 hover:border-gray-300 hover:bg-transparent transition-all duration-500">
              <Link href="/events">Events</Link>
            </li>
            <li className="transition-colors hover:text-foreground hover:border-b-2 hover:border-gray-300 hover:bg-transparent transition-all duration-500">
            <Link href="/patents">Patents</Link>
          </li>
          </ul>
        </div>

        <div>
          <ThemeToggle  />
        </div>
      </nav>
    </header>
  )
}