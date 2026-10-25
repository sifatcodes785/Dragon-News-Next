'use client'
import { connection } from "next/server";
import logoTitle from '@/assets/logo.png'
import Image from 'next/image'
import { format } from "date-fns";
const Header = () => {
  return (
    <div className='justify-items-center py-7'>
      <div className='py-3'>
        <Image src={logoTitle} width={350} height={200} alt='Logo'></Image>
      </div>
      <div >
        <p className='text-[#706F6F] text-sm '>Journalism Without Fear or Favour</p>
      </div>
      <div className='py-1'>
        <p className='text-[#706F6F]'>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
      </div>

    </div>
  )
}

export default Header