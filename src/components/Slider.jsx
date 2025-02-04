import { useState, useEffect } from "react";

const slides = [
    { src: "https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=640&auto=format", title: "Embrace the future of finance",btnText:"customer focused", desc: "Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation" },
    { src: "https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=640&auto=format", title: "Embrace the future of finance 2",btnText:"Agile and adaptable", desc: "Description for Embrace the future of finance 2" },
    { src: "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=640&auto=format", title: "Embrace the future of finance 3",btnText:"compilance ready", desc: "Description for Embrace the future of finance 3" },
    { src: "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=640&auto=format", title: "Embrace the future of finance 4",btnText:"secure and safe", desc: "Description for Embrace the future of finance 4" },
    // { src: "https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=640&auto=format", title: "Embrace the future of finance 5",btnText:"", desc: "Description for slide 5" }
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full  ">
            <div className="relative h-screen overflow-hidden rounded-lg p-10 md:h-[700px] shape1 bg-[#f8fcff]">


                <div className="absolute top-[0px] z-30   flex justify-start md:justify-center items-center flex-wrap  w-full lg:w-[80%]  mx-auto gap-1 space-x-1 md:space-x-10 md:p-5">

                    {slides.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={` rounded-full px-3 cursor-pointer py-2 ${index === currentIndex ? "bg-[#b9d9ff]" : "bg-white"}`}
                            aria-label={`Slide ${index + 1}`}
                        >{item?.btnText}</button>
                    ))}
                </div>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute  inset-0 flex    items-center justify-center transition-opacity duration-700 ease-in-out  p-3   ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="flex justify-center flex-col lg:flex-row items-start w-full md:w-[80%] mx-auto p-1 md:p-10  gap-1 lg:gap-5  ">
                            <img
                                src={slide.src}
                                className=" w-full lg:w-[50%] h-[190px] lg:h-[400px] object-cover rounded-[30px]"
                                alt={slide.title}
                                data-aos="zoom-in"
                            />
                            <div className=" text-center shadow     text-gray-700 p-2 rounded-md w-full lg:w-[45%]">
                                <h2 className="text-lg font-bold text-left  text-blue uppercase">{slide.title}</h2>
                                <h2 className="md:text-3xl text-left font-bold my-1  md:my-4  ">{slide.desc}</h2>
                                <p className="text-sm text-start    text-[18px] md:block ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed neque ducimus obcaecati odio, fuga, in facere blanditiis, dicta corrupti eius quisquam cupiditate perspiciatis a! Expedita sed accusantium rem id nobis? Accusamus   </p>
                            </div>
                        </div>
                      
                    </div>
                ))}
            </div>
           
            <button
                onClick={prevSlide}
                className="absolute hidden md:flex top-0 left-0 z-30  items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                    <svg className="w-4 h-4 text-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                </span>
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-0 right-0 z-30 hidden md:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                    <svg className="w-4 h-4 text-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                </span>
            </button>
        </div>
    );
};

export default Slider;
