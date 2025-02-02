import React from 'react'
import BgSvg1 from './backgroundSVG/BgSvg1'
import WaveLinesDesktop1 from './backgroundSVG/WaveLinesDesktop1'
import WaveLinesDesktop2 from './backgroundSVG/WaveLinesDesktop2'
import WaveLinesDesktop3 from './backgroundSVG/WaveLinesDesktop3'
import WaveLinesDesktop4 from './backgroundSVG/WaveLinesDesktop4'
import WaveLinesMobile1 from './backgroundSVG/WaveLinesMobile1'
import WaveLinesMobile2 from './backgroundSVG/WaveLinesMobile2'
import StorySvg2 from './storySVG/StorySvg2'
import StorySvg3 from './storySVG/StorySvg3'
import Svg2 from './founderSVG/Svg2'
import Svg3 from './founderSVG/Svg3'

const Test = () => {
    return (
        <div  className=''>

            <h1 className='text-3xl'>divider1</h1>
            <BgSvg1 />
            <h1 className='text-3xl'>divider2</h1>

            <WaveLinesDesktop1 />
            <h1 className='text-3xl'>divider3</h1>

            <WaveLinesDesktop2 />
            <h1 className='text-3xl'>divider4</h1>

            <WaveLinesDesktop3 />

            <h1 className='text-3xl text-blue'>divider5</h1>
            <WaveLinesDesktop4 />

            <h1 className='text-3xl'>divider6</h1>

            <WaveLinesMobile1 />
            <h1 className='text-3xl'>divider7</h1>
            <WaveLinesMobile2 />


            <h1 className='text-3xl text-[red]'>story svg1</h1>
            <StorySvg2 />
            <h1 className='text-3xl text-[red]'>story svg</h1>
            <StorySvg3 />


            <h1 className='text-3xl text-[red]'>Founder svg</h1>
            <Svg2 />
            <h1 className='text-3xl text-[red]'>Founder svg</h1>
            <Svg3 />


        </div>
    )
}

export default Test