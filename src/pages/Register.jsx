import React from 'react'
import SignUp from '../components/SignUp'
import HeaderNoTransparent from '../components/HeaderNoTransparent'
import Footer from '../components/Footer'

const Register = () => {
  return (
    <div className='wrapper'>
      <header>
        <HeaderNoTransparent />
      </header>
      <main className='main'>
        <SignUp />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Register