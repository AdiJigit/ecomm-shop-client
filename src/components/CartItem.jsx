import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = ({item, removeItemHandler, updateCartHandler}) => {
  return (
    <>
    <div className='hidden sm:block'>
    <div className='pro-container'>
      <Link to={`/product/${item._id}`}>
        <div className="pro">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="flex flex-col justify-center items-center py-2">
          <span className='text-center'>{item.title}</span>
          <h5 className='text-lg font-bold'>{item.subcategory}</h5>
          <div className='flex flex-col justify-between'>
            <div className='flex justify-between font-[600]'>
              <span className=''>{item.size}</span>
              <span className='text-black'>{item.color}</span>
            </div>
            <div className='font-[600]'>
              <span className='mr-12'>${(item.price)?.toFixed(2)}</span>
              <span className='ml-12'>{item.star}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="c-otherDiv flex justify-between w-full">
        <div className="c-quantity">
          <button className='ml-4 text-2xl font-light' onClick={() => updateCartHandler(item, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
          <span className='ml-2 text-lg font-bold'>{item.quantity}</span>
          <button className='ml-2 text-2xl font-light' onClick={() => updateCartHandler(item, item.quantity + 1)}>+</button>
        </div>
        <button className='w-btn bg-white font-bold' onClick={() => removeItemHandler(item)}>DELETE</button>
      </div>
    </div>
    </div>

    {/* MOBILE MENU */}
    <div className='sm:hidden'>
    <div className='pro-container'>
      <Link to={`/product/${item._id}`}>
        <div className="pro">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="des flex flex-col justify-center items-center py-2">
          <span className='text-xl text-center'>{item.title}</span>
          <h5 className='text-2xl font-bold'>{item.subcategory}</h5>
          <div className='flex flex-col justify-between'>
            <div className='flex justify-between font-[600]'>
              <span className=''>{item.size}</span>
              <span className='text-black'>{item.color}</span>
            </div>
            <div className='font-[600]'>
              <span className='mr-12'>${(item.price)?.toFixed(2)}</span>
              <span className='ml-12'>{item.star}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="c-otherDiv flex justify-between w-full">
        <div className="c-quantity">
          <button className='mx-2 text-2xl font-light' onClick={() => updateCartHandler(item, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
          <span className='mx-2 text-xl font-bold'>{item.quantity}</span>
          <button className='ml-2 text-2xl font-light' onClick={() => updateCartHandler(item, item.quantity + 1)}>+</button>
        </div>
        <button className='w-btn bg-white text-xl font-bold' onClick={() => removeItemHandler(item)}>DELETE</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default CartItem