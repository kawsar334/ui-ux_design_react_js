import React from 'react'
import "../component.css"
import { motion } from "framer-motion";


const WaveLinesDesktop3 = () => {
  return (
      <div className='  overflow-hidden relative w-[55%] shape2'>
        <motion.svg
            //   viewBox="0 0 100 100"
              initial={{ opacity: 0, x: -7, y: -7 }} // Start faded, shifted left & up
              animate={{ opacity: 1, x: [0, 5, 0], y: [0, 5, 0] }} // Moves left-right and down
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        
        width="1920" height="693" viewBox="0 0 1920 693" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{ mixBlendMode: "multiply" }}>
              <path d="M828 -327.405V-693L-354 489H11.5957L828 -327.405Z" fill="url(#paint0_linear_26_269)" />
          </g>
          <g filter="url(#filter0_f_26_269)">
              <path d="M1350 445H1469L1350 564V445Z" fill="url(#paint1_linear_26_269)" />
              <path d="M1350 445H1469L1350 564V445Z" fill="url(#paint2_linear_26_269)" />
          </g>
          <path d="M2028 148.679V33L1654 407H1769.68L2028 148.679Z" fill="url(#paint3_linear_26_269)" />
          <g filter="url(#filter1_f_26_269)">
              <path d="M1940 78.9349V-12L1646 282H1736.93L1940 78.9349Z" fill="url(#paint4_linear_26_269)" />
          </g>
          <g filter="url(#filter2_f_26_269)">
              <path d="M546 -179L167 200H194.084L546 -151.916V-179Z" fill="url(#paint5_linear_26_269)" />
              <path d="M546 -179L167 200H194.084L546 -151.916V-179Z" fill="url(#paint6_linear_26_269)" />
          </g>
          <g filter="url(#filter3_f_26_269)">
              <path d="M225 337L-110 672H-86.0607L225 360.939V337Z" fill="url(#paint7_linear_26_269)" />
          </g>
          <path opacity="0.73" d="M38 151H135L38 248V151Z" fill="url(#paint8_linear_26_269)" />
          <g filter="url(#filter4_f_26_269)">
              <path d="M1966.1 304L1745 525.1H1760.8L1966.1 319.8V304Z" fill="url(#paint9_linear_26_269)" />
          </g>
          <g style={{ mixBlendMode: "multiply" }}>
              <path d="M2028 321.567V183L1580 631H1718.57L2028 321.567Z" fill="url(#paint10_linear_26_269)" />
          </g>
          <g filter="url(#filter5_f_26_269)">
              <path d="M1989 -173.321V-289L1615 85H1730.68L1989 -173.321Z" fill="url(#paint11_linear_26_269)" />
          </g>
          <path d="M705 -543L44 118H91.2741L705 -495.726V-543Z" fill="url(#paint12_linear_26_269)" />
          <path d="M705 -543L44 118H91.2741L705 -495.726V-543Z" fill="url(#paint13_linear_26_269)" />
          <g filter="url(#filter6_f_26_269)">
              <path d="M465.1 -154L244 67.1H259.8L465.1 -138.2V-154Z" fill="url(#paint14_linear_26_269)" />
          </g>
          <g filter="url(#filter7_f_26_269)">
              <path d="M1809.1 -57L1588 164.1H1603.8L1809.1 -41.2V-57Z" fill="url(#paint15_linear_26_269)" />
          </g>
          <g filter="url(#filter8_f_26_269)">
              <path d="M1801 49H1854L1801 102V49Z" fill="url(#paint16_linear_26_269)" />
          </g>
          <defs>
              <filter id="filter0_f_26_269" x="1317" y="412" width="185" height="185" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="16.5" result="effect1_foregroundBlur_26_269" />
              </filter>
              <filter id="filter1_f_26_269" x="1595" y="-63" width="396" height="396" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="25.5" result="effect1_foregroundBlur_26_269" />
              </filter>
              <filter id="filter2_f_26_269" x="146" y="-200" width="421" height="421" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_26_269" />
              </filter>
              <filter id="filter3_f_26_269" x="-131" y="316" width="377" height="377" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_26_269" />
              </filter>
              <filter id="filter4_f_26_269" x="1724" y="283" width="263.1" height="263.1" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_26_269" />
              </filter>
              <filter id="filter5_f_26_269" x="1584" y="-320" width="436" height="436" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="15.5" result="effect1_foregroundBlur_26_269" />
              </filter>
              <filter id="filter6_f_26_269" x="232" y="-166" width="245.1" height="245.1" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_26_269" />
              </filter>
              <filter id="filter7_f_26_269" x="1567" y="-78" width="263.1" height="263.1" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_26_269" />
              </filter>
              <filter id="filter8_f_26_269" x="1783" y="31" width="89" height="89" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="9" result="effect1_foregroundBlur_26_269" />
              </filter>
              <linearGradient id="paint0_linear_26_269" x1="578.5" y1="906" x2="7.99988" y2="232.5" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1F80F0" />
                  <stop offset="1" stop-color="#0059BF" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_26_269" x1="1350" y1="504.259" x2="1469" y2="504.259" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#4B4B4B" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint2_linear_26_269" x1="1278.44" y1="583.255" x2="1446.82" y2="407.822" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00E9EA" />
                  <stop offset="1" stop-color="#1F80F0" />
              </linearGradient>
              <linearGradient id="paint3_linear_26_269" x1="1586" y1="437.5" x2="2019" y2="67.9998" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00E9EA" />
                  <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49" />
              </linearGradient>
              <linearGradient id="paint4_linear_26_269" x1="1592.55" y1="305.976" x2="1932.92" y2="15.5132" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00E9EA" />
                  <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49" />
              </linearGradient>
              <linearGradient id="paint5_linear_26_269" x1="303.276" y1="132.977" x2="663.248" y2="-117.29" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#4B4B4B" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint6_linear_26_269" x1="-60.9016" y1="261.323" x2="475.37" y2="-297.406" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00E9EA" />
                  <stop offset="1" stop-color="#1F80F0" />
              </linearGradient>
              <linearGradient id="paint7_linear_26_269" x1="-100.152" y1="662.758" x2="216.938" y2="368.35" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#40FEFF" />
                  <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49" />
              </linearGradient>
              <linearGradient id="paint8_linear_26_269" x1="-20.3284" y1="263.695" x2="116.923" y2="120.696" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00E9EA" />
                  <stop offset="1" stop-color="#1F80F0" />
              </linearGradient>
              <linearGradient id="paint9_linear_26_269" x1="1612.05" y1="560.875" x2="1924.9" y2="234.925" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00E9EA" />
                  <stop offset="1" stop-color="#1F80F0" />
              </linearGradient>
              <linearGradient id="paint10_linear_26_269" x1="1384.37" y1="1046.15" x2="1893.6" y2="443.587" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1F80F0" />
                  <stop offset="1" stop-color="#0059BF" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint11_linear_26_269" x1="1547" y1="115.5" x2="1980" y2="-254" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00E9EA" />
                  <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49" />
              </linearGradient>
              <linearGradient id="paint12_linear_26_269" x1="-176.287" y1="219.961" x2="434.922" y2="-257.676" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#4B4B4B" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint13_linear_26_269" x1="-76.1821" y1="171.905" x2="689.093" y2="-481.142" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00E9EA" />
                  <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49" />
              </linearGradient>
              <linearGradient id="paint14_linear_26_269" x1="203.8" y1="85.1308" x2="459.779" y2="-133.309" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00E9EA" />
                  <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49" />
              </linearGradient>
              <linearGradient id="paint15_linear_26_269" x1="1547.8" y1="182.131" x2="1803.78" y2="-36.3089" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00E9EA" />
                  <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49" />
              </linearGradient>
              <linearGradient id="paint16_linear_26_269" x1="1791.36" y1="106.322" x2="1852.72" y2="53.9599" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00E9EA" />
                  <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49" />
              </linearGradient>
          </defs>
      </motion.svg>

          <div className=" absolute   right-[100px] top-[-50px]   z-2">

              <motion.svg 
              initial={{ opacity: 1, x: 0, y: 1 }} 
              animate={{ opacity: 1, x: [5, 0, 0], y: [0, 0, 3] }} 
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
          <div className=" absolute   right-[300px] top-[100px]  z-2">
              <motion.svg 
              initial={{ opacity: 0, x: -7, y: -7 }} 
              animate={{ opacity: 1, x: [0, 5, 0], y: [0, 1, 0] }} 
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
</div>
  )
}

export default WaveLinesDesktop3