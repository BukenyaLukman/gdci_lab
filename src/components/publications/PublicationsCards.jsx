import React from 'react'
import Fade from 'react-reveal/Fade';

const PublicationsCards = () => {
  return (
    // <section className="w-full lg:flex h-full items-center lg:flex-col bg-white">
    //     <Fade bottom className='mt-5'>
    //         <div className="w-3/4 h-1 rounded-lg bg-black mt-5">
    //         </div>
    //     </Fade>
    //     <div className='flex w-full  h-auto lg:h-screen flex-col items-center mt-5 lg:px-20 px-5'>
    //         <Fade bottom>
    //             <div className='w-full h-auto border-solid border-2 border-violet-400 text-black hover:cursor-pointer items-start flex flex-col lg:flex lg:flex-row shadow-2xl mt-5 py-2'>
    //                 <div className='flex flex-col items-start w-full h-full px-5'>
    //                     <h1 className='text-3xl font-bold'>Ovarian Cancer using Vision Transformers</h1>
    //                     <p className='text-[20px] font-medium items-center text-black pb-10 mb-5'>
    //                         "Prof Tonny Oyanna and Dr Steven Odongo Eyobu" Detecting Ovarian Cancer using Vision Transformers
    //                     </p>
    //                 </div>
    //             </div>

          
    //         </Fade>
    //     </div>
    // </section>
    <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">explore our <br/> recent <span class="text-blue-500">Publications</span></h1>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Ovarian Cancer Prediction</h1>

                <p class="text-gray-500 dark:text-gray-300">
                Ovarian Cancer Prediction employs data analytics to assess risk factors, aiding early detection and personalized interventions for improved outcomes.
                </p>

                <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span class="mx-1">read more</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Maternal Healthcare</h1>

                <p class="text-gray-500 dark:text-gray-300">
                Maternal Healthcare ensures mothers' well-being through comprehensive services, from prenatal to postnatal care, promoting healthy pregnancies and childbirth.
                </p>

                <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span class="mx-1">read more</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Nutritious or Delicious</h1>

                <p class="text-gray-500 dark:text-gray-300">
                Balancing nutrition and taste is crucial for a wholesome diet. Prioritizing both ensures enjoyable meals while meeting essential nutrient requirements for well-rounded health.
                </p>

                <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span class="mx-1">read more</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    </div>
</section>
  )
}

export default PublicationsCards