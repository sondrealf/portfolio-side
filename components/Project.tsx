import React from 'react'
import Image from 'next/image'
import Icon from './Icon'
import { SiTailwindcss } from 'react-icons/si'

const Project = (obj: any) => {
  let hei = 'front1.jpeg'
  let front = require('../data/images/' + obj.frontImage)

  return (
    <div>
      <h1 className="mt-10 text-center text-2xl font-bold text-white">
        {obj.header}
      </h1>
      <div className="h-104 mx-auto mt-2 flex w-11/12 flex-col rounded-xl border-2 border-slate-700 bg-slate-800 p-3 md:flex-row">
        <div className="h-80 max-w-[40rem] overflow-hidden rounded-xl border-2 border-slate-500 md:w-3/6">
          <div className="relative mx-auto w-0">
            <div className="absolute left-[-20rem] mx-auto w-[40rem]">
              <Image src={front} alt="frontimage" />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="mt-8 text-center text-2xl font-bold text-white">
            {obj.subheader}
          </h1>
          <h2 className="mt-6 text-center text-white"> Technology Used</h2>

          <div className="flex flex-wrap justify-around">
            {obj.technology.map((tech: any) => (
              <div className="w-40">
                <Icon Ikoner={SiTailwindcss} />

                <div className="border-1 m-1 rounded-xl border-slate-700 bg-slate-700 p-1">
                  <h1 className="text-center text-2xl font-bold text-white">
                    {tech.name}
                  </h1>
                  {tech.features.map((feature: any) => (
                    <div className="text-center font-bold text-white">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
