import React, { useEffect } from 'react'


import { useState } from "react";
import Slider from './Slider';

const images = [
    "/docs/images/carousel/carousel-1.svg",
    "/docs/images/carousel/carousel-2.svg",
    "/docs/images/carousel/carousel-3.svg",
    "/docs/images/carousel/carousel-4.svg",
    "/docs/images/carousel/carousel-5.svg"
];
const Technology = () => {



    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>

            <div className='w-[90%] my-5 mx-auto text-center'>
                <p className='text-xl text-blue'>TECHNOLOGY BUILT FOR YOU</p>
                <h1 className='text-3xl md:text-4xl lg:text-6xl'>The future of finance</h1>
            </div>

            <Slider/>

            

        </div>
    )
}

export default Technology




{/* <div className="relative w-[90%] bg-[red] mx-auto">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            className={`absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                                }`}
                            alt={`Slide ${index + 1}`}
                        />
                    ))}
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"
                                }`}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                    </span>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </span>
                </button>
            </div> */}

