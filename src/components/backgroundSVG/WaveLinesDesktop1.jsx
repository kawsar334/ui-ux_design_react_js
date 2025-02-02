import React from 'react'
import { motion } from "framer-motion";

{/* <motion.svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    initial={{ opacity: 0, x: -50, y: -50 }} 
    animate={{ opacity: 1, x: [0, 50, 0], y: [0, 50, 0] }} // Moves left-right and down
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
>
    <circle cx="50" cy="50" r="40" stroke="blue" strokeWidth="5" fill="none" />
</motion.svg> */}
const WaveLinesDesktop1 = () => {

  return (
      <div className=' '>
        
        
          <div className=" absolute   right-[100px] top-[-50px]  z-2">

              <motion.svg
            
                  initial={{ opacity: 0, x: -5, y: -5 }} 
                  animate={{ opacity: 1, x: [0, 5, 0], y: [0, 5, 0] }} 
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              width="158" height="158" viewBox="0 0 158 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M158 0L0.5 157.5H23.0446L158 22.5448V0Z" fill="url(#paint0_linear_5178_22429)" />
                  <defs>
                      <linearGradient id="paint0_linear_5178_22429" x1="-140.36" y1="266.729" x2="224.893" y2="-44.9581" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#00E9EA" />
                          <stop offset="1" stop-color="#0000" stop-opacity="0.05" />
                      </linearGradient>
                  </defs>
              </motion.svg>
          </div>
          <div className=" absolute   right-[0px] top-[150px]   z-2">
              <motion.svg 
              
                  initial={{ opacity: 0, x: 1, y: 1 }}
                  animate={{ opacity: 1, x: [1, 1, 0], y: [0, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              width="158" height="158" viewBox="0 0 158 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M158 0L0.5 157.5H23.0446L158 22.5448V0Z" fill="url(#paint0_linear_5178_22429)" />
                  <defs>
                      <linearGradient id="paint0_linear_5178_22429" x1="-140.36" y1="266.729" x2="224.893" y2="-44.9581" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#ffff" />
                          <stop offset="1" stop-color="#ffff" stop-opacity="0.05" />
                      </linearGradient>
                  </defs>
              </motion.svg>
          </div>

        <svg width="1920" height="929" viewBox="0 0 1920 929" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{ mixBlendMode: "multiply" }}>
              <path d="M788 23.4954V-382L-523 929H-117.504L788 23.4954Z" fill="url(#paint0_linear_13_93)" />
          </g>
          <g style={{ mixBlendMode: "multiply" }}>
              <path d="M2017 196.791V104L1717 404H1809.79L2017 196.791Z" fill="url(#paint1_linear_13_93)" />
          </g>
          <path d="M1480 126.679V11L1106 385H1221.68L1480 126.679Z" fill="url(#paint2_linear_13_93)" />

          <defs>
              <linearGradient id="paint0_linear_13_93" x1="-668.962" y1="1499.58" x2="811.884" y2="18.7308" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1F80F0" />
                  <stop offset="1" stop-color="#0059BF" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_13_93" x1="1586" y1="682" x2="1927" y2="278.5" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1F80F0" />
                  <stop offset="1" stop-color="#0059BF" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint2_linear_13_93" x1="1038" y1="415.5" x2="1471" y2="45.9998" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00E9EA" />
                  <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49" />
              </linearGradient>
          </defs>
      </svg>
</div>
  )
}

export default WaveLinesDesktop1