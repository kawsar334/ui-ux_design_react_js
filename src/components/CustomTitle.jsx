import React from 'react'

const CustomTitle = ({title, subtitle}) => {
  return (
    <div className='w-[90%] md:w-[70%] mx-auto  text-center' data-aos="zoom-in">

          {title && <h1 className='text-xl font-semibold tracking-tight text-center text-titlecolor'>{title}</h1>}
        {subtitle &&<h2 className='text-4xl md:text-6xl  text-center my-3'>{subtitle}</h2>}

    </div>
  )
}

export default CustomTitle