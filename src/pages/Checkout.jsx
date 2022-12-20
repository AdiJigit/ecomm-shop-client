import React, {useState} from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Checkout = ({ setOpen, cartItems, taxPrice, totalPrice, subTotal }) => {


  const navigate= useNavigate()

  const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

  const userId = userInfo._id
  console.log(userId)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  const orderProductHandler = async(e) => {
    e.preventDefault()
    try{

      const {data} = await axios.post('https://jigit-api.onrender.com/api/orders', {

        orderItems: cartItems,
        userId: userId,
        name: name,
        email: email,
        address: address,
        phone: phone,
        subTotal: subTotal,
        taxPrice: taxPrice,
        totalPrice: totalPrice,
      })

      if(data){
        localStorage.removeItem('cartItems')
        setOpen(false)
        toast.success('You have successfully ordered')
        navigate('/account')
      }

    }catch(error){
      toast.error('Order failed. Please, try to fill option for colors and sizes')
    }
  }

  return (
    <>
    <div className='hidden sm:block'>
    <div className='co-container'>
      <form onSubmit={orderProductHandler}>
        <h5 className='co-title text-xl font-bold uppercase'>You will pay after delivery! </h5>
        <div className='close-form' onClick={() => setOpen(false)}>X</div>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input onChange={(e) => setName(e.target.value)} required type='text' id='name' />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} required type='text' id='email' />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Address</label>
          <input onChange={(e) => setAddress(e.target.value)} required type='text' id='address' />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone</label>
          <input onChange={(e) => setPhone(e.target.value)} required type='text' id='phone' />
        </div>
        <div className='form-btn flex justify-center items-center'>
          <button className='flex gap-[10px] bg-green-500 hover:scale-105 text-black uppercase font-bold py-2 px-8' type='submit'>Order <CiDeliveryTruck size={20} /></button>
        </div>
      </form>
    </div>
    </div>

    {/* MOBILE STYLE */}
    <div className='co-container'>
      <form onSubmit={orderProductHandler}>
        <h5 className='co-title text-xl font-bold uppercase'>You will pay after delivery! </h5>
        <div className='close-form' onClick={() => setOpen(false)}>X</div>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input onChange={(e) => setName(e.target.value)} required type='text' id='name' />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} required type='text' id='email' />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Address</label>
          <input onChange={(e) => setAddress(e.target.value)} required type='text' id='address' />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone</label>
          <input onChange={(e) => setPhone(e.target.value)} required type='text' id='phone' />
        </div>
        <div className='form-btn flex justify-center items-center'>
          <button className='flex gap-[10px] bg-green-500 hover:scale-105 text-black uppercase font-bold py-2 px-8' type='submit'>Order <CiDeliveryTruck size={20} /></button>
        </div>
      </form>
    </div>
   </>
  )
}

export default Checkout