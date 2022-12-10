import React from 'react'
import Footer from '../components/Footer'
import HeaderNoTransparent from '../components/HeaderNoTransparent'
import Signin from '../components/Singin'

const Login = () => {
  return (
    <div className='wrapper'>
      <header>
        <HeaderNoTransparent />
      </header>
      <main className='main'>
        <Signin />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Login