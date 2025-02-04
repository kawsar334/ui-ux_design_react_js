import React from 'react'

const Solutions = () => {

    const items=[
        {
            title:"AnyCaaS",
            img:"https://anytxn.com/icons/logo-small.svg",
            desc:"Reimagine your card programmes with our Cards-as-a-Service (CaaS) solution. Streamline card management, deliver superior customer experiences, and more."
        },
        {
            title: "AnyBaaS",
            img: "https://anytxn.com/icons/logo-small.svg",
            desc: "Reimagine your card programmes with our Cards-as-a-Service (CaaS) solution. Streamline card management, deliver superior customer experiences, and more."
        },
        {
            title: "AnyPaaS",
            img: "https://anytxn.com/icons/logo-small.svg",
            desc: "Reimagine your card programmes with our Cards-as-a-Service (CaaS) solution. Streamline card management, deliver superior customer experiences, and more."
        },
        
    ]
  return (
      
    <div className='w-[90%] lg:w-[80%] mx-auto  my-10 p-5'>


          <h1 className='text-center text-4xl font-semibold py-7 '>Our solutions</h1>

          <div className='flex justify-center items-center flex-col md:flex-row flex-wrap gap-3  w-full  '>
            {items.map((item, index) => (
              <div data-aos="zoom-in" key={index} className='flex flex-col gap-3 w-[99%] md:w-[45%] lg:w-[31%] shadow p-4 rounded '>
                <h2 className=' font-semibold text-3xl'>{item.title}</h2>
                <img src={item.img} alt={item.title} className='w-[100px] object-cover rounded-full'/>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

    </div>
  )
}

export default Solutions