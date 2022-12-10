import React from 'react'
import { Images } from '../../data1'

const SlidePage2 = () => {
  return (
    <>
      {Images.map((item) => (
        <div key={item.id} className='w-[100vw] h-[100vh]'>
          <img className='w-full h-full object-cover' src={item.img} />
        </div>
      ))}
    </>
  )
}

export default SlidePage2