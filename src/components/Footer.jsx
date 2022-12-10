import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='hidden sm:block'>
    <div className='bg-black flex items-center justify-center text-white w-screen h-screen relative'>
      <div className='flex flex-col items-center justify-center w-[80%] h-[80%] mx-16 m-auto mb-16'>
        <h1 className='text-xl font-normal'>
          <Link to='/'>JOIN OUR NEWSLETTER</Link>
        </h1>
        <div className='text-xs'>
          <div className='my-16 flex justify-around'>
            <Link to='/'>TIKTOK</Link>
            <Link to='/'>INSTAGRAM</Link>
            <Link to='/'>FACEBOOK</Link>
            <Link to='/'>TWITTER</Link>
            <Link to='/'>PINTEREST</Link>
            <Link to='/'>YOUTUBE</Link>
            <Link to='/'>SPOTIFY</Link>
          </div>
          <div className='my-16 flex indent-4 justify-between mx-16'>
            <Link to='/'>COOKIES SETTINGS</Link>
            <Link to='/'>PRIVACY AND COOKIES POLICY</Link>
            <Link to='/'>TERMS OF US</Link>
          </div>
        </div>
      </div>
    </div>
    </div>


    {/* MOBILE MENU */}
    <div className='sm:hidden'>
    <div className='w-screen h-screen pt-10 bg-black flex items-center justify-center text-white relative'>
      <div className='flex flex-col items-center justify-center w-[80%] h-[80%] mx-16 m-auto mb-16'>
        <h1 className='text-2xl font-bold'>
          <Link to='/'>JOIN OUR NEWSLETTER</Link>
        </h1>
        <div className='text-xs'>
          <div className='my-16 text-[16px] flex flex-col gap-5 items-center justify-around'>
            <Link to='/'>TIKTOK</Link>
            <Link to='/'>INSTAGRAM</Link>
            <Link to='/'>FACEBOOK</Link>
            <Link to='/'>TWITTER</Link>
            <Link to='/'>PINTEREST</Link>
            <Link to='/'>YOUTUBE</Link>
            <Link to='/'>SPOTIFY</Link>
          </div>
          <div className='my-16 leading-normal text-[16px] flex flex-col gap-5 items-center justify-between mx-16'>
            <Link to='/'>COOKIES SETTINGS</Link>
            <Link className='w-[200px] text-center' to='/'>PRIVACY AND COOKIES POLICY</Link>
            <Link to='/'>TERMS OF US</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer