import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewsDetails = ({newsDetail}) => {
  return (
    <div className='border border-[#E7E7E7] p-5 rounded-[4px]'>
        <Image className='' src={newsDetail.image_url} width={1100} height={600} alt='Image'></Image>
        <h3 className='text-[#403F3F] text-xl font-semibold  py-7'>{newsDetail.title}</h3>
        <p className='text-[#706F6F] text-sm '>{newsDetail.details}</p>
        <div className='py-5'>
            <button className='btn text-white bg-[#D72050] border-[#D72050] '><Link href={`/category/${newsDetail.category_id}`}>All news in this category</Link></button>
        </div>
    </div>
  )
}

export default NewsDetails