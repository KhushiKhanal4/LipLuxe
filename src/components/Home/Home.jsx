import React from 'react'
import HeroSection from '../Hero/HeroSection' 
import WhyLipLuxe from '../About/WhyLipLuxe'

function Home() {
    return (
        <div>
            <HeroSection />
            <hr className='font-bold' />
            <WhyLipLuxe />
        </div>
    )
}

export default Home