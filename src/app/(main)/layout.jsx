import React from 'react'
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import BreakingNews from "@/components/BreakingNews";
import SideBar from '@/components/homepage/news/SideBar';
import RightSideBar from '@/components/homepage/news/RightSideBar';

const RootLayout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="container mx-auto my-10 grid grid-cols-12 gap-3">
                <div className='col-span-3'><SideBar></SideBar></div>

                <div className='col-span-7'>
                    <h3 className='text-[#403F3F] text-xl font-semibold'>Dragon News Home</h3>
                    {children}
                </div>
                <div className='col-span-2'><RightSideBar></RightSideBar></div>
            </div>


        </div>
    )
}

export default RootLayout