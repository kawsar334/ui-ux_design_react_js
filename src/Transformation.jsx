import React from 'react'

const Transformation = () => {
  return (
      <div
      data-aos="zoom-in"
      className='w-[95%] md:w-[80%] my-10 p-5 py-10 bg-blue mx-auto rounded-[30px] flex justify-between items-center gap-5  flex-col  md:flex-row  '>


        <div className='flex justify-between text-white gap-5 flex-col w-full md:w-[70%] 
        '>
              <h1 className='text-3xl font-semibold'>Start your transformation</h1>

              <p className='text-xl w-full md:w-[70%]'>We are ready to serve as strategic partners to provide your organisation with
                  the support you need.</p>
        </div>

        <div className='w-full md:w-[30%]   p-3'>

          <a className='w-max py-2  px-5 font-semibold cursor-pointer   border rounded bg-[#f38754] hover:bg-transparent transition-all duration-300 text-white'>Talk to Us {">"}</a>
        </div>
    </div>
  )
}

export default Transformation