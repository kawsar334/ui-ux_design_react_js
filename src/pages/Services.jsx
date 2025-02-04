import React from 'react'
import ServicesBanner from '../components/ServicesBanner'
import Customers from '../components/Customers'
import Cart from '../components/Cart'
import Transformation from '../Transformation'
import Consult from '../components/Consult'
import Execution from '../components/Execution'
import Solutions from '../components/Solutions'
import {
    images,
    title,
    desc1,
    desc2,
    desc3,
    items,
    imagesForEXCECUTION,
    exchecutionInfo,
    imagesForOperate,
    OperateInfo,
    consultInfo,
    bannerData
} from '../data/Services';

const Services = () => {

    return (
        <div>

            <ServicesBanner
                title={bannerData.title}
                desc={bannerData?.desc}
                desc2={bannerData.desc2}
            />
            <Customers
                title={title}
                desc1={desc1}
                desc2={desc2}
                desc3={desc3}
                images={images}
            />
            <Cart
                items={items}
            />

            <Consult
                title={consultInfo.title}
                desc1={consultInfo?.desc1}
                desc2={consultInfo?.desc2}
                desc3={consultInfo?.desc3}
                images={consultInfo.images}
            />
            <Transformation />
            <Execution
                title={exchecutionInfo.title}
                desc1={exchecutionInfo.desc1}
                desc2={exchecutionInfo.desc2}
                desc3={exchecutionInfo.desc3}
                desc4={exchecutionInfo?.desc4}
                images={imagesForEXCECUTION} />
            <Cart
                items={items}
            />


            {/* {Operate section  } */}
            <Execution
                title={OperateInfo.title}
                desc1={OperateInfo.desc1}
                desc2={OperateInfo.desc2}
                desc3={OperateInfo.desc3}
                desc4={OperateInfo.desc4}
                images={imagesForOperate} />
            <Cart
                items={items}
            />

            <Solutions />
        </div>
    )
}

export default Services