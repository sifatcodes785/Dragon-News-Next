"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link'
import React from 'react'

const RegisterPage = () => {

const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries())
    console.log(userData)
    

    const { data , error }  = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      callbackURL: '/login'
    })
    // console.log(data,error)
  }


  
  return (
    <div>
      <div className='bg-white w-[752px] h-[825px] rounded-[4px]  absolute right-[35%] '>
     
     <div className='py-15'>
      <h3 className='text-[#403F3F] text-3xl font-semibold px-50  py-15'>Register your account</h3>
      <div className='px-20 '>      
      <div className='border border-[#E7E7E7] w-[600px] '></div>
     </div>
     </div>
 <form className="  w-xs px-25" onSubmit={onSubmit}>
  

  <label className="label text-[#403F3F]  font-semibold py-3">Your Name</label>
  <input name='name' type="text" className="input w-[558px] h-[50px] bg-[#F3F3F3] border-[#F3F3F3]" placeholder="Enter your name" />

  <label className="label text-[#403F3F]  font-semibold py-3">Email address</label>
  <input name='email' type="email" className="input w-[558px] h-[50px] bg-[#F3F3F3] border-[#F3F3F3]" placeholder="Enter your email address" />

  <label className="label text-[#403F3F] font-semibold py-3">Password</label>
  <input name='password' type="password" className="input w-[558px] h-[50px] bg-[#F3F3F3] border-[#F3F3F3]" placeholder="Password" />

  <div className='py-7'>
    <input className='btn w-[558px] h-[50px] bg-[#403F3F] text-white ' type="submit"  value="Register" />
  </div>
</form>

    </div>
    </div>
  )
}

export default RegisterPage