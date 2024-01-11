import React from 'react'
import Contact from './Contact'
import Model from './Model'
import NavBar from './NavBar'
import WorkingOn from './WorkingOn'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Model/>
        <WorkingOn/>
        <Contact/>
    </div>
  )
}

export default Home