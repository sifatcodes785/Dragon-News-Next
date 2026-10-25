import React from 'react'
import Marquee from 'react-fast-marquee'

const news = [
    {
        id: "1",
        title: "Breaking News: Major Evevt Unfolds in the city"
    },
    {
        id: "2",
        title: "Breaking News: New Policy Announced by the Goverment"
    },
    {
        id: "3",
        title: "Breaking News: Sports Team Wins Chamionship"
    },


]

const BreakingNews = () => {
  return (
    <div className='container mx-auto bg-[#F3F3F3] shadow rounded-md  p-3 flex gap-2'>
        <button className='btn bg-[#D72050] text-white border-[#D72050]'>Latest</button>
        <Marquee pauseOnHover={true}>
            <div className='flex gap-20'>
                {
                news.map(n => <span key={n.id}>{n.title}</span>)
            }
            </div>

            
        </Marquee>
    </div>
  )
}

export default BreakingNews