import React from 'react'
import { Link } from 'react-router-dom'

const ShopProduct = ({product}) => {
  return (
    <>
    <div className='hidden sm:block'>
      <div className='pro-container'>
        <Link to={`/product/${product._id}`}>
          <div className="pro rounded-b text-center">
            <img src={product.image} alt="" />
          <div className="rounded-b-md">
            <span>{product.title}</span>
            <h5 className='font-bold'>{product.subcategory}</h5>
            </div>
            <div className='flex justify-between'>
            <h4 className='font-bold'>${product.price}</h4>
            <Link to='/wish'>{product.star}</Link>
            </div>
          </div>
        </Link>
    </div>
    </div>

    {/* MOBILE STYLE */}
    <div className='sm:hidden w-[80%] m-auto'>
        <Link to={`/product/${product._id}`}>
          <div className='border-[1px] border-[#ccc] rounded-md'>
            <img className='p-2' src={product.image}  alt="" />
            <div>
              <span className='text-2xl'>{product.title}</span>
              <p className='text-lg'>{product.subcategory}</p>
              </div>
              <div className='p-2 flex justify-between'>
              <h4 className='font-bold text-lg'>${product.price}</h4>
              <Link to='/wish'>{product.star}</Link>
              </div>
          </div>
        </Link>
    </div>

    </>
  )
}

export default ShopProduct
