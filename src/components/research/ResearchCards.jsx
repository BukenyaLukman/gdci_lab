import React from 'react'
import ResearchImage from '../../assets/header.png'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const ResearchCards = () => {
  return (
    <section className="w-full flex h-full items-center flex-col bg-white">
        <Fade bottom className='mt-5'>
            <div className="w-3/4 h-1 rounded-lg bg-black mt-5">
            </div>
        </Fade>
        <div className='flex w-full h-screen flex-col items-center mt-5 px-5'>
            <Fade bottom>
                <div className='w-full h-auto border-solid border-2 border-violet-400 text-black hover:cursor-pointer items-start flex flex-col lg:flex lg:flex-row shadow-2xl mt-2'>
                    <img src={ResearchImage} alt='research' className='w-full h-auto lg:w-[300px] lg:h-full object-cover'/>
                    <div className='flex flex-col items-start w-full h-full px-5'>
                        <h1 className='text-3xl font-bold'>Ovarian Cancer using Vision Transformers</h1>
                        <p className='text-[17px] font-medium items-center text-black'>
                            We are working on a project to detect Ovarian Cancer using Vision Transformers.
                            The UBC Ovarian cancer is a kaggle challenge were UBC Ovarian Cancer subtypE 
                            clAssification and outlier detectioN (UBC-OCEAN) competition is to classify ovarian cancer subtypes. 
                            You will build a model trained on the world's most extensive ovarian cancer 
                            dataset of histopathology images obtained from more than 20 medical centers.
                        </p>
                    </div>
                </div>
                <div className='w-full h-auto border-solid border-2 border-violet-400 text-black hover:cursor-pointer items-start flex flex-col lg:flex lg:flex-row shadow-2xl mt-2'>
                    <img src={ResearchImage} alt='research' className='w-full h-auto lg:w-[300px] lg:h-full object-cover'/>
                    <div className='flex flex-col items-start w-full h-full px-5'>
                        <h1 className='text-3xl font-bold'>Ovarian Cancer using Vision Transformers</h1>
                        <p className='text-[17px] font-medium items-center text-black'>
                            We are working on a project to detect Ovarian Cancer using Vision Transformers.
                            The UBC Ovarian cancer is a kaggle challenge were UBC Ovarian Cancer subtypE 
                            clAssification and outlier detectioN (UBC-OCEAN) competition is to classify ovarian cancer subtypes. 
                            You will build a model trained on the world's most extensive ovarian cancer 
                            dataset of histopathology images obtained from more than 20 medical centers.
                        </p>
                    </div>
                </div>
            </Fade>
        </div>
    </section>
  )
}

export default ResearchCards