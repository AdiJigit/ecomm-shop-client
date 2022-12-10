import React from 'react'
import BlogLists from '../components/BlogLists'
import Footer from '../components/Footer'
import HeaderNoTransparent from '../components/HeaderNoTransparent'

const Blog = () => {
  return (
    <div className='wrapper'>
      <header className='bg-black'>
        <HeaderNoTransparent />
      </header>
      <main className='main'>
        <BlogLists />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Blog