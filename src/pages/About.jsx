import React from 'react'
import Marque from '../components/Marquee'
import Consult from '../components/Consult'
import ItemCart from '../components/ItemCart'
import CustomTitle from '../components/CustomTitle'
import Execution from '../components/Execution'
import Redefining from '../components/Redefining'
import ServicesBanner from '../components/ServicesBanner'
import {
    consultInfo,
    items,
    items2,
    imagesForEXCECUTION,
    exchecutionInfo,
    bannerData,
} from '../data/about'

const About = () => {

    return (
        <div>
            <ServicesBanner
                title={bannerData.title}
                desc={bannerData?.desc}
                desc2={bannerData.desc2}
            />
            <Consult
                title={consultInfo.title}
                desc1={consultInfo?.desc1}
                desc2={consultInfo?.desc2}
                desc3={consultInfo?.desc3}
                images={consultInfo.images}
            />

            <ItemCart
                items={items}
            />
            <Marque />
            <Redefining />

            <div
                className='my-10  py-10 shape1 bg-gradient-to-r from-[#f1f1f7] via-[white]  to-transparent'>
                <CustomTitle
                    subtitle="Built in our core"
                />
                <ItemCart
                    items={items2}
                />
            </div>

            <Execution
                title={exchecutionInfo.title}
                desc1={exchecutionInfo.desc1}
                desc2={exchecutionInfo.desc2}
                desc3={exchecutionInfo.desc3}
                desc4={exchecutionInfo?.desc4}
                images={imagesForEXCECUTION}
            />

        </div>
    )
}

export default About