import React from 'react'

const MissionVision = () => {
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className="bg-gradient-to-t from-black to-transparent opacity-50 absolute w-full z-10 h-full top-0 left-0"></div>
                <div className="container py-12 relative z-20 mt-10" data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                    <h1 className='md:text-6xl sm:text-4xl text-3xl font-extrabold text-center text-white'><big className='text-yellow-300'>Mission</big> & Vision</h1>
                </div>
            </section>
            <section className="py-12">
                <div className="container flex flex-col items-center">
                    <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-8 relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Mission</h2>
                    <div className='text-gray-700' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                        <p>Our mission is to transform the landscape of workforce solutions by providing unparalleled services that match top-tier talent with exceptional organizations. We are dedicated to helping businesses across diverse industries gain a competitive advantage through access to a pool of skilled and motivated professionals. Our mission is rooted in fostering a culture of inclusivity, diversity, and respect, ensuring every individual's talents and capabilities are valued and harnessed for collective success.</p>
                        <p className='mt-1'>We are committed to staying at the forefront of the industry, leveraging cutting-edge technologies and data-driven insights to optimize the recruitment and placement process. Our team of experienced and passionate experts work tirelessly to deliver prompt, reliable, and customized solutions, making us a trusted and preferred partner for both employers and job seekers.</p>
                    </div>
                </div>
            </section>
            <section className="pb-12 pt-6">
                <div className="container flex flex-col items-center">
                    <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-8 relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Vision</h2>
                    <div className='text-gray-700' data-aos="fade-left" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                        <p>As envisioned, <b className='text-black'>Nile International Manpower Agency Pvt. Ltd.</b> remains an exemplary manpower company not only as profit making body, but also one of the dedicated manpower suppliers committed to the economic upliftment of the people of Nepal. We provide appropriate trainings, skill development programs for various level and categories of manpower as per the demand and requirement in International labor market.</p>
                        <p className='mt-1'>our vision is to be the leading provider of human resource solutions, connecting exceptional talent with outstanding opportunities. We aim to revolutionize the way businesses and job seekers interact, fostering a seamless and efficient hiring process that brings together the right people at the right time. Our commitment lies in building lasting partnerships with our clients and candidates, understanding their unique needs, and delivering tailored solutions to achieve mutual success. Through innovation, technology, and a passion for excellence, we strive to empower organizations to thrive and individuals to achieve their professional aspirations. Our vision encompasses a world where talents are recognized, nurtured, and celebrated, driving growth and progress in the ever-evolving job market.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MissionVision;
