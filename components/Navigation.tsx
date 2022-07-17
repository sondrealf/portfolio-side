import Link from 'next/link'
import React from 'react'
import ThemeSwitch from './ThemeSwitch'

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 mb-6 bg-black bg-opacity-40 py-6 dark:bg-gray-400 dark:bg-opacity-40 ">
      <div className="container mx-auto flex items-center justify-between px-4 lg:max-w-4xl">
        <Link href="/">
          <a
            className={
              'font-medium uppercase tracking-wider text-white transition-colors hover:text-sky-500 dark:text-gray-900'
            }
          >
            Sondre Alfnes
          </a>
        </Link>

        <ThemeSwitch />
      </div>
    </div>
  )
}

export default Navigation
