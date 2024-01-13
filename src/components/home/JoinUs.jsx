import React from 'react'

const JoinUs = () => {
  return (
    // <section className='relative w-full h-3/4 mx-auto bg-white bg-opacity-30'>
    //         <div className='relative flex items-center justify-center flex-col'>
    //             <h1 className='text-black text-5xl font-bold xs:text-center'>Interested in Working with us?</h1>
    //             <div className='line-down mt-6'>
    //                 <div className='liner'></div>
    //             </div>
    //         </div>
         
    //         <div className='relative px-10 flex items-center justify-center flex-col bg-white bg-opacity-50 mt-8'>
    //             <br />
    //             <p className='text-m font-medium'>
    //                The Geospatial Data and Computational Intelligence Lab focuses on 
    //                using deep and machine learning to solve problems in health especially in low
    //                resource settings. 
    //             </p>
    //             <p className='text-m font-medium'>
    //                 We are also part of the Internet of Things Lab at Makerere University.
    //                 We use these two revolutionary technologies to solve problems in health and other areas that 
    //                 impact human life. We are open to collaborations with all researchers and scientific communties willing
    //                 to push the boundaries. We are always looking for new members to join our team.
    //                 We are looking for students who are interested in working on projects that
    //                involve the use of machine learning and deep learning to solve problems in health.
    //             </p>
    //             <p>
    //                 <ul>
    //                     <li className='text-xl font-bold'>A Brief description of what you are interested in working on and why</li>
    //                     <br />
    //                     <li>Attach your CV and transcript.</li>
    //                     <li>Indicate position level( undegrad, Grad, post doc) </li>
    //                     <li>For undergrad and grad level positions, you must be enrolled or admitted to Makerere University.</li>
    //                 </ul>
    //             </p>
    //             <br />
    //         </div>
    // </section>

    <section class="bg-white dark:bg-gray-900">
  

    <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
                <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                A Brief description of what you are interested in working on and why
                </h1>

                <div class="mt-8 space-y-5">
                    <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <span class="mx-2">Attach your CV and transcript.</span>
                    </p>

                    <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <span class="mx-2">Indicate position level( undegrad, Grad, post doc)</span>
                    </p>

                    <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <span class="mx-2">For undergrad and grad level positions, you must be enrolled or admitted to Makerere University</span>
                    </p>
                </div>
            </div>

            <div class="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                <form class="flex flex-col lg:flex-row">
                    <input type="email" placeholder="Enter your email address" class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />

                    <button type="button" class="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                        Join Us
                    </button>
                </form>
            </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="glasses photo"/>
        </div>
    </div>
</section>
  )
}

export default JoinUs