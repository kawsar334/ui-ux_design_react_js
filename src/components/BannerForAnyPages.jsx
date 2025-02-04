import React from 'react'
import Navbar from './Navbar';
import "./component.css"
import WaveLinesDesktop2 from './backgroundSVG/WaveLinesDesktop2';
import WaveLinesDesktop3 from './backgroundSVG/WaveLinesDesktop3';
import WaveLinesDesktop1 from './backgroundSVG/WaveLinesDesktop1';
import WaveLinesMobile1 from './backgroundSVG/WaveLinesMobile1';
import WaveLinesMobile2 from './backgroundSVG/WaveLinesMobile2';

const BannerForAnyPages = ({title,desc, img}) => {

    return (
        <div className='w-screen  h-screen shape1 relative   overflow-hidden   bg-white text-[#1cc800] p-10 '>
            
            <div className='w-full h-full  relative   '>
                <div className='absolute top-0 z-[1]     '>
                    <WaveLinesDesktop3 />
                </div>

                <div className='absolute top-0  overflow-hidden    z-[1]  h-full w-full flex justify-center items-center gap-2 flex-col '>

                    <div className='h-max mt-[80px]  px-5 w-[90%]  md:w-[70%] md:space-y-3     '>
                        <h1 className='text-4xl md:text-5xl font-semibold'>{title}</h1>
                        <p>{desc}</p>

                        <button className='my-10'>
                            <img src={img} alt="" />
                        </button>
                    </div>
                </div>



                <div className='md:w-full h-full  absolute  right-[-100px]  hidden md:flex'>

                    <div className='relative w-full   '>
                        <div className='absolute right-[-700px] top-[-210px]    '>
                            <WaveLinesDesktop2 />
                        </div>

                    </div>

                </div>

            </div>



        </div>
    )
}

export default BannerForAnyPages



    // < div className = 'absolute top-0  overflow-hidden  bg-[red]  z-[1] h-[100%] md:h-full w-full md:w-[50%] flex justify-center items-center gap-2 flex-col' >

    //     <div className='h-max mt-[80px]  px-5 w-[90%]  md:w-[70%] md:space-y-3     '>
    //         <h1 className='text-4xl md:text-5xl font-semibold'>{title}</h1>
    //         <p>{desc}</p>

    //         <button className='my-10'>
    //             <img src="https://cdn.sanity.io/images/6jywt20u/production/a0d52dbf3dc616daa67af788c08edd1305f7dfe9-235x43.svg?w=235&auto=format" alt="" />
    //         </button>
    //     </div>
    //             </div >