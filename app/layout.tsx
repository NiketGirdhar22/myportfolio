import type { Metadata } from 'next'

import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Niket Girdhar',
  description: 'Niket Girdhar - NT',
  metadataBase: new URL('https://www.niketgirdhar.in'),
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Niket Girdhar',
    description: 'Niket Girdhar - NT',
    url: 'https://www.niketgirdhar.in',
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Niket Girdhar',
      },
    ],
  },
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className='flex min-h-screen flex-col font-sans antialiased'>
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
