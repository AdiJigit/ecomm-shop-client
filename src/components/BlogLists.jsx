import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogListItems from "./BlogListItems";
import ReactPaginate from 'react-paginate';

const BlogLists = () => {
  const [blogs, setBlogs] = useState([]);

  //for pagination
  const [pageNumber, setPageNumber] = useState(0)
  const blogsPerPage = 6
  const pagesVisited = pageNumber * blogsPerPage

  const pageCount = Math.ceil(blogs.length / blogsPerPage)

  const handlePageClick = ({selected}) => {
    setPageNumber(selected)
  }

  useEffect(() => {
    const fetchData = async () => {
      const resultBlog = await axios.get("/api/blogs/all");
      //showing the latest blogs

      const resultBlogData = resultBlog.data;

      const sortResultBlogData = resultBlogData.sort((a, b) => b.createdAt.localeCompare(a.createdAt))

      console.log(sortResultBlogData);
      setBlogs(sortResultBlogData);
    };

    fetchData();
  });

  return (
    <>
      <div id="blog" className="hidden sm:block hb-container">
        <div className="hb-row">
          <h2 className="f-title tracking-widest">Our Blog</h2>
        </div>
        <div className="nb-row">
          <div className="nb-col">
            <div className="hb-blogDiv">
              {blogs.length === 0 ? (
                <h3 className="no-data">There are currently no blogs!</h3>
              ) : (
                <>
                  <div className="hb-blogs">
                    {
                    //only 7 lates
                    blogs.slice(pagesVisited, pagesVisited + blogsPerPage).map((blog) => (
                      <BlogListItems key={blog._id} blog={blog} />
                    ))
                    }
                  </div>
                  <ReactPaginate
                    className="filter-pagination"
                    breakLabel="..."
                    nextLabel="next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="prev"
                    renderOnZeroPageCount={null}
                    activeClassName={"page-active"}
                    activeLinkClassName={"page-active-link"}
                      />
                </>
              )
              }
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE STYLE */}
      <div id="blog" className="sm:hidden ">
        <div className="">
          <h2 className="text-center">Our Blog</h2>
        </div>
        <div className="">
          <div className="">
            <div className="flex flex-col items-center">
              <div className="w-full">
                {blogs.length === 0 ? (
                  <h3 className="no-data">There are currently no blogs!</h3>
                ) : (
                    <>
                      <div className="hb-blogs">
                        {
                        //only 7 lates
                        blogs.slice(pagesVisited, pagesVisited + blogsPerPage).map((blog) => (
                          <BlogListItems key={blog._id} blog={blog} />
                        ))
                        }
                      </div>
                      <ReactPaginate
                        className="filter-pagination"
                        breakLabel="..."
                        nextLabel="next"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="prev"
                        renderOnZeroPageCount={null}
                        activeClassName={"page-active"}
                        activeLinkClassName={"page-active-link"}
                      />
                      </>
                    )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLists;
