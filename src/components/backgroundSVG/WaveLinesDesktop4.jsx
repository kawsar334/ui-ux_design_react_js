import React from 'react'


import { motion } from "framer-motion";

//  <motion.svg
//     width="100"
//     height="100"
//     viewBox="0 0 100 100"
    // initial={{ opacity: 0, x: -50, y: -50 }} 
    // animate={{ opacity: 1, x: [0, 50, 0], y: [0, 50, 0] }} // Moves left-right and down
    // transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
const WaveLinesDesktop4 = () => {
  return (
      <div>
        <motion.svg 
        
              initial={{ opacity: 0, x: -5, y: -5 }}
              animate={{ opacity: 1, x: [0, 5, 0], y: [0, 5, 0] }} // Moves left-right and down
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        width="1920" height="628" viewBox="0 0 1920 628" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{ mixBlendMode: "multiply" }}>
              <path d="M1509 -371.405V-737L327 445H692.596L1509 -371.405Z" fill="url(#paint0_linear_26_268)" />
          </g>
          <g style={{ mixBlendMode: "multiply" }}>
              <path d="M596 -133.212V-329L-37 304H158.789L596 -133.212Z" fill="url(#paint1_linear_26_268)" />
          </g>
          <g style={{ mixBlendMode: "multiply" }}>
              <path d="M1856 -55.7907V-362L866 628H1172.21L1856 -55.7907Z" fill="url(#paint2_linear_26_268)" />
          </g>
          <path d="M1967 168.744V11L1457 521H1614.74L1967 168.744Z" fill="url(#paint3_linear_26_268)" />
          <defs>
              <linearGradient id="paint0_linear_26_268" x1="1259.5" y1="862" x2="689" y2="188.5" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1F80F0" />
                  <stop offset="1" stop-color="#0059BF" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_26_268" x1="-313.41" y1="890.58" x2="406.1" y2="39.195" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1F80F0" />
                  <stop offset="1" stop-color="#0059BF" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint2_linear_26_268" x1="433.7" y1="1545.4" x2="1559" y2="213.85" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1F80F0" />
                  <stop offset="1" stop-color="#0059BF" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint3_linear_26_268" x1="1327" y1="717.5" x2="1786" y2="258.499" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00E9EA" />
                  <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49" />
              </linearGradient>
          </defs>
      </motion.svg>
</div>
  )
}

export default WaveLinesDesktop4