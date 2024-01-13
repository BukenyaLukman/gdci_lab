// src/components/ResearchContent.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ResearchImage from '../../assets/header.png'
import Fade from 'react-reveal/Fade';

const ResearchContent = () => {
  const [researchList, setResearchList] = useState([
    {
      id: 1,
      title: "Ovarian Cancer using Vision Transformers",
      image: 'news1.jpg',
      description: "We are working on a project to detect Ovarian Cancer using Vision Transformers. The UBC Ovarian cancer is a kaggle challenge were UBC Ovarian Cancer subtypE clAssification and outlier detectioN (UBC-OCEAN) competition is to classify ovarian cancer subtypes. You will build a model trained on the world's most extensive ovarian cancer dataset of histopathology images obtained from more than 20 medical centers.",
    },
    {
      id: 2,
      title: 'MOTHER',
      image: 'news2.jpg',
      description: 'A mobile application that contains maternal healthcare information in form of questions and answers.',
    },
    // Add more news items as needed
  ]);

  return (
    <section className="w-full flex h-full items-center flex-col bg-white">
    <Fade bottom className='mt-5'>
        <div className="w-3/4 h-1 rounded-lg bg-black mt-5">
        </div>
    </Fade>
    <div className='flex w-full h-screen flex-col items-center mt-5 px-5'>
        <Fade bottom>
        {researchList.map((research) => (
             <div key={research.id} className='w-full h-auto border-solid border-2 border-violet-400 text-black hover:cursor-pointer items-start flex flex-col lg:flex lg:flex-row shadow-2xl mt-2'>
             <img src={ResearchImage} alt='research' className='w-full h-auto lg:w-[300px] lg:h-full object-cover'/>
             <div className='flex flex-col items-start w-full h-full px-5'>
             <Link to={{ pathname: `/detail/${research.id}`, state: { research } }}>
                <h1 className='text-3xl font-bold'>{research.title}</h1>
             </Link>
                 <p className='text-[17px] font-medium items-center text-black'>
                 {research.description}
                 </p>
             </div>
         </div>

         
        ))}
           
           
        </Fade>
    </div>
</section>


    
    
  );
};

export default ResearchContent;
