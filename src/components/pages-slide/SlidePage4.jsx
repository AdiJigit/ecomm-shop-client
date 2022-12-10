import React from 'react'
import { Images3 } from '../../data1'

const SlidePage4 = () => {
  return (
    <>
      {Images3.map((item) => (
        <div key={item.id} className='w-[100vw] h-[100vh]'>
          <img className='w-full h-full object-cover' src={item.img} />
        </div>
      ))}
    </>
  )
}

export default SlidePage4