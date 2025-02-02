import React from 'react'

const Cart = ({items}) => {

   
  return (

      <div className='flex justify-center items-center w-[90%] mx-auto  flex-wrap py-[70px] shape1  bg-gradient-to-r from-[#fafafb] via-[#f3f8fe]  to-transparent'>
          {
              items.map((item) => (
                  <div className='w-full border border-[#b9d9ff] p-6 md:w-[31%]   bg-[#f8fcff] mx-auto mb-10 flex flex-col gap-5 rounded cursor-pointer  h-[300px] '>
                      <img src={item.img} alt="" className='w-[50px] h-[50px] rounded-full object-cover' />
                      <h2 className='text-2xl capitalize font-semibold'>{item.title}</h2>
                      <p className='text-sm'>{item.description}</p>
                  </div>
              ))
          }
      </div>
  )
}

export default Cart