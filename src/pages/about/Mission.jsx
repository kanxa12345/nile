import React from 'react'

function Mission() {
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="src/assets/images/background.webp" alt="background" />
                <div className="overlay absolute w-full z-10 h-full"></div>
                <div className="container py-12 relative z-20 mt-10">
                    <h1 className='text-6xl font-extrabold text-center text-white'><big className='text-yellow-300'>Our</big> Mission</h1>
                </div>
            </section>
            <section className="py-12">
                <div className="container flex flex-col items-center">
                    <h2 className='text-4xl font-bold pb-2 mb-8 relative pseudo-border'>Mission</h2>
                    <p className='text-gray-700'>Our mission is to transform the landscape of workforce solutions by providing unparalleled services that match top-tier talent with exceptional organizations. We are dedicated to helping businesses across diverse industries gain a competitive advantage through access to a pool of skilled and motivated professionals. Our mission is rooted in fostering a culture of inclusivity, diversity, and respect, ensuring every individual's talents and capabilities are valued and harnessed for collective success.</p>
                    <p className='text-gray-700 mt-1'>We are committed to staying at the forefront of the industry, leveraging cutting-edge technologies and data-driven insights to optimize the recruitment and placement process. Our team of experienced and passionate experts work tirelessly to deliver prompt, reliable, and customized solutions, making us a trusted and preferred partner for both employers and job seekers.</p>
                </div>
            </section>
        </>
    )
}

export default Mission;
