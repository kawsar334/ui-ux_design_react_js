import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className='w-full h-max '>

         <div className='bg-dark px-10 py-10  border-t flex justify-between items-start md:items-center gap-5 border-b flex-col md:flex-row  text-white '>
              <img src={logo} alt="Logo" className=" w-[150px] h-[35px]" />
                <div className='flex justify-center items-start gap-3  flex-col md:flex-row md:items-center'>
                  <a href="OurSolutions " className='px-3 border-r hover:underline transition-all duration-300'>Our Solutions </a>
                  <a href="OurSolutions" className='hover:underline transition-all duration-300'>AnyCaase </a>
                  <a href="OurSolutions" className='hover:underline transition-all duration-300'>AnBCaase </a>
                  <a href="OurSolutions" className='hover:underline transition-all duration-300'>AnyPaase </a>

                </div>

         </div>

          <div className="flex  justify-between  px-10 text-blue items-center h-24 bg-[#00152d] flex-col md:flex-row py-5 ">
              <p className="ml-4">©2023 All rights reserved. Any Technology Pte Ltd. </p>

              <a href="">Privacy Policy </a>
        </div>
    </div>
  )
}

export default Footer