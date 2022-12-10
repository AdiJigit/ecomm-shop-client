import React from 'react'
import UserImg from '../assets/user.png'

const AboutMe = () => {

  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;


  return (
    <div className='am-container'>
      <div className='am-row'>
        <h2 className='f-title'>About Me</h2>
      </div>
      <div className='am-row'>
        <div className="am-left">
          <img className='w-[150px] rounded-[50%]' src={UserImg} alt='' />
        </div>
        <div cla ssName="am-right">
          <h3 className='am-fullName mt-4 tracking-wide'>{userInfo.username}</h3>
        </div>
      </div>
    </div>
  )
}

export default AboutMe