import React from 'react'
import Footer from '../components/Footer'
import HeaderNoTransparent from '../components/HeaderNoTransparent'
import WishList from '../components/WishList'

const Whish = () => {
  return (
    <div className='wrapper'>
      <header className='bg-black'>
        <HeaderNoTransparent />
      </header>
      <main className='main'>
        <WishList />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Whish