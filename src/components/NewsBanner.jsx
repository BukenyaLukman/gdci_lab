import {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {RxDotFilled } from 'react-icons/rx'

const NewsBanner = () => {
    const slides = [
        {
          url: "https://images.unsplash.com/photo-1697580874568-3f50a0fb7057?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          url: "https://images.unsplash.com/photo-1697872555686-9cb339202dad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          url: "https://images.unsplash.com/photo-1698174407796-165a2994ab99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          url: "https://images.unsplash.com/photo-1698046473760-4480f6b8291d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D"
        },
        {
          url: "https://images.unsplash.com/photo-1698222491864-6c174537885f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D"
        },
        {
          url: "https://plus.unsplash.com/premium_photo-1675537843200-78c1a0ea1736?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D"
        }
      ]

      const [currentIndex, setCurrentIndex] = useState(0)

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      }
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;

        setCurrentIndex(newIndex);
      }

      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      }

  return (
    <div className='max-w-[1400px] h-[500px] w-full m-auto py-16 px-4 relative group'>
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>

        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 
        translate-y-[-50%] left-5 
        text-2xl rounded-full p-2
         bg-black/20 text-white  cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        <div className='hidden group-hover:block  absolute top-[50%] translate-x-0 
        translate-y-[-50%] right-5 
        text-2xl rounded-full p-2
         bg-black/20 text-white  cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
        <div className='flex top-4 justify-center  py-2'>
            {slides.map((slides, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer '>
                    <RxDotFilled/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NewsBanner


// import {useState, useEffect} from 'react'
// import { ChevronLeft, ChevronRight } from 'react-feather'


// const NewsBanner = ({children: slides, autoSlide =false, autoSlideInterval = 3000 }) => {
//     const [curr, setCurr] = useState(0);
//     const prev = () => setCurr(curr => curr === 0 ? slides.length - 1 : curr - 1)
//     const next = () => setCurr(curr => curr === slides.length - 1 ? 0 : curr + 1)

//     useEffect(() => {
//         if(!autoSlide) return
//         const slideInterval = setInterval(next, autoSlideInterval)
//         return () => clearInterval(slideInterval)
//     }, [])
//   return (
//     <div className='relative overflow-hidden w-full h-[500px] z-10 flex items-center px-4 py-34'>
//         <div className='flex absolute transition-transform items-center justify-center w-full h-full 
//         ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)`}}>
//             {slides}
//         </div>
//         <div className='absolute inset-0 flex items-center justify-between p-4'>
//             <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
//                 <ChevronLeft size={40}/>
//             </button>
//             <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
//                 <ChevronRight size={40}/>
//             </button>
//         </div>

//         <div className='absolute bottom-4 right-0 left-0'>
//             <div className='flex items-center justify-center gap-2'>
//                 {slides.map((_, i) => {
//                     <div className={`
//                         transition-all w-3 h-3 bg-black rounded-full
//                         ${curr=== i ? "p-2" : "bg-opacity-50"}
//                     `}/>
//                 })}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default NewsBanner