import React from 'react'
import Fade from 'react-reveal/Fade';
import danielImage from '../../assets/people/daniel.jpeg'
import lukmanImage from '../../assets/people/luqman.jpeg'
import stevenImage from '../../assets/people/steven.jpeg'
import tonnyImage from '../../assets/people/tonny.jpg'
import brianImage from '../../assets/people/brian.jpg'
import stellaImage from '../../assets/people/stella.png'

const PeopleCards = () => {
  return (
      <section className="w-full flex h-full items-center flex-col bg-white pb-5">
            <Fade bottom className='mt-5'>
                <h2 className="items-center leading-9 font-bold text-4xl">Current</h2>
            </Fade>
            
            <div className='flex flex-row flex-wrap justify-center items-center gap-10 mt-10'>
                <Fade bottom>
                    <div className='flex flex-col items-center w-[300px] h-[400px] bg-gray-200'>
                        <img src={tonnyImage} alt="person" className='w-full h-3/4 object-cover rounded'/>
                        <h3 className='text-[20px] font-bold mt-5'>Professor Tonny Oyanna</h3>
                        <p className='text-[18px] font-medium'>Lab Director</p>
                    </div>
                    <div className='flex flex-col items-center w-[300px] h-[400px] bg-gray-200'>
                        <img src={stevenImage} alt="person" className='w-full h-3/4 object-cover rounded'/>
                        <h3 className='text-[20px] font-bold mt-5'>Dr Steven Odongo Eyobu</h3>
                        <p className='text-[18px] font-medium'>Assistant Lab Director</p>
                    </div>
                    <div className='flex flex-col items-center w-[300px] h-[400px] bg-gray-200'>
                        <img src={lukmanImage} alt="person" className='w-full h-3/4 object-cover rounded'/>
                        <h3 className='text-[20px] font-bold mt-5'>Bukenya Lukman</h3>
                        <p className='text-[18px] font-medium'>Graduate Researcher</p>
                    </div>
                    <div className='flex flex-col items-center w-[300px] h-[400px] bg-gray-200'>
                        <img src={danielImage} alt="person" className='w-full h-3/4 object-cover rounded'/>
                        <h3 className='text-[20px] font-bold mt-5'>Daniel Ongom</h3>
                        <p className='text-[18px] font-medium'>Graduate Student and Engineer</p>
                    </div>
                    <div className='flex flex-col items-center w-[300px] h-[400px] bg-gray-200'>
                        <img src={stellaImage} alt="person" className='w-full h-3/4 object-cover rounded'/>
                        <h3 className='text-[20px] font-bold mt-5'>Namulindwa Stellah</h3>
                        <p className='text-[18px] font-medium'>Visiting PhD Student</p>
                    </div>
                    <div className='flex flex-col items-center w-[300px] h-[400px] bg-gray-200'>
                        <img src={brianImage} alt="person" className='w-full h-3/4 object-cover rounded'/>
                        <h3 className='text-[20px] font-bold mt-5'>Brian Angoda</h3>
                        <p className='text-[18px] font-medium mx-5'>Undergraduate Student and Software Engineer</p>
                    </div>
                </Fade>
            </div>
      </section>
  )
}

export default PeopleCards