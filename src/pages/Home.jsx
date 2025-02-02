import React from 'react'
import Test from '../components/Test'
import Banner from '../components/Banner'
import Customers from '../components/Customers'
import Philoshophy from '../components/Philoshophy'
import Technology from '../components/Technology'
import Stats from '../components/Stats'
import CompanyList from '../components/CompanyList'
import Legacy from '../components/Legacy'
import AnimatedSVG from '../components/AnimatedSVG'

const Home = () => {

    const images = {
        miniImageOne: 'https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?w=74&auto=format',
        miniImageTwo: 'https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&auto=format',
        miniImageThree: 'https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?w=89&auto=format',
        imageFoure: "https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=640&auto=format"
    }
    const title = "POWERING THE FUTURE OF FINANCE"
    const desc1 = "Uncovering new  ways to delight  customers"
    const desc2 = "AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.";
    const desc3 = "Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success"
    return (
        <div>
            <Banner />


            {/* <AnimatedSVG/> */}
            <Customers title={title} desc1={desc1} desc2={desc2} desc3={desc3} images={images}  />
            <Philoshophy />
            <Technology />
            <Stats />
            <CompanyList />

            {/* <Test/>  */}
        </div>
    )
}

export default Home