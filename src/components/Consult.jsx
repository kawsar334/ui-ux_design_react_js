import React from 'react'


const Svg=()=>{
    return(
        <div className='absolute bottom-[100px]  left-[100px] z-30'>
            <svg width="158" height="158" viewBox="0 0 158 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M158 0L0.5 157.5H23.0446L158 22.5448V0Z" fill="url(#paint0_linear_5178_22429)" />
                <defs>
                    <linearGradient id="paint0_linear_5178_22429" x1="-140.36" y1="266.729" x2="224.893" y2="-44.9581" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00E9EA" />
                        <stop offset="1" stop-color="#1F80F0" stop-opacity="0.05" />
                    </linearGradient>
                </defs>
            </svg>
           
        </div>
    )
}
const Consult = ({title,desc1,desc2,desc3,images}) => {

    // const consultInfo = {
    //     title: "Taking the First Step",
        
    //     desc1: "Consult",
    //     desc2: "Taking the leap towards digital transformation with the ambition of delivering augmented value in financial services can be daunting.",
    //     desc3: "Tap on the vast experience and deep knowledge of our experts. Our breadth of consulting expertise spans from applying the latest financial technological innovations to implementing risk-control strategies.",
    //     desc4: "We provide a comprehensive overview of the key areas of digital transformation, offering a tailored approach that aligns with your needs and goals.",
    //     images:{
    //         imgOne:"https://cdn.sanity.io/images/6jywt20u/production/3fb880ac9df2bd6b2d7697f850118b858d842476-356x368.png?w=320&auto=format",
    //         imgTwo: "https://cdn.sanity.io/images/6jywt20u/production/bc217eefe37b614acbffcb924052e0a35c55b4eb-162x182.svg?w=162&auto=format",
    //         imgThree: "https://cdn.sanity.io/images/6jywt20u/production/75de4e417de603ce210bea0f109e45a9e37d9a23-1206x816.png?w=640&auto=format",

    //     }
    // }

  return (
      <div className='w-[90%]  mx-auto flex justify-between items-center gap-3 flex-col md:flex-row shape1 '>

          <div className="left  p-5  w-full md:w-[50%]">
              <p className='text-blue uppercase font-semibold  my-2 text-[16px]'>{title}</p>
              <h1 className='text-5xl  text-main capitalize font-semibold '>{desc1}</h1>
              <p className='font-semibold my-3 text-main'>{desc2}</p>
              <p className='text-[14px]'>{desc3}</p>
          </div>


          <div className="right relative    w-full md:w-[43%] ">
              <svg className='' width="450" height="650" viewBox="0 0 390 413" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              </svg>


<Svg/>

              {images?.imgOne && <img src={images?.imgOne} alt="" className='  object-cover w-[200px]  absolute  z-10 top-[50px] md:top-[95px] left-[-100px] ' />}


            {images?.imgTwo && <img src={images?.imgTwo} alt="" className=' w-[130px] h-[130px] object-cover  absolute  z-10 top-[50px] right-[50px]' />}
            
              {/* this is  big image  */}
              { images?.imgThree &&<img src={images?.imgThree} alt="" className='absolute object-cover bottom-[120px] w-[400px] h-[450px] left-[40px]  rounded-[20px] p-4' />}


          </div>
      </div>
  )
}

export default Consult