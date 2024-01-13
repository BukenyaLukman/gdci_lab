import React from 'react'
import NavBar from '../NavBar'
import PeopleBanner from './PeopleBanner'
import PeopleCards from './PeopleCards'
import Footer from '../Footer'

const People = () => {
  return (
    <div>
      <NavBar/>
      <PeopleBanner/>
      <PeopleCards/>
      <Footer/>
    </div>
  )
}

export default People