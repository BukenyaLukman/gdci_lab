import React from 'react'
import backgroundImage from '../assets/background_two.jpg'

const PublicationsBanner = () => {
  return (
    <section className="relative w-full h-[600px] z-10 flex flex-col items-center bg-white">
        <div className='absolute flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-80'>
            <h1 className='text-white text-7xl font-bold'>Publications</h1>
            <div className='line-down mt-5'>
                <div className='liner'></div>
            </div>
            <div className="flex flex-row w-3/4 items-center justify-center mt-5 bg-black bg-opacity-50">
                <p className='text-[20px] font-medium items-center text-white mt-5 pl-10'>
                    We want to make sense of the world around us. We want to use data to make decisions that impact human life.
                </p>
            </div>
        </div>
        <img src={backgroundImage} alt='background' className='w-full h-full object-cover'/>
    </section>
  )
}

export default PublicationsBanner