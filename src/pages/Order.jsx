import React from 'react'
import Footer from '../components/Footer'
import HeaderNoTransparent from '../components/HeaderNoTransparent'
import MyOrder from '../components/MyOrder'

const Order = () => {
  return (
    <div className='wrapper'>
      <header className='bg-black'>
        <HeaderNoTransparent />
      </header>
      <main className='main'>
        <MyOrder />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Order