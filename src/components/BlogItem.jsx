import React from 'react'
import BlogDetails from './BlogDetails'
import Footer from './Footer'
import HeaderNoTransparent from './HeaderNoTransparent'

const BlogItem = () => {
  return (
    <div className='wrapper'>
      <header className='bg-black'>
        <HeaderNoTransparent />
      </header>
      <main className='main'>
        <BlogDetails />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default BlogItem