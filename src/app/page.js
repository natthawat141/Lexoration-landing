'use client'

import React from 'react'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
       <NavBar />
      <HomePage/>
      <Footer/> 
    </div>
  )
}

export default page