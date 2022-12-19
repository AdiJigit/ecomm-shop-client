import React, {useEffect, useState} from 'react'
import ShopProduct from './ShopProduct'
import axios from 'axios'
import ReactPaginate from 'react-paginate';


const ShopProducts = ({list}) => {

  const [products, setProducts] = useState([]);

  //for pagination
  const [pageNumber, setPageNumber] = useState(0)
  const productsPerPage = 4
  const pagesVisited = pageNumber * productsPerPage

  const pageCount = Math.ceil(products.length / productsPerPage)

  const handlePageClick = ({selected}) => {
    setPageNumber(selected)
  }

  useEffect(() => {
    const fetchData = async () => {
      const resultProducts = await axios.get(process.env.URI + "/api/products/all");


      const resultProductsData = resultProducts.data;

      //show first latest product
      const sortResultProductsData = resultProductsData.sort((a, b) => b.createdAt.localeCompare(a.createdAt))

      //showing the products
      setProducts(sortResultProductsData);
    };

    fetchData();
  }, []);

  return (
    <div className='spr-container'>
      {list?.length === 0 ? (
        <h3 className="no-data">There are currently no products!</h3>
      ) : (
        <>
          <div className='spr-row'>
            {
              //only 4 lates
            list?.slice(pagesVisited, pagesVisited + productsPerPage).map((product) => (
              <ShopProduct key={product._id} product={product} />
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
  )
}

export default ShopProducts