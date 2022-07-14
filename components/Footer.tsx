import React from 'react'

const Footer = () => {
  return (
    <div className="py-6">
      <div className="mx-auto w-11/12 text-white dark:text-gray-800">
        <div className="dark:border-white-300 mb-2 border-t-2 border-gray-300 pb-8"></div>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <p>Built with Next.js, Tailwind and Vercel</p>
          <div className="flex flex-wrap space-x-2 pt-2 font-medium sm:space-x-4 lg:pt-0">
            <a
              href="https://www.linkedin.com/in/sondre-alfnes-2243331b3/"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sondrealf"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://cv.alfnes.dev/"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              My CV
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
