import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { Store } from '../store';
import WishListItem from './WhishListItem'

const WishList = () => {

  const {state, dispatch: ctxDispatch} = useContext(Store)
  const { wish: {wishItems} } = state;

  const removeItemHandler = (item) => {

    ctxDispatch({
      type: 'REMOVE_FROM_WISH',
      payload: item,
  })
  toast.success('The item deleted')

  }

  return (
    <div className='w-container sm:h-screen'>
      <div className='w-row'>
        <h2 className='s-title'>Whish List</h2>
      </div>
      <div className='w-row'>
        {
          wishItems.length === 0 ? (
            <h3 className='text-center py-[40%] sm:py-[15%]'>No products in the wishlist</h3>
          ) : (
            <div className='w-groups'>
          {
            wishItems?.map((item) => (
              <WishListItem key={item._id} item={item} removeItemHandler={removeItemHandler} />
            ))
          }
        </div>
          )
        }
      </div>
    </div>
  )
}

export default WishList