import React from 'react'
import Navbar from './Navbar';
import "./component.css"
import WaveLinesDesktop2 from './backgroundSVG/WaveLinesDesktop2';
import WaveLinesDesktop3 from './backgroundSVG/WaveLinesDesktop3';
import WaveLinesDesktop1 from './backgroundSVG/WaveLinesDesktop1';
import WaveLinesMobile1 from './backgroundSVG/WaveLinesMobile1';
import WaveLinesMobile2 from './backgroundSVG/WaveLinesMobile2';
import WaveLinesDesktop4 from './backgroundSVG/WaveLinesDesktop4';

const ServicesBanner = ({ title, desc, desc2 }) => {

    return (
        <div className='w-screen  h-screen shape1 relative   overflow-hidden   bg-blue text-white ' >

            <div className='w-full h-full  relative    '>
                <Navbar />
                <div className='absolute top-0 z-[1]    '>
                    <WaveLinesDesktop4 />
                </div>

                <div className='absolute top-0  overflow-hidden   z-[1] h-[100%] md:h-full w-full md:w-[50%] flex justify-center items-center gap-2 flex-col'>

                    <div className='h-max mt-[80px]  px-5 w-[90%]   md:w-[70%] md:space-y-3     '>
                        <p className='uppercase  text-titlecolor font-semibold' data-aos="zoom-in">{title}</p>
                        <h1 className='text-4xl md:text-6xl font-semibold' data-aos="zoom-in">{desc}</h1>
                        <p data-aos="zoom-in">{desc2}</p>
                    </div>
                </div>


                <div className='md:w-full h-full     absolute  right-[-100px]  hidden md:flex'>

                    <div className='relative w-full   '>
                        <div className='   absolute right-[-400px] top-[-210px]  '>
                            <WaveLinesDesktop4 />
                        </div>

                    </div>

                </div>

            </div>



        </div>
    )
}

export default ServicesBanner



{/* <div className=' shape2 flex justify-between items-center  relative z-10 top-[-100px] w-[85%] bg-red-500  h-screen'>
              <div className='absolute top-[-10px] opacity-50 '>
                    <WaveLinesDesktop3 />
              </div>
           
                <div className='w-[45%] bg-[gray] absolute top-0 z-[100] shape3'>
                    <img
                        src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=640&auto=format" alt="" className='w-full ' />
                </div>
            </div> */}