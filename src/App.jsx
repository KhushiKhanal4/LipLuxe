import React from 'react'
import NavBar from './components/Header/NavBar'
import HeroSection from './components/Hero/HeroSection'
import WhyLipLuxe from './components/About/WhyLipLuxe'

function App() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <hr className='font-bold'/>
      <WhyLipLuxe/>
    </div>
  )
}

export default App