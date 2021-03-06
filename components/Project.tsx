import React from 'react'
import Image from 'next/image'
import Icon from './Icon'
import Card from './Card'
import { FaGlobe, FaGithub } from 'react-icons/fa/'

const Project = (obj: any) => {
  return (
    <div>
      <h1 className="mt-10 text-center text-2xl font-bold text-white dark:text-black">
        {obj.header}
      </h1>
      <div className="mx-auto mt-2 flex w-11/12 flex-col rounded-xl border-2 border-slate-700 p-3 dark:bg-slate-300 md:flex-row">
        <Card
          frontImage={obj.frontImage}
          backImage={obj.backImage}
          githubLink={obj.source}
          liveLink={obj.live}
        />
        <div className="mt-5 flex justify-evenly text-white dark:text-black md:hidden">
          {obj.source == '' ? (
            <></>
          ) : (
            <a
              href={obj.source}
              className="my-auto cursor-pointer hover:text-slate-400"
            >
              <FaGithub className="mx-auto text-5xl" />
              <p className="font-bold">View Source</p>
            </a>
          )}

          {obj.live == '' ? (
            <></>
          ) : (
            <a
              href={obj.live}
              className="my-auto cursor-pointer hover:text-slate-400"
            >
              <FaGlobe className="mx-auto text-5xl" />
              <p className="font-bold">View Live Version</p>
            </a>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="mt-8 text-center text-2xl font-bold text-blue-400">
            {obj.subheader}
          </h1>
          <h2 className="mt-6 mb-4 text-center text-xl font-bold text-white dark:text-black">
            Technology Used
          </h2>

          <div className="flex flex-wrap justify-around">
            {obj.technology.map((tech: any) => (
              <div className="w-40">
                <Icon image={tech.logo} />

                <div className="m-1 rounded-xl p-1 text-white dark:text-black">
                  <h1 className="text-center text-xl font-bold">{tech.name}</h1>
                  {tech.features.map((feature: string) => (
                    <div className="text-center">{feature}</div>
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
