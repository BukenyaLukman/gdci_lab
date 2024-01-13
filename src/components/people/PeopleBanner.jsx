import React from 'react'
import backgroundImage from '../../assets/people2.jpg'

const PeopleBanner = () => {
  return (
    <section className='relative w-full h-[600px] z-10 flex flex-col items-center bg-white'>
        <div className='absolute flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-80'>
            <h1 className='text-white text-7xl font-bold'>People</h1>
            <div className='line-down mt-5'>
                <div className='liner'></div>
            </div>
            <div className="flex flex-row w-3/4 items-center justify-center mt-5 bg-black bg-opacity-50">
                <p className='text-[20px] font-medium items-center text-white mt-5 pl-10'>
                    We are a team of University professors, graduate and post graduate students working on research and projects
                    that can impact human life.
                </p>
            </div>
        </div>
        <img src={backgroundImage} alt='background' className='w-full h-full object-cover'/>
    </section>
  )
}

export default PeopleBanner