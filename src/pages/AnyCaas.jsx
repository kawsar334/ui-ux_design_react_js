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
    
} from '../data/AnyCaas'
const AnyCaas = () => {
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
                subtitle="Superior customer experiences"
                items={items}
            />
            <AnyComponent
                title="Benefits"
                subtitle="Revolutionise your card programmes"
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

export default AnyCaas