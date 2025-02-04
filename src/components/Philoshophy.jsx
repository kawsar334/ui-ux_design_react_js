import React from 'react'
import ItemCart from './ItemCart'

const Philoshophy = () => {

    const items = [
        { title: 'Full-suite solutions', description: 'Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.', img:"https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?w=50&auto=format" },
        { title: 'Simplify the complex', description: 'Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.', img:'https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&auto=format' },
        { title: 'Cutting-edge tech', description: 'We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.', img:"https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?w=50&auto=format" },
    ]
  return (
    <div className=' flex justify-center items-center flex-col' data-aos="zoom-in">

        <div className='w-[90%] mx-auto flex justify-center items-center gap-3 flex-col  my-10 '>
              <p className='text-blue font-semibold'>OUR PHILOSOPHY</p>

              <h1 className='text-3xl md:text-6xl font-semibold '>Human-centred innovation</h1>
        </div>


         <div className='w-full lg:w-[80%] h-[300px]  md:h-[400px]  mx-auto mb-10'>
              <img src="https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=1600&auto=format" alt="" className='w-full h-full ' />
         </div>


        <ItemCart items={items}/>
    </div>
  )
}

export default Philoshophy