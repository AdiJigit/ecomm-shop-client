import React from 'react'
import Footer from '../components/Footer'
import HeaderNoTransparent from '../components/HeaderNoTransparent'
import ProductDetails from '../components/ProductDetails'

const Product = () => {
  return (
    <div className='wrapper'>
      <header className='bg-black'>
        <HeaderNoTransparent />
      </header>
      <main className='main'>
        <ProductDetails />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Product