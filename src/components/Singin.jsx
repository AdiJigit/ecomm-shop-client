import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

const Singin = () => {


  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = async(e) => {
    e.preventDefault()

    try{
      const url = 'https://adijigit.adaptable.app'

      const {data} = await axios.post(url + '/api/users/login', {
        email,
        password
      })

      localStorage.setItem('userInfo', JSON.stringify(data))
      toast.success('You have successfully logged in!')
      navigate('/') //navigate to home page

    } catch(error){
      toast.error("Invalid email or password!")
    }
  }

  useEffect(() => {
    //check for if exists user then redirect from login to home page
    if(localStorage.getItem('userInfo')){
      localStorage.getItem('userInfo')
      navigate('/')
    }
  }, [navigate])

  return (
    <>
    <div className='hidden sm:block'>
    <div className='f-container'>
      <div className='f-row'>
        <div className='f-formGroups'>
          <form onSubmit={loginHandler}>
            <h2 className='f-title tracking-widest'>LOGIN</h2>
            <div className='f-formGroup'>
              <label htmlFor='email' className='f-label'>EMAIL</label>
              <input type='email' onChange={(e) => setEmail(e.target.value)} id='email' className='f-input' required />
            </div>
            <div className='f-formGroup'>
              <label htmlFor='password' className='f-label'>PASSWORD</label>
              <input type='password' onChange={(e) => setPassword(e.target.value)} id='password' className='f-input' required />
            </div>
            <div className='f-formBtn'>
              <button className='f-btn'>LOGIN</button>
            </div>
            <div className='f-formOther'>
              <Link to='/register'>CREATE ACCOUNT</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>

    {/* MOBILE STYLE */}
    <div className='sm:hidden '>
      <div className=''>
        <div className='px-2 pr-6'>
          <form  onSubmit={loginHandler}>
            <h2 className='f-title'>LOGIN</h2>
            <div className='f-formGroup'>
              <label htmlFor='email' className='f-label'>EMAIL</label>
              <input type='email' onChange={(e) => setEmail(e.target.value)} id='2email' className='f-input' required />
            </div>
            <div className='f-formGroup'>
              <label htmlFor='password' className='f-label'>PASSWORD</label>
              <input  type='password' onChange={(e) => setPassword(e.target.value)}  id='2password' className='f-input' required />
            </div>
            <div className='f-formBtn'>
              <button className='f-btn'>LOGIN</button>
            </div>
            <div className='f-formOther'>
              <Link to='/register' className='text-lg'>CREATE ACCOUNT</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>

  )
}

export default Singin