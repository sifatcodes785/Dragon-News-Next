"use client"
import Image from 'next/image'
import { useState } from 'react';
import { FaBookmark } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import star from '@/assets/star.png'
import { FaEye } from "react-icons/fa";
import Link from 'next/link';

const AllNews = ({ newsCategory }) => {
  const [bookMark , setBookMark] = useState(false)
  return (
    <div>
      <Link href={`/news/${newsCategory._id}`}>
      <div className='max-w-full border border-[#F3F3F3] rounded-4xl'>

      <div className='flex justify-between py-3 px-4 bg-[#F3F3F3]'>
        {/* Profile */}
        <div className='flex gap-2'>
          <Image
            src={newsCategory.author?.img}
            alt={newsCategory.author?.name}
            width={40}
            height={40}
          />
          <div>
            <h3 className='text-[#403F3F] text-md font-semibold '>{newsCategory.author.name}</h3>
            <p className='text-[#706F6F] text-xs '>{newsCategory.author.published_date}</p>
          </div>
        </div>
        <div className='flex gap-1 py-3'>
          <div onClick={() => setBookMark(!bookMark)}>
            {
              bookMark ? <span className='text-yellow-500'><FaBookmark size={20}/></span> : <span className='text-gray-700'><FaBookmark size={20}/></span> 
            }
          </div>
          <div className='text-[#706F6F]'>
           <IoMdShare size={20}/>
          </div>
        </div>
      </div>
    {/* body */}
    <div className='bg-white'>
    <h3 className='text-[#403F3F] text-xl font-semibold px-3 py-4 w-[600px]'>{newsCategory.title}</h3>
    <Image className='px-4 ' src={newsCategory.image_url} width={998} height={400} alt='image'></Image>
    <p className='text-[#706F6F] text-sm px-3 py-6'>{newsCategory.details} <span className='text-[#FF8C47] font-semibold'>Read More</span> </p>
    <div className='border border-[#E7E7E7]'></div>
     {/* Reating */}
    <div className='flex justify-between px-4 py-3'>
      <div className='flex gap-2 '>
     <Image src={star} width={23} height={23} alt='star'></Image>
     <Image src={star} width={23} height={23} alt='star'></Image>
     <Image src={star} width={23} height={23} alt='star'></Image>
     <Image src={star} width={23} height={23} alt='star'></Image>
     <Image src={star} width={23} height={23} alt='star'></Image>
     <p className='text-[#706F6F] '>{newsCategory.rating.number}</p>
    </div>
    <div className='flex gap-3'>
      <span className='text-[#706F6F]'><FaEye size={23}/></span>
      <p className='text-[#706F6F]'>{newsCategory.total_view}</p>
    </div>
    </div>
    </div>
    
    </div>
    <br />
      </Link>
    </div>
    
  )
}

export default AllNews