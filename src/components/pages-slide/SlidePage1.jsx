import React from 'react'
import { Videos } from '../../data1'

const Video = () => {
  return (
   <>
     {Videos.map((item) => (
        <div key={item.id} className='slide w-[100vw] h-[100vh]'>
          <video className='w-full h-full object-cover' autoPlay loop muted src={item.video} />
        </div>
      ))}
   </>
  )
}

export default Video