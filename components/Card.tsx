import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'
import Image from 'next/image'

const Card = ({
  frontImage,
  backImage,
}: {
  frontImage: any
  backImage: any
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
            <Image src={frontImage} />
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
        <div className="relative m-auto w-0">
          <div className="absolute left-[-20rem] m-auto w-[40rem]">
            <Image src={backImage} />
          </div>
        </div>
      </a.div>
    </div>
  )
}

export default Card
