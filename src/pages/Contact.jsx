import React from 'react'
import Banner from '../components/Banner'

const Contact = () => {
  return (
    <div>
      <Banner />
      <div className='w-full relative '>
        <div
          data-aos="zoom-in"
          className=' absolute top-[-300px] border w-[95%] lg:w-[60%] bg-white shadow rounded  left-[10px] md:left-[30%]  p-10 z-[50] '>
          <form >
            <div className='flex justify-start items-center gap-3 flex-col md:flex-row  mb-2'>
              <div className='flex flex-col w-full md:w-[46%] '>
                <label htmlFor=""> Name</label>
                <input type="text" placeholder="Name" className='px-3 py-2 rounded  border mt-2' />

              </div>
              <div className='flex flex-col w-full md:w-[46%] '>
                <label htmlFor=""> Phone</label>
                <input type="tel" placeholder="Phone" className='px-3 py-2 rounded  border mt-2' />
              </div>
            </div>

            <div className='flex justify-start items-center gap-3 flex-col md:flex-row  mb-2'>
              <div className='flex flex-col w-full md:w-[46%] '>
                <label htmlFor=""> Name</label>
                <input type="text" placeholder="Name" className='px-3 py-2 rounded  border mt-2' />

              </div>
              <div className='flex flex-col w-full md:w-[46%] '>
                <label htmlFor=""> Phone</label>
                <input type="tel" placeholder="Phone" className='px-3 py-2 rounded  border mt-2' />
              </div>
            </div>
            <div className='w-[94%] mb-1  '>
              <label htmlFor=""> Phone</label>
              <input type="email" placeholder="Email" className='w-full border px-3 py-2 rounded flex flex-col ' />

            </div>
            <div className='w-[94%] mb-1  '>
              <label htmlFor=""> Message</label>

              <textarea placeholder="Message" rows="5" className='w-full border px-3 py-2 rounded '></textarea>
            </div>
            <button type="submit" className='text-white bg-blue  px-6 py-2 rounded  '>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact