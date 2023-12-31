import React from 'react'

function OrganizationChart() {
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className="bg-gradient-to-t from-black to-transparent opacity-50 absolute w-full z-10 h-full top-0 left-0"></div>
                <div className="container py-12 relative z-20 mt-10" data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                    <h1 className='md:text-6xl sm:text-4xl text-3xl font-extrabold text-center text-white'><big className='text-yellow-300'>Organization</big> Chart</h1>
                </div>
            </section>
            <section className='py-12'>
                <div className="container flex flex-col items-center">
                    <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-8 relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Organization Chart</h2>
                    <div className='rounded-lg shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] w-full p-5'>
                        <img className='w-full' src="/src/assets/images/organizational-chart.png" alt="organizational chart" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrganizationChart;
