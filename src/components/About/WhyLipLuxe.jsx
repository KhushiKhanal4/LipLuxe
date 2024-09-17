import React from 'react'
import Card from './Card'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

function WhyLipLuxe() {

  return (
    <>
      
           <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="px-6 sm:px-6 lg:px-8 bg-[#f7f7f7]">
        <h1 className="text-center  text-2xl font-extrabold font-cinzel tracking-wider text-gray-800 my-10 underline underline-offset-1"
        >
          Why LipLuxe ?
        </h1>
      </motion.div>

      <div

        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-7 sm:space-x-9 sm:pl-6 lg:mr-11 xl:mr-0 xl:space-x-0 xl:ml-40 mL:pl-24 mM:pl-16 bg-[#f7f7f7]">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='sm:pl-10 lg:pl-8 xl:pl-0'>
          <Card
            title="Premium Quality Ingredients"
            desc="At Lip Luxe, we use only the finest, skin-friendly ingredients to ensure our lipsticks not only look stunning but also nourish your lips. Our formulas are enriched with natural oils and butters, providing a smooth application while being cruelty-free and free from harmful chemicals."
            url=" About\ingredient.jpg"
            png=" About\avocado-removebg-preview.png" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}>
        <Card
          title="Long-lasting Formula"
          desc="Our lipsticks are crafted for long-lasting wear, offering a rich color payoff that stays vibrant and true throughout the day. Whether you're attending a meeting or enjoying a night out, Lip Luxe ensures your look remains flawless and fresh."
          url=" About\waterproof.jpg"
          png=" About\timer.png" />
          </motion.div>

          <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}>
        <Card
          title="Vibrant & Diverse Shades"
          desc="Discover a spectrum of shades that cater to every skin tone and occasion. From bold reds to subtle nudes, our collection ensures you find the perfect hue that enhances your natural beauty and complements any look."
          url=" About\colors.jpg"
          png=" About\shades.png" />
          </motion.div>

          <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}>
        <Card
          title="Hydration & Comfort"
          desc="Lip Luxe lipsticks are designed to keep your lips hydrated and comfortable all day long. Our blend of moisturizing ingredients prevents dryness, providing a creamy texture that feels light and luxurious on your lips."
          url=" About\soft1.jpg"
          png=" About\drops.png" />
          </motion.div>
          <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}>
        <Card
          title="Luxury Packaging"
          desc="Experience elegance with every application. Our lipsticks come in beautifully designed packaging that reflects our commitment to luxury and sophistication. The sleek, stylish cases are perfect for on-the-go glamour."
          url=" About\pack.png"
          png=" About\slim.png" />
          </motion.div>
          <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}>
        <Card
          title="Eco-friendly Initiatives"
          desc="At Lip Luxe, we are committed to sustainability. Our packaging is made from recyclable materials, and we are constantly working to reduce our environmental impact. Enjoy your beauty routine knowing you’re making a responsible choice."
          url=" About\green.jpg"
          png=" About\images-Photoroom.png" />
          </motion.div>
      </div>
    </>
  )
}

export default WhyLipLuxe
