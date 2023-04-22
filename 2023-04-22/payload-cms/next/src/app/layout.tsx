import '@fortawesome/fontawesome-svg-core/styles.css'

import './globals.css'

import {Inter} from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import type {ReactNode} from 'react'

import {config} from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

const inter = Inter({
  subsets: ['latin'],
})

export const metadata = {
  description: '',
  title: 'Payload CMS Demo',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b border-gray-100">
          <div className="container flex items-center justify-between">
            <Link href="/">
              <Image
                alt="Nerdify Logo"
                height={32}
                src="/nerdify-logo.png"
                width={32}
              />
            </Link>
            <nav>
              <ul className="flex h-16 items-center justify-center space-x-8">
                <li>
                  <Link
                    className="text-sm font-medium text-gray-700 hover:text-gray-900"
                    href="categories/men"
                  >
                    Men
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-gray-100">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/">
              <Image
                alt="Nerdify Logo"
                height={32}
                src="/nerdify-logo.png"
                width={32}
              />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  )
}
