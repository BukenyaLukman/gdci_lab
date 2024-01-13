import React from 'react'
import Contact from './Contact'
import Model from './Model'
import NavBar from '../NavBar'
import JoinUs from './JoinUs'
import Footer from '../Footer'
import WhatWeDo from './WhatWeDo'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Model/>
        <WhatWeDo/>
        <Contact/>
        <JoinUs/>
     
        <Footer/>
    </div>
  )
}

export default Home