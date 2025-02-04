import React from 'react'
import Test from '../components/Test'
import Banner from '../components/Banner'
import Customers from '../components/Customers'
import Philoshophy from '../components/Philoshophy'
import Technology from '../components/Technology'
import Stats from '../components/Stats'
import CompanyList from '../components/CompanyList'
import { HomePageData } from '../data/HomePageData'

const Home = () => {
    return (
        <div>
            <Banner />
            <Customers
                title={HomePageData.title}
                desc1={HomePageData.desc1}
                desc2={HomePageData.desc2}
                desc3={HomePageData.desc3}
                images={HomePageData.images}
            />
            <Philoshophy />
            <Technology />
            <Stats />
            <CompanyList />
        </div>
    )
}

export default Home