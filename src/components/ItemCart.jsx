import React from 'react'

const ItemCart = ({ items }) => {
  return (
      <div className='flex justify-center items-center w-[90%] mx-auto  flex-wrap py-10 ' data-aos="fade-up">
          {
              items.map((item) => (
                  <div className='w-full h-[300px] md:w-[31%] p-4 bg-[#f8fcff] mx-auto mb-10 flex flex-col gap-5 rounded cursor-pointer  '>
                      <img src={item.img} alt="" className='w-[50px] h-[50px] rounded-full object-cover' />
                      <h2 className='text-2xl capitalize font-semibold'>{item.title}</h2>
                      <p className='text-sm'>{item.description}</p>
                  </div>
              ))
          }
      </div>
  )
}

export default ItemCart