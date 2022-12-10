import React from 'react'
import Video1 from '../assets/intro-video.mp4'

const Intro = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover' src={Video1} autoPlay loop muted />
    </div>
  )
}

export default Intro