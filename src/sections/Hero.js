import React from 'react'
import heroImage from '../../public/heroImage.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32`}>
      <div className='flex items-center justify-between w-full'>
        <div>
          <Image src={heroImage} alt="RedDoorProject" className='w-full h-auto' />
        </div>
      </div>

    </div>
  )
}

export default Hero