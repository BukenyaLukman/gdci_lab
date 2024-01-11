import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Home, People, Publications, Research,News } from './components'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'



const router = createBrowserRouter([
   {
    path: "/", 
    element: <Home/>
   },
   {
    path: "/people", 
    element: <People/>
   },
   {
    path: "/research", 
    element: <Research/>
   },
   {
    path: "/publications",
    element: <Publications/>
   },
   {
      path: "/news",
      element: <News/>
   }
])

function App() {
  

  return (
      
          <div className='relative z-0 bg-primary overflow-hidden'>
             <div className='bg-hero-pattern bg-cover  md:bg-hero-pattern bg-no-repeat bg-center'>
                <RouterProvider router={router}/>
             </div>
          </div>
      
  )
}

export default App
