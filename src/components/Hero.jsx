import React from 'react'

const Hero = () => {
  return (
      <header className="hero text-white text-center py-20">
        <img src="/sea.png" className="inline h-28" alt="LOGO" />
        <h1 className='text-9xl text-bold title'>AquaGuardians</h1>
        <h1 className="text-4xl font-normal">Initiative for Water Consumption Awareness</h1>
        <p className="mt-4 text-2xl font-thin">Understand |  Conserve | Sustain</p>
        <img className='absolute top-0 -z-10 opacity-15' src='/bg.jpg' />
      </header>
  )
}

export default Hero
