import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import Tips from './Tips'
import Problem from './Problem'
import Carousal from './Carousal'


const Home = () => {
  return (
    <div className='hero'>
      <Hero />
      <Stats />
      <Carousal/>
      <Problem />
      <Tips />
    </div>
  )
}

export default Home
