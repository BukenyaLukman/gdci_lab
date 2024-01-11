import React from 'react'
import backgroundImage from '../assets/cocis_block_b.jpg'

const Contact = () => {
  return (
    <div className='relative w-full h-[400px] z-10 flex flex-col items-center bg-white'>
        <div className='absolute flex flex-col items-center justify-center lg:w-1/2 xs:w-full h-full bg-black bg-opacity-80'>
            <h1 className='text-white text-5xl font-bold mb-4 xs:text-xl'>Contact Us</h1>
            <div className='line-down'>
                <div className='liner'></div>
            </div>
            <p className='text-[20px] font-medium text-white mt-10 pl-10 xs:text-[20px]'>
                We are located at the College of Computing and Information Sciences, Makerere University.
                <ul>
                    <li>Block B, Level 3.</li>
                    <li>Plot 56, Pool Road.</li>
                </ul>
            </p>
        </div>
        <img src={backgroundImage} alt='background' className='lg:w-1/2 xs:w-full h-full object-cover'/>
    </div>
  )
}

export default Contact