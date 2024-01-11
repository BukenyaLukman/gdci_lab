import React from 'react'
import NavBar from './NavBar'
import PublicationsBanner from './PublicationsBanner'
import PublicationsCards from './PublicationsCards'

const Publications = () => {
  return (
    <div>
      <NavBar/>
      <PublicationsBanner/>
      <PublicationsCards/>
    </div>
  )
}

export default Publications