import React from 'react'
import Image from 'next/image'

const Icon = ({ image }: { image: any }) => {
  return (
    <div className="flex justify-center">
      <Image src={image} alt="tailwindcss" height="65" width="65" />
    </div>
  )
}

export default Icon
