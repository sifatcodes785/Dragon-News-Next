import React from 'react'

const loading = () => {
  return (
    <div className='flex container mx-auto items-center justify-center h-[90vh]'>
        <h3 className='font-semibold text-[#403F3F]'>Loading</h3>
        <span className="loading loading-dots loading-xs"></span>
    </div>
  )
}

export default loading