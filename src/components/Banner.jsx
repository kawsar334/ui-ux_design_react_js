import React from 'react'
import Navbar from './Navbar';
import "./component.css"
import WaveLinesDesktop2 from './backgroundSVG/WaveLinesDesktop2';
import WaveLinesDesktop3 from './backgroundSVG/WaveLinesDesktop3';
import WaveLinesDesktop1 from './backgroundSVG/WaveLinesDesktop1';
import WaveLinesMobile1 from './backgroundSVG/WaveLinesMobile1';
import WaveLinesMobile2 from './backgroundSVG/WaveLinesMobile2';

const Banner = () => {
    return (
        <div className='w-screen  h-screen shape1 relative   overflow-hidden   bg-blue text-white '>

            <div className='w-full h-full  relative    '>
            {/* <Navbar /> */}
            <div className='absolute top-0 z-[1]    '>
                <WaveLinesDesktop3/>
            </div>

                <div className='absolute top-0  overflow-hidden   z-[1] h-[100%] md:h-full w-full md:w-[50%] flex justify-center items-center gap-2 flex-col'>
                   
                   <div className='h-max mt-[80px]  px-5 w-[90%]  md:w-[70%] md:space-y-3     '>
                        <h1 className='text-4xl md:text-5xl font-semibold'>Embrace the <br />  future of finance</h1>
                        <p>Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation</p>

                        <button className='px-3 py-2 border rounded bg-[#f38754] hover:bg-transparent transition-all duration-300 text-white'>Reach Out To Us</button>
                   </div>
                    <img src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=960&auto=format" alt="" className=' shape4   w-full h-[700px] object-cover relative bottom-[10px] left-[-10px]    md:hidden' />
                </div>

             
                <div className='md:w-full h-full     absolute  right-[-100px]  hidden md:flex'>
                   
                   <div className='relative w-full   '>
                        <img src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=960&auto=format" alt="" className='md:ml-[350px] shape3     ' />
                        <div className='   absolute right-[-400px] top-[-210px] '>
                            <WaveLinesDesktop1/>
                    </div>

                   </div>

            </div>

            </div>


           
        </div>
    )
}

export default Banner



{/* <div className=' shape2 flex justify-between items-center  relative z-10 top-[-100px] w-[85%] bg-red-500  h-screen'>
              <div className='absolute top-[-10px] opacity-50 '>
                    <WaveLinesDesktop3 />
              </div>
           
                <div className='w-[45%] bg-[gray] absolute top-0 z-[100] shape3'>
                    <img
                        src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=640&auto=format" alt="" className='w-full ' />
                </div>
            </div> */}