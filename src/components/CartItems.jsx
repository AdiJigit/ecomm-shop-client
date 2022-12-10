import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import Checkout from '../pages/Checkout';
import { Store } from '../store';
import CartItem from './CartItem'

const CartItems = () => {

  const {state, dispatch: ctxDispatch} = useContext(Store)
  const { cart: {cartItems} } = state;

  const [open, setOpen] = useState(false);


  const removeItemHandler = (item) => {
    ctxDispatch({
      type: 'REMOVE_FROM_CART',
      payload: item,
  })
  toast.success('The item deleted')
  }

  const updateCartHandler = (item, quantity) => {
    ctxDispatch({
      type: 'ADD_TO_CART',
      payload: {...item, quantity},
  })
  }

  const subTotal = cartItems.reduce((a,c) => a + c.price * c.quantity, 0)
  const taxPrice = (0.03 * subTotal)//20% tax
  const totalPrice = taxPrice + subTotal;

  return (
    <>
    <div className='hidden sm:block'>
    <div className='c-container'>
      <div className='w-row'>
        <h2 className='s-title'>Your Cart</h2>
      </div>
      <div className='c-row'>
        <div className='c-col'>
          {
            cartItems.length === 0 ? (
              <h3 className='text-center py-[40%] sm:py-[15%]'>No products in the Cart</h3>
            ) : (
              <div className="w-groups">
                {
                  cartItems?.map((item) => (
                    <CartItem key={item._id} item={item} removeItemHandler={removeItemHandler} updateCartHandler={updateCartHandler} />
                  ))
                }
          </div>
            )
          }
        </div>
        <div className='c-col mr-4'>
          <div className='cart-bill'>
            <h2 className='bill-title'>My Bill</h2>
            {
            cartItems.length === 0 ? (
              <h3 className='text-center py-[40%] sm:py-[15%]'>No products!</h3>
            ) : (
              <div className="bill-groups">
                {
                  cartItems?.map((item) => (
                    <div key={item._id} className='bill-group font-bold'>
                      <span>{item.title}</span>
                      <span>${(item.price)?.toFixed(2)}</span>
                    </div>
                ))
                }
                </div>
            )}
            <div className='bill-total'>
              <div className='bill-group'>
                <span>Subtotal:</span>
                <span>${(subTotal)?.toFixed(2)}</span>
              </div>
              <div className='bill-group'>
                <span>Tax 3%:</span>
                <span>${(taxPrice)?.toFixed(2)}</span>
              </div>
              <div className='bill-group'>
                <h3>Total:</h3>
                <h3>${(totalPrice)?.toFixed(2)}</h3>
              </div>
            </div>
            <div className='bill-btn'>
             {cartItems.length > 0 && ( <button onClick={() => setOpen(true)}>Chekout</button>)}
            </div>
          </div>
        </div>
      </div>
      {open && <Checkout cartItems={cartItems} setOpen={setOpen} subTotal={subTotal} taxPrice={taxPrice} totalPrice={totalPrice} />}
    </div>
    </div>

    {/* MOBILE MENU */}
    <div className='sm:hidden'>
      <div className=''>
        <h2 className='s-title'>Your Cart</h2>
      </div>
      <div className=''>
        <div className='c-col'>
        {
            cartItems.length === 0 ? (
              <h3 className='text-center py-[40%] sm:py-[15%]'>No products in the Cart</h3>
            ) : (
              <div className="w-groups">
                {
                  cartItems?.map((item) => (
                    <CartItem key={item._id} item={item} removeItemHandler={removeItemHandler} updateCartHandler={updateCartHandler} />
                  ))
                }
          </div>
            )
          }
        </div>
        <div className='w-full mt-32 px-8'>
          <div className='flex flex-col items-center text-lg font-[600]'>
            <h2 className='my-4'>My Bill</h2>
            <div className='w-full'>
            {
            cartItems.length === 0 ? (
              <h3 className='text-center py-[40%] sm:py-[15%]'>No products!</h3>
            ) : (
              <div className="bill-groups">
                {
                  cartItems?.map((item) => (
                    <div key={item._id} className='bill-group font-bold'>
                      <span>{item.title}</span>
                      <span>${(item.price)?.toFixed(2)}</span>
                    </div>
                ))
                }
                </div>
            )}
            </div>
            <div className='bill-total w-full'>
            <div className='bill-group'>
                <span>Subtotal:</span>
                <span>${(subTotal)?.toFixed(2)}</span>
              </div>
              <div className='bill-group'>
                <span>Tax 3%:</span>
                <span>${(taxPrice)?.toFixed(2)}</span>
              </div>
              <div className='bill-group mt-10'>
                <h3>Total:</h3>
                <h3>${(totalPrice)?.toFixed(2)}</h3>
              </div>
            </div>
            <div className='flex justify-center'>
              {cartItems.length > 0 && ( <button onClick={() => setOpen(true)}>Chekout</button>)}
            </div>
          </div>
        </div>
      </div>
      {open && <Checkout setOpen={setOpen} />}
    </div>
    </>
  )
}

export default CartItems