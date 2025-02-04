import React from 'react'
import Banner from '../components/Banner'
import AnyComponent from '../components/AnyComponent'
import Customers from '../components/Customers'
import Marquee from '../components/Marquee'
import Design from '../components/Design'
import BannerForAnyPages from '../components/BannerForAnyPages'
import { 
    images, 
    items, 
    items2, 
    title, 
    desc1, 
    desc2, 
    desc3, 
    desc4, 
    designItems, 
    designTitle, 
    desgnDesc, 
    data 
    
} from '../data/AnyBaas'

const AnyBaas = () => {

    return (
        <div>
            <BannerForAnyPages
                title={data?.title}
                desc={data.desc}
                img={data.img}
            />
            <Customers
                title={title}
                desc1={desc1}
                desc2={desc2}
                desc3={desc3}
                images={images}
                desc4={desc4}
            />
            <AnyComponent
                title="Key Features"
                subtitle="Redefined for the digital age"
                items={items}
            />
            <AnyComponent
                title="Benefits"
                subtitle="Start your digital transformation"
                items={items2}
            />
            <Marquee />
            <Design
                title={designTitle}
                desc={desgnDesc}
                items={designItems}
            />
        </div>
    )
}

export default AnyBaas