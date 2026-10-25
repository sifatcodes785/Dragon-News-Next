import AllNews from '@/components/homepage/news/AllNews'
import React from 'react'

export async function generateStaticParams() {
return Array.from({ length: 13 }, (_, i) => ({
id: String(i),
}))
}

const page = async ({params}) => {
     const {"id": categoryId} = await params
     const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
     const data = await res.json()
     const newsCategorys = data.data 
    //  console.log(newsCategorys)
  return (
    <div>
        {newsCategorys?.map((newsCategory) => (
  <AllNews
    key={newsCategory._id}
    newsCategory={newsCategory}
  />
))}
    </div>
  )
}

export default page