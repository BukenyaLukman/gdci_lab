import React from 'react'
import Fade from 'react-reveal/Fade';

const PublicationsCards = () => {
  return (
    <section className="w-full lg:flex h-full items-center lg:flex-col bg-white">
        <Fade bottom className='mt-5'>
            <div className="w-3/4 h-1 rounded-lg bg-black mt-5">
            </div>
        </Fade>
        <div className='flex w-full  h-auto lg:h-screen flex-col items-center mt-5 lg:px-20 px-5'>
            <Fade bottom>
                <div className='w-full h-auto border-solid border-2 border-violet-400 text-black hover:cursor-pointer items-start flex flex-col lg:flex lg:flex-row shadow-2xl mt-5 py-2'>
                    <div className='flex flex-col items-start w-full h-full px-5'>
                        <h1 className='text-3xl font-bold'>Ovarian Cancer using Vision Transformers</h1>
                        <p className='text-[20px] font-medium items-center text-black pb-10 mb-5'>
                            "Prof Tonny Oyanna and Dr Steven Odongo Eyobu" Detecting Ovarian Cancer using Vision Transformers
                        </p>
                    </div>
                </div>

                <div className='w-full h-auto border-solid border-2 border-violet-400 text-black hover:cursor-pointer items-start flex flex-col lg:flex lg:flex-row shadow-2xl mt-5 py-2'>
                    <div className='flex flex-col items-start w-full h-full px-5'>
                        <h1 className='text-3xl font-bold'>Ovarian Cancer using Vision Transformers</h1>
                        <p className='text-[20px] font-medium items-center text-black pb-10 mb-5'>
                            "Prof Tonny Oyanna and Dr Steven Odongo Eyobu" Detecting Ovarian Cancer using Vision Transformers
                        </p>
                    </div>
                </div>

                <div className='w-full h-auto border-solid border-2 border-violet-400 text-black hover:cursor-pointer items-start flex flex-col lg:flex lg:flex-row shadow-2xl mt-5 py-2'>
                    <div className='flex flex-col items-start w-full h-full px-5'>
                        <h1 className='text-3xl font-bold'>Ovarian Cancer using Vision Transformers</h1>
                        <p className='text-[20px] font-medium items-center text-black pb-10 mb-5'>
                            "Prof Tonny Oyanna and Dr Steven Odongo Eyobu" Detecting Ovarian Cancer using Vision Transformers
                        </p>
                    </div>
                </div>
            </Fade>
        </div>
    </section>
  )
}

export default PublicationsCards