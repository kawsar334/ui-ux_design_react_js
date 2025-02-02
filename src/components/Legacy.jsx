import React from 'react'
import "./component.css"
import WaveLinesMobile2 from './backgroundSVG/WaveLinesMobile2'
const Legacy = () => {
    return (
        <div className='h-screen w-full shape5 bg-blue relative'>

            <div className="w-full flex justify-between">

                <WaveLinesMobile2 />
                <WaveLinesMobile2 />

            </div>



            <div className='absolute left-0 top-0  w-[90%] p-5  md:w-[50%] h-full flex justify-center items-start flex-col '>
                <h1 className='text-3xl text-white  mb-2 '>Legacy no longer</h1>
                <p className='text-white w-full md:w-[90%]'>Talk to us to find out how we can transform your organisation for the future</p>

                <button className='bg-[#f38754] mt-3 rounded text-white  px-6 py-3 '> Contact us</button>
            </div>


        </div>
    )
}

export default Legacy