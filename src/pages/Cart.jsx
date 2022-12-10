import React from 'react'
import CartItems from '../components/CartItems'
import Footer from '../components/Footer'
import HeaderNoTransparent from '../components/HeaderNoTransparent'

const Cart = () => {
  return (
    <div className='wrapper'>
      <header >
        <HeaderNoTransparent />
      </header>
      <main className='main'>
        <CartItems />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Cart