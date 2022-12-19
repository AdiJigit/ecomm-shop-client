import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'


const BlogDetails = () => {

  const [blog, setBlog] = useState([])

  const location = useLocation()

  const id = location.pathname.split('/')[2]
  console.log(id)

  const url = 'https://adijigit.adaptable.app'

  useEffect(() => {

    const fetchData = async () => {
      const resultBlog = await axios.get(url + `/api/blogs/find/${id}`);
      console.log(resultBlog.data);
      setBlog(resultBlog.data)
    };

    fetchData();
  }, [id])

  return (
    <>
      <div className='hidden sm:block'>
      <div id='blog' className='hb-container'>
        <div className='nb-row'>
          <div className='nb-col'>
            <div className='hb-blogDiv'>
              <div className='hb-blogs blog mt-[-100px]'>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-desc text-lg">{blog.description}</p>
                <div className='hb-blogFooter blog'>
                  <span className='text-2xl font-bold'>{blog.author}</span>
                  <span className='text-lg'>{blog?.createdAt?.slice(0,10)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>


      {/* MOBILE STYLE */}
      <div id='blog' className='sm:hidden w-full px-8'>
        <div className=''>
          <div>
            <div>
              <div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-desc text-lg font-[600]">{blog.description}</p>
                <div className='hb-blogFooter blog'>
                <span className='text-2xl font-bold'>{blog.author}</span>
                <span className='text-lg'>{blog?.createdAt?.slice(0, 10)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default BlogDetails