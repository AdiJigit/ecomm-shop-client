import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import HeaderNoTransparent from '../components/HeaderNoTransparent'
import MyAccount from '../components/MyAccount'
import Signin from '../components/Singin'

const Account = () => {

  const navigate = useNavigate()

  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : navigate('/login');

  return (
    <div className='wrapper'>
      {
        userInfo ? (
          <>
            <header>
              <HeaderNoTransparent />
            </header>
            <main className='main'>
              <MyAccount />
            </main>
            <footer>
              <Footer />
            </footer>
          </>
        ) : (
          <div className='min-h-[100vh] flex justify-center items-center'>
            <Signin />
          </div>
        )
      }

    </div>
  )
}

export default Account