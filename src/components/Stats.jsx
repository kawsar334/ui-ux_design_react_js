import { useEffect, useState } from "react";

const statsData = [
    { title: "Users Of Experience", count: 5000 },
    { title: "Financial Institutions", count: 12000 },
    { title: "Customers Each", count: 850 },

];

const StatCard = ({ title, count }) => {
    const [currentCount, setCurrentCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = Math.ceil(count / 100);
        const timer = setInterval(() => {
            start += increment;
            if (start >= count) {
                setCurrentCount(count);
                clearInterval(timer);
            } else {
                setCurrentCount(start);
            }
        }, 20);

        return () => clearInterval(timer);
    }, [count]);

    return (
        <div className="p-4 text-blue rounded-lg  text-center">
            <div className="text-[70px]   flex justify-center items-center gap-3">
                {currentCount}+
            </div>
            <div className="text-lg  text-black mt-2 text-left ">{title}</div>
        </div>
    );
};

const Stats = () => {
    return (

        <div className="w-full">
            <div className="flex justify-center items-center gap-4 flex-col w-[80%] mx-auto my-10">

                <h1 className="text-blue">TRUSTED BY THE BEST</h1>

                <div className="flex justify-center items-center gap-4 w-full flex-col md:flex-row">
                    {statsData.map((stat, index) => (
                        <StatCard key={index} title={stat.title} count={stat.count} />
                    ))}
                </div>
            </div>




        </div>
    );
};

export default Stats;
