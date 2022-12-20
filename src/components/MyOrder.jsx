import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import MyOrderDetails from './MyOrderDetails'

const MyOrder = () => {

  const [order, setOrder] = useState([])

  const location = useLocation()

  const id = location.pathname.split('/')[2]
  console.log(id)

  useEffect(() => {

  const fetchData = async() => {
    try{

      const {data} = await axios.get(process.env.SERVER_URI + `/api/orders/find/${id}`);
      console.log(data);
      setOrder(data)

  }catch(error){
    toast.error('Order not found')
  }
  }
  fetchData()

  }, [id])

  return (
    <div className='my-container'>
      <div className='my-row myOrderTop'>
        <Link to='/account' className='text-2xl sm:xl ml-8'>Go Back</Link>
        <h2 className='bill-title text-2xl sm:text-3xl py-8'>Order id: {order._id}</h2>
      </div>
      <div className='my-row myorder flex flex-col sm:flex sm:flex-row'>
        <div className='my-col'>
          <div className="my-groups">
            <div className='bill-groups'>
              <div className="w-groups">
                {
                  order.orderItems?.map((item) => (
                    <MyOrderDetails key={item._id} item={item} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div className="my-col text-center sm:mr-16">
          <div className='bill-total sm:w-[250px] w-full px-4'>
            <div className='bill-group'>
              <span className='font-bold'>Name:</span>
              <span>{order.name}</span>
            </div>
            <div className='bill-group'>
              <span className='font-bold'>Email:</span>
              <span>{order.email}</span>
            </div>
            <div className='bill-group'>
              <span className='font-bold'>Address:</span>
              <span>{order.address}</span>
            </div>
            <div className='bill-group'>
              <span className='font-bold'>Is Devivered:</span>
              <span>{order.isDelivered === true ? ('True') : ('False')}</span>
            </div>
            <div className='bill-group'>
              <span className='font-bold'>Is Paid:</span>
              <span>{order.isPaid === true ? ('True') : ('False')}</span>
            </div>
            <div className='bill-group mt-10'>
              <span className='font-bold'>Subtotal:</span>
              <span>${(order.subTotal)?.toFixed(2)}</span>
            </div>
            <div className='bill-group'>
              <span className='font-bold'>Tax:</span>
              <span>${(order.taxPrice)?.toFixed(2)}</span>
            </div>
            <div className='bill-group'>
              <span className='font-bold'>Total:</span>
              <span>${(order.totalPrice)?.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyOrder