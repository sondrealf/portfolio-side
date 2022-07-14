import React from 'react'
import { SiTailwindcss } from 'react-icons/si'
import { IconType } from 'react-icons/lib'

type IconProps = {
  Ikon: IconType
}

const Icon = ({ Ikon }: IconProps) => {
  return (
    <>
      <Ikon className="mt-8 text-center text-2xl font-bold text-white" />
    </>
  )
}

export default Icon
