import React from 'react'

const SecondNav = () => {
  return (
      <div className='fixed bottom-[20px] left-[50%]  bg-black text-white w-[400px] p-2 rounded z-20 transform translate-x-[-50%]'>
        <div  className='flex justify-around  items-center gap-2'>

          <a href="#home" title="Home" className='text-2xl cursor-pointer ' >
              <i className="fas fa-home"></i>
          </a>
          <a href="#contact" title="Contact" className='text-2xl cursor-pointer '>
              <i className="fas fa-envelope"></i>
          </a>

          <a href="#projects" title="Projects" className='text-2xl cursor-pointer '>
              <i className="fas fa-briefcase"></i>
          </a>
          <a href="#services" title="Services" className='text-2xl cursor-pointer '>
              <i className="fas fa-cogs"></i>
          </a>
          <a href="#about" title="About" className='text-2xl cursor-pointer '>
              <i className="fas fa-user"></i>
          </a>
        </div>
    </div>
  )
}

export default SecondNav