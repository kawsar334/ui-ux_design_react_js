import React from 'react'
import "../components/component.css";
import { motion } from "framer-motion";


const Customers = ({ title, desc1, desc2, desc3, images, desc4 }) => {

    // <motion.svg
    //     width="100"
    //     height="100"
    //     viewBox="0 0 100 100"
        // initial={{ opacity: 0, x: -50, y: -50 }} // Start faded, shifted left & up
        // animate={{ opacity: 1, x: [0, 50, 0], y: [0, 50, 0] }} // Moves left-right and down
        // transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    // >
    //     <circle cx="50" cy="50" r="40" stroke="blue" strokeWidth="5" fill="none" />
    // </motion.svg>
    return (
        <div className='w-[90%]  mx-auto flex justify-between items-center gap-3 flex-col md:flex-row shape1 '>

            <div className="left  p-5  w-full md:w-[50%]" data-aos="fade-up">
                <p className='text-blue uppercase font-semibold  my-2 text-[16px]'>{title}</p>
                <h1 className='text-5xl  text-main capitalize font-semibold '>{desc1}</h1>
                <p className='font-semibold my-3 text-main'>{desc2}</p>
                <p className='text-[14px]'>{desc3}</p>

                {desc4 && <p className='font-semibold my-3 text-main '>{desc4}</p>}
            </div>


            <div className="right relative    w-full md:w-[43%] ">
                <motion.svg

                    initial={{ opacity: 0, x: -10, y: -10 }} // Start faded, shifted left & up
                    animate={{ opacity: 1, x: [0, 10, 0], y: [0, 10, 0] }} // Moves left-right and down
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                 className='' width="450" height="650" viewBox="0 0 390 413" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4876_21715)">
                        <g filter="url(#filter0_f_4876_21715)">
                            <path d="M411 407.438L238 407.438L411 234.438L411 407.438Z" fill="url(#paint0_linear_4876_21715)" />
                            <path d="M411 407.438L238 407.438L411 234.438L411 407.438Z" fill="url(#paint1_linear_4876_21715)" />
                        </g>
                        <g style={{ mixBlendMode: "multiply" }}>
                            <path d="M358 -141.773L358 -337.562L-275 295.438L-79.2115 295.438L358 -141.773Z" fill="url(#paint2_linear_4876_21715)" />
                        </g>
                        <g style={{ mixBlendMode: "multiply" }}>
                            <path d="M946 -394.966L946 -760.562L-236 421.438L129.596 421.438L946 -394.966Z" fill="url(#paint3_linear_4876_21715)" />
                        </g>
                        <path d="M185 288.094L185 206.438L-79 470.438L2.65587 470.438L185 288.094Z" fill="url(#paint4_linear_4876_21715)" />
                        <path d="M498 264.134L498 204.438L307 397.438L366.077 397.438L498 264.134Z" fill="url(#paint5_linear_4876_21715)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_4876_21715" x="205" y="201.438" width="239" height="239" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="16.5" result="effect1_foregroundBlur_4876_21715" />
                        </filter>
                        <linearGradient id="paint0_linear_4876_21715" x1="411" y1="321.289" x2="238" y2="321.289" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="#4B4B4B" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_4876_21715" x1="515.029" y1="206.447" x2="270.24" y2="461.486" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00E9EA" />
                            <stop offset="1" stopColor="#1F80F0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_4876_21715" x1="-551.41" y1="882.019" x2="168.1" y2="30.6334" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#1F80F0" />
                            <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_4876_21715" x1="696.5" y1="838.438" x2="126" y2="164.938" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#1F80F0" />
                            <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_4876_21715" x1="-127" y1="491.968" x2="178.647" y2="231.144" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00E9EA" />
                            <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_4876_21715" x1="272.273" y1="413.177" x2="495.342" y2="224.794" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00E9EA" />
                            <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                        </linearGradient>
                        <clipPath className='' id="clip0_4876_21715">
                            <rect width="390" height="413" fill="white" transform="translate(390 413) rotate(-180)" />
                        </clipPath>
                    </defs>
                </motion.svg>


                {images?.miniImageTwo  &&<img src={images?.miniImageTwo} alt="" className=' w-[130px] h-[130px] object-cover  absolute  z-10 top-[130px] md:top-[200px] right-0 md:right-[70px] ' />}
                {images?.miniImageThree  &&<img src={images?.miniImageThree} alt="" className=' w-[70px] h-[70px] object-cover  absolute  z-10 top-[200px] left-[10px]' />}
                {images?.miniImageOne  &&<img src={images?.miniImageOne} alt="" className=' w-[70px] h-[70px] object-cover  absolute  z-10 top-[280px] left-[100px]' />}

                {images?.miniImagefive && <img src={images?.miniImagefive} alt="" className=' w-[100px] h-[100px] object-cover  absolute  z-10 bottom-[130px] md:bottom-[200px] left-0 left:right-[70px] ' />}

                {/* this is  big image  */}
                {images?.imageFoure  &&<img src={images?.imageFoure} alt="" className='absolute bottom-[120px] w-[400px] object-cover h-[450px] left-[40px]  rounded-[20px] p-4' />}
                
                
            </div>
        </div>
    )
}

export default Customers