import React from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'

import Main2 from '../components/Main2'
import Form from '../components/Form1'
const Contact = () => {
  return (
    <div>
        <Navbar/>
        <Main2 heading="CONTACT." text="Lets have a chat"/>
        <Form/>
      <Footer/> 
    </div>
  )
}

export default Contact
