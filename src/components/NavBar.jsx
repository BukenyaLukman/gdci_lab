import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import {logo, menu, close} from '../assets'
import { navLinks } from "../constants";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

  return (
    <nav className={`
        ${styles.paddingX} w-full flex py-5 items-center fixed top-0 z-20 bg-primary
    `}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
            <Link to="/" 
            className='flex items-center gap-2'
            onClick={() => {
                setActive("")
                window.scrollTo(0, 0)
            }}
            >
                <img src={logo} className="w-12 h-12 object-contain" alt="logo"/>
                <p className='text-white text-[18px] font-bold cursor-pointer sm:block hidden'>
                    Geospatial Data and Computational Intelligence Lab
                </p>
            </Link>
            <ul className="list-none hidden sm:flex flex-row gap-10">

                <li className={`hover:text-white text-[18px] font-medium cursor-pointer
                ${active === "Home" ? "text-white" : "text-white/80"}
                `} onClick={() => setActive("Home")}>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li className={`hover:text-white text-[18px] font-medium cursor-pointer
                ${active === "People" ? "text-white" : "text-white/80"}
                `} onClick={() => setActive("People")}>
                    <NavLink to="/people" >People</NavLink>
                </li>
                <li className={`hover:text-white text-[18px] font-medium cursor-pointer
                ${active === "Research" ? "text-white" : "text-white/80"}
                `} onClick={() => setActive("Research")}>
                    <NavLink to="/research" >Research</NavLink>
                </li>
                <li className={`hover:text-white text-[18px] font-medium cursor-pointer
                ${active === "Publications" ? "text-white" : "text-white/80"}
                `} onClick={() => setActive("Publications")}>
                    <NavLink to="/publications" >Publications</NavLink>
                </li>
                <li className={`hover:text-white text-[18px] font-medium cursor-pointer
                ${active === "News" ? "text-white" : "text-white/80"}
                `} onClick={() => setActive("News")}>
                    <NavLink to="/news" >News</NavLink>
                </li>
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? close : menu} 
                    className="
                    w-[28px] h-[28px] 
                    object-contain cursor-pointer
                    " alt="menu"
                    onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient 
                    absolute top-20 right-0 
                    mx-4 my-2 min-w-[150px]
                    z-10 rounded-xl
                    `}>
                        <ul className="list-none flex 
                        justify-end 
                        items-start
                        flex-col gap-4">
                            <li className={`hover:text-white text-[18px] font-medium cursor-pointer
                                ${active === "Home" ? "text-white" : "text-white/80"}
                                `} onClick={() => setActive("Home")}>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className={`hover:text-white text-[18px] font-medium cursor-pointer
                                ${active === "People" ? "text-white" : "text-white/80"}
                                `} onClick={() => setActive("People")}>
                                    <NavLink to="/people">People</NavLink>
                                </li>
                                <li className={`hover:text-white text-[18px] font-medium cursor-pointer
                                ${active === "Research" ? "text-white" : "text-white/80"}
                                `} onClick={() => setActive("Research")}>
                                    <NavLink to="/research">Research</NavLink>
                                </li>
                                <li className={`hover:text-white text-[18px] font-medium cursor-pointer
                                ${active === "Publications" ? "text-white" : "text-white/80"}
                                `} onClick={() => setActive("Publications")}>
                                    <NavLink to="/publications">Publications</NavLink>
                                </li>
                                <li className={`hover:text-white text-[18px] font-medium cursor-pointer
                                ${active === "News" ? "text-white" : "text-white/80"}
                                `} onClick={() => setActive("News")}>
                                    <NavLink to="/news">News</NavLink>
                                </li>
                            
                        </ul>
                    </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar