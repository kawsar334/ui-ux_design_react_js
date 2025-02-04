import React, { useState } from 'react'
import logo from "../assets/logo.png"
import mee from "../assets/mee.png"

import { NavLink, useLocation } from 'react-router-dom';


const Navbar = () => {

  const location = useLocation().pathname
  

    const [open,setOpen] =useState(false);
    const handleToggle = () => {
        setOpen(!open);
    }



  return (
      <div className={`px-5  fixed w-full  top-0 left-0    bg-blue firefox:bg-opacity-0 backdrop-blur-[2px]  bg-opacity-30  py-3 flex justify-between items-center  text-white z-50 `}>
      <div className="w-[90%] mx-auto flex justify-between items-center  relative ">
              <NavLink to="/" > 
                <img className="w-[100px] h-[25px] " src={logo} alt="Logo" />
              </NavLink>
              <ul className={`flex justify-start items-start md:items-center     md:gap-5 flex-col md:flex-row absolute top-[40px]   left-[-30px] transform ${open ? "translate-x-[0%] md:translate-x-[100%]" : "translate-x-[-100%]  md:translate-x-[10%]"} transition-all duration-800   md:static  w-[100vw] md:w-[50%]  bg-blue md:bg-transparent p-5 md:p-2  h-screen md:h-max`}>
                  <li className="dropdown dropdown-bottom transition-all duration-500  hover:border-b ">
                      <div tabIndex={0} role="button" className="w-max px-4 py-1 rounded space-x-2 "><span>Solutions</span> <i class="fa-solid fa-angle-down"></i></div>
                      <ul tabIndex={0} className="dropdown-content menu  bg-base-100 text-blue rounded- z-[1] w-52 p-2 shadow">
                          <li><NavLink to='/anycaas'>Anycaass </NavLink></li>
                          <li><NavLink to='/anybaas'>AnyBaass</NavLink></li>
                          <li><NavLink to='/anypaas'>Anypass</NavLink></li>

                      </ul>
                  </li>
                  <li className='px-4 md:px-2 py-2 transition-all duration-500  hover:border-b  '><NavLink to="/services" >Services</NavLink></li>
                  <li className='px-4 md:px-2 py-2 transition-all duration-500  hover:border-b  '><NavLink to="/about"  >About Us</NavLink></li>
          <li className='px-4 md:px-2 py-2 block my-2 w-max border rounded text-center  md:hidden bg-[#f38754] '>
                    <NavLink to='/contact' className=' rounded'>Contact us</NavLink>
                  </li>
                  <li className="dropdown dropdown-bottom ">
                      <div tabIndex={0} role="button" className="border px-2 py-2 flex justify-center items-center  gap-2 rounded-full ">
                        <i class="fa-solid fa-globe"></i>
                          <span>Eng</span> 
                     <i class="fa-solid fa-angle-down"></i>
                      </div>
                      <ul tabIndex={0} className="dropdown-content menu bg-base-100 mt-1 rounded  z-[1] w-52 p-2 shadow text-blue">
                          <li><a>Arabic </a></li>
                          <li><a>Bengali</a></li>
                      </ul>
                  </li>
              </ul>
        <NavLink to="/contact" className='border px-2 bg-[#f38754] hover:bg-white hover:text-[#f38754]  transition-all duration-500  rounded hidden md:flex py-2  cursor-pointer  ' >Contact us</NavLink>

        <a href="https://kawsarfiroz2.netlify.app/" target='_blank' className=' cursor-pointer' >
          <img src={mee} alt="" className='w-10 h-10 rounded-full border-2 bg-[#f38754]' />
        </a>
      </div>
          <button className='text-2xl md:hidden' onClick={handleToggle}>
         {!open? <i className="fa fa-bars"></i>:
              <i className="fa fa-xmark text-3xl"></i>}
    </button>

    </div>
  )
}

export default Navbar