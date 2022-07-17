import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'
import Image from 'next/image'
import { FaGlobe, FaGithub } from 'react-icons/fa/'

const Card = ({
  frontImage,
  backImage,
  githubLink,
  liveLink,
}: {
  frontImage: any
  backImage: any
  githubLink: string
  liveLink: string
}) => {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <div
      className="relative m-auto h-72 w-[80vw] max-w-[40rem] md:w-3/6 "
      onMouseOver={() => set((state) => true)}
      onMouseOut={() => set((state) => false)}
    >
      <a.div
        className="absolute h-full w-full overflow-hidden rounded-xl border border-slate-800 "
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
      >
        <div className="relative m-auto w-0">
          <div className="absolute left-[-20rem] m-auto w-[40rem]">
            <div className="absolute top-0">
              <Image src={frontImage} />
            </div>
          </div>
        </div>
      </a.div>

      <a.div
        className="absolute h-full w-full overflow-hidden rounded-xl border border-slate-800 "
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      >
        <div className="absolute z-20 flex h-full w-full justify-evenly">
          {githubLink == '' ? (
            <></>
          ) : (
            <a
              href={githubLink}
              className="my-auto cursor-pointer text-white hover:text-slate-400"
            >
              <FaGithub className="mx-auto text-6xl" />
              <p className="font-bold">View Source</p>
            </a>
          )}

          {liveLink == '' ? (
            <></>
          ) : (
            <a
              href={liveLink}
              className="my-auto cursor-pointer text-white hover:text-slate-400"
            >
              <FaGlobe className="mx-auto text-6xl" />
              <p className="font-bold">View Live Version</p>
            </a>
          )}
        </div>
        <div className="relative m-auto w-0">
          <div className="absolute left-[-20rem] m-auto w-[40rem]">
            <div className="absolute z-10 h-full w-full bg-black opacity-40" />
            <Image src={backImage} />
          </div>
        </div>
      </a.div>
    </div>
  )
}

export default Card
