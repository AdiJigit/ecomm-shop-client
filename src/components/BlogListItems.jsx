import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItems = ({blog}) => {
  return (
    <>
      <div className="hidden sm:block">
        <div className="hb-blog">
          <Link to={`/blogs/${blog._id}`}>
            <h3 className="hb-blogTitle mb-4">{blog.title}</h3>
            <p className="hb-desc mt-4">{blog.description}</p>
            <div className="hb-blogFooter">
              <span className="text-lg font-bold">{blog.author}</span>
              <span>{blog.createdAt.slice(0,10)}</span>
            </div>
          </Link>
        </div>
      </div>

      {/* MOBILE STYLE */}
      <div className="sm:hidden ml-2">
        <Link to={`/blogs/${blog._id}`}>
          <h3 className="mb-4 text-4xl">{blog.title}</h3>
          <p className="mt-4 text-lg font-[600]">{blog.description}</p>
          <div className="flex flex-col justify-end items-end py-4 mb-16">
            <span className="text-2xl font-bold">{blog.author}</span>
            <span className="text-lg">{blog.createdAt.slice(0,10)}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default BlogListItems