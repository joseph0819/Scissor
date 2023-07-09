import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import OneStop from '../../components/OneStop'
import WhyScissors from '../../components/WhyScissors'
import Pricing from '../Pricing/Pricing'
import Accordion from '../../components/Accordion'
import GetStarted from '../../components/GetStarted'
import Footer from '../../components/Footer'




const HomePage = () => {
  return (
    
    <div className='p-2'>
      <Navbar/>
      <HeroSection/>
  
      <OneStop/>
      <WhyScissors/>
      <Pricing/>
      <Accordion/>
      <GetStarted/>
      <Footer/>
      
      </div>
      
     
  )
}

export default HomePage
