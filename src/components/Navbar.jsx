"use client" 
import Image from 'next/image'
import Link from 'next/link'
import profile from '@/assets/user.png'
import { useSession } from '@/lib/auth-client'
const Navbar = () => {
  const {data,isPending} = useSession()
  const user = data?.user

  return (
    <div className=' container mx-auto flex text-sm text-[#706F6F] justify-between py-5'>
      <div></div>
      <ul className='flex gap-5 justify-items-center py-3'>
        <li><Link href='/' >Home</Link></li>
        <li ><Link href='/about'>About</Link></li>
        <li><Link href='/career'>Career</Link></li>
      </ul>

      {
        user?
        <div className='flex gap-2 justify-items-center'>
          <div><h3 className='  text-[#403F3F] text-xl font-semibold py-1.5'>{user.name}</h3></div>
        <div>
          <Image src={profile} width={41} height={41} alt='Profile'></Image>
        </div>
        
      </div> 
      :
      <div className='flex gap-1 justify-items-center'>
        <div>
          <Image src={profile} width={41} height={41} alt='Profile'></Image>
        </div>
        <div><Link href='/login' className='btn bg-[#403F3F] text-white w-[120px] h-[44px]'>Login</Link></div>
      </div> 
      }
    </div>
  )
}

export default Navbar