import React from 'react'
import { fadeIn } from '../../variants'; import { motion } from 'framer-motion';

function Categories({
    img,
    title,
    desc,
}
) {
    return (
        <div className='mx-5 sm:mx-20 lg:mx-32 my-12 flex flex-col sm:flex-row-reverse justify-center items-center bg-gradient-to-tr from-red-50 to-red-200 shadow-2xl rounded-lg overflow-hidden'>

            <motion.img src={img}
                alt="Lip Care Image"
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className='w-full sm:w-1/2 lg:w-1/3 object-cover rounded-l-lg border-2 border-gray-300 shadow-inner' />

            <div className='p-5 sm:p-10 text-left'>
                <motion.h1
                    variants={fadeIn("right", 1.8)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                    className='font-extrabold bg-gradient-to-r from-gray-700 to-red-600 text-transparent bg-clip-text font-cinzel text-3xl sm:text-4xl leading-tight'>
                    {title}
                </motion.h1>

                <motion.p
                    variants={fadeIn("right", 2.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                    className='font-medium text-gray-600 font-playfair text-md sm:text-lg mt-4'>
                    {desc}
                </motion.p>

                <motion.button
                    variants={fadeIn("left", 2.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                    className='mt-6 bg-gradient-to-tr from-gray-400 to-red-400 text-gray-800 font-semibold px-6 py-2 rounded-full shadow-md shadow-red-800 hover:shadow-lg hover:shadow-gray-500 hover:bg-gradient-to-r active:transform active:scale-90 transition-all'>
                    <a href="#shop">Shop Now</a>
                </motion.button>
            </div>

        </div>


    )
}

export default Categories