import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'

const Home = () => {

  return (
    <div className='wrapper relative'>
      <header className='z-20'>
        <Header />
      </header>
      <main className='overflow-hidden'>
        <Slider />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home