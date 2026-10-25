import Link from 'next/link'
import React from 'react'

const SideBar = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  const categorys = data.data.news_category
  // console.log(categorys)
  return (
    <div className=' bg-white'>
      <h3 className='text-[#403F3F] text-xl font-semibold'>All Caterogy</h3>
      <div className="drawer lg:drawer-open py-2">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

        </div>
        <div className="drawer-side">
          <label className="drawer-overlay"></label>
          <ul className="menu bg-white min-h-full w-80  text-[#9F9F9F] gap-3">
            {/* Sidebar content here */}
            {
              categorys.map(category => <li key={category.category_id} ><Link href={`/category/${category.category_id}`}>{category.category_name}</Link></li>)
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar