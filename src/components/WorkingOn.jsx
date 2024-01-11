import React from 'react'

const WorkingOn = () => {
  return (
    <section className='relative w-full h-3/4 mx-auto bg-white bg-opacity-30'>
            <div className='relative flex items-center justify-center flex-col'>
                <h1 className='text-black text-5xl font-bold xs:text-center'>Interested in Working with us?</h1>
                <div className='line-down mt-6'>
                    <div className='liner'></div>
                </div>
            </div>
            <div className='relative px-10 flex items-center justify-center flex-col bg-white bg-opacity-50 mt-8'>
                <p className='text-xl font-medium'>
                   The Geospatial Data and Computational Intelligence Lab focuses on 
                   using deep and machine learning to solve problems in health especially in low
                   resource settings. 
                </p>
                <p className='text-xl font-medium'>
                    We are also part of the Internet of Things Lab at Makerere University.
                    We use these two revolutionary technologies to solve problems in health and other areas that 
                    impact human life. We are open to collaborations with all researchers and scientific communties willing
                    to push the boundaries. We are always looking for new members to join our team.
                    We are looking for students who are interested in working on projects that
                   involve the use of machine learning and deep learning to solve problems in health.
                </p>
                <p>
                    <ul>
                        <li className='text-xl font-bold'> A Brief description of what you interested in working on and why</li>
                        <li>Attach your CV and transcript</li>
                        <li>Indicate position level( undegrad, Grad, post doc) </li>
                        <li>For undergrad and grad level positions, you must be enrolled or admitted to Makerere University.</li>
                    </ul>
                </p>

            </div>
    </section>
  )
}

export default WorkingOn