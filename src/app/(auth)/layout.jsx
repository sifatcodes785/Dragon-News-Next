import Navbar from '@/components/Navbar'
import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='bg-[#F3F3F3] min-h-screen'>
      <Navbar></Navbar>
      
        <div className='py-10'>
          {children}
        </div>
    </div>
  )
}

export default AuthLayout