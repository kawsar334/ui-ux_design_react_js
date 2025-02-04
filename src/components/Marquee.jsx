import React from "react";
import Marquee from "react-fast-marquee";
const images = [
    "https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg?w=318&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=320&fm=webp",
    "https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=320&fm=webp",
];


const Marque = () => {
    return (
        <div className="relative w-full overflow-hidden ">
            <div className="">
              
                <h1 className="block text-center my-5  text-3xl font-semibold text-titlecolor">TRUSTED BY THE BEST</h1>
                <div>
                    <Marquee speed={100} delay={0}>
                        {images.concat(images).map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="w-[200px] h-[70px] mx-10  object-cover rounded-lg shadow-lg"
                                data-aos="zoom-in"
                            />
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Marque;
