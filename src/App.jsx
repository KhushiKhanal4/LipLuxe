import React from 'react'
import { useEffect
   
 } from 'react'
import NavBar from './components/Header/NavBar'
import HeroSection from './components/Hero/HeroSection'
import WhyLipLuxe from './components/About/WhyLipLuxe'
import Footer from './components/Footer/Footer'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease",
      delay: 100,
      once:false
    });
    AOS.refresh();
  }, []);

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