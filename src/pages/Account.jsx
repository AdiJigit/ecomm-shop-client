import React from 'react'
import Footer from '../components/Footer'
import HeaderNoTransparent from '../components/HeaderNoTransparent'
import MyAccount from '../components/MyAccount'

const Account = () => {
  return (
    <div className='wrapper'>
      <header >
        <HeaderNoTransparent />
      </header>
      <main className='main'>
        <MyAccount />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Account