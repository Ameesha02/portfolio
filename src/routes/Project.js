import React from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import Main2 from '../components/Main2'
import Cards from '../components/Cards'
import Work from '../components/Work'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Main2 heading="PROJECTS." text="some of my most recent works" />
      <Work/>
      {/* <Cards/> */}
      <Footer/> 
    </div>
  )
}

export default Project
