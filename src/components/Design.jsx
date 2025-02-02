import React from 'react'

const Design = ({ title, desc, items }) => {

   
  return (
    <div className='w-[90%] md:w-[80%] mx-auto my-10 '>
        <div className='w-full mx-auto text-center'>
              <p className='uppercase font-semibold text-[20px] text-titlecolor'>{title}</p>
              <h1 className='capitalize text-5xl font-semibold'>{desc}</h1>
        </div>

        <div className='flex justify-center items-center gap-5  my-10'>
            {items.map(item => (
                <div key={item.id} className='flex flex-col gap-10 shadow  md:gap-10 w-full md:w-[50%] hover:border transition-all duration-700 cursor-pointer p-7 rounded'>
                    <h2 className='text-3xl font-semibold'>{item.title}</h2>
                    <img src={item.img} alt={item.title} className='w-[170px] cursor-pointer h-10' />
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Design