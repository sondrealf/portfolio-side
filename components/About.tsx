import React from 'react'
import Image from 'next/image'
import profile from '../public/profile.jpeg'

const About = () => {
  return (
    <div className="container mx-auto w-5/6 px-4">
      <div className="item-center flex flex-col-reverse text-center lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="lg:mt-12 lg:px-4 ">
          <h1 className="text-2xl font-bold text-white dark:text-gray-900 lg:text-5xl">
            Hey there,
          </h1>
          <div className="mt-6 text-white dark:text-gray-800">
            <p className="mb-4">
              I'm Sondre, a student and studying 3 year bachelor in informatics
              at "Norwegian University of Science and Technology" (NTNU) Based
              In Trondheim, Norway. This is a portfolio website where I showcase
              some of my personal projects and skills in the field of software
              development. If you would like to know more about me, you can
              check out my CV or contact me.
            </p>
          </div>
          <a href="https://cv.alfnes.dev/">
            <button className="mr-5 rounded border-2 bg-white px-5">
              My CV
            </button>
          </a>
          <a href="mailto:sondre.alfnes@gmail.com">
            <button className="rounded border-2 bg-white px-5">
              Send me a mail
            </button>
          </a>
        </div>
        <div className="mb-10 flex-shrink-0 lg:mt-12 lg:px-4">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  )
}

export default About
