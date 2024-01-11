import React from 'react'
import backgroundImage from '../assets/people1.jpg'

const ResearchBanner = () => {
  return (
    <section className='relative w-full h-[600px] z-10 flex flex-col items-center bg-white'>
        <div className='absolute flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-80'>
            <h1 className='text-white text-7xl font-bold'>Research</h1>
            <div className='line-down mt-5'>
                <div className='liner'></div>
            </div>
            <div className="flex flex-row w-3/4 items-center justify-center mt-5 bg-black bg-opacity-50">
                <p className='text-[20px] font-medium items-center text-white mt-5 pl-10'>
                    Detecting Breast cancer in Ugandan Women. Uganda Cancer Institute and the University of Chicago.
                </p>
            </div>
        </div>
        <img src={backgroundImage} alt='background' className='w-full h-full object-cover'/>
    </section>
  )
}

export default ResearchBanner