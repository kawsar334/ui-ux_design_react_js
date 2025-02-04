
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Legacy from '../components/Legacy'

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Layout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true, 
        });
    }, []);
    return (
        <div className=''>
            <Navbar />
            <Outlet />
            <Legacy/>
            <Footer />

           
        </div>
    )
}

export default Layout


