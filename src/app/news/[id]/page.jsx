import Header from '@/components/Header'
import RightSideBar from '@/components/homepage/news/RightSideBar'
import NewsDetails from '@/components/newsdetails/NewsDetails'
import React from 'react'


// export async function generateStaticParams() {
// https://openapi.programming-hero.com/api/news/${id}
// return []
// }

const NewsDetailsPage = async ({params}) => {
  const {id} = await params
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`)
  const data = await res.json()
  const newsDetails = data.data
  console.log(newsDetails)
  return (
    <div>
        <Header></Header>
        <div className='grid grid-cols-12 container mx-auto gap-6 py-5'> 
          <div className='col-span-9'>
            <h3 className='text-[#403F3F] text-xl font-semibold py-3'>Dragon News</h3>
            {
              newsDetails.map(newsDetail => <NewsDetails key={newsDetail._id} newsDetail={newsDetail}></NewsDetails>) 
            }
          </div>
          <div className='col-span-3'>
            <RightSideBar></RightSideBar>
          </div>
        </div>
    </div>
  )
}

export default NewsDetailsPage