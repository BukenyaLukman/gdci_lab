import React from 'react'
import NavBar from './NavBar'
import NewsBanner from './NewsBanner'
import NewsCards from './NewsCards'


// const slides = [
//     "https://i.ibb.co/ncrXc2V/1.png",
//     "https://ibb.co/GR44tb1",
//     "https://i.ibb.co/B3s7v4h/2.png",
//     "https://i.ibb.co/XXR8kzF/3.png",
//     "https://i.ibb.co/yg7BSdM/4.png",
    
// ]

const News = () => {
  
  return (
    <div>
        <NavBar/>
        <NewsBanner />
        <NewsCards/>
    </div>
  )
}

export default News