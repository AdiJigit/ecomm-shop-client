import React from 'react'
import Footer from '../components/Footer'
import HeaderNoTransparent from '../components/HeaderNoTransparent'
import ShopMainPart from '../components/ShopMainPart'

const Shop = () => {
  return (
    <div className='wrapper'>
      <header className='bg-black'>
        <HeaderNoTransparent />
      </header>
      <main className='main'>
        <ShopMainPart />
      </main>
      <footer>
        <Footer />
      </footer>
  </div>
  )
}

export default Shop