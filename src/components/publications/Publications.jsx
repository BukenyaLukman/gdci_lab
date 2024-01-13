import React from 'react'
import NavBar from '../NavBar'
import PublicationsBanner from './PublicationsBanner'
import PublicationsCards from './PublicationsCards'
import Footer from '../Footer'

const Publications = () => {
  return (
    <div>
      <NavBar/>
      <PublicationsBanner/>
      <PublicationsCards/>
      <Footer/>
    </div>
  )
}

export default Publications