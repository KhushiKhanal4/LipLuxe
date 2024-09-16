import React from 'react'
import NavBar from './components/Header/NavBar'
import HeroSection from './components/Hero/HeroSection'
import WhyLipLuxe from './components/About/WhyLipLuxe'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <hr className='font-bold'/>
      <WhyLipLuxe/>
      <Footer/>
    </div>
  )
}

export default App