import React from 'react'
import Contact from './Contact'
import Model from './Model'
import NavBar from '../NavBar'
import WorkingOn from './WorkingOn'
import Footer from '../Footer'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Model/>
        <WorkingOn/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home