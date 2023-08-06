import React from 'react'

function Vision() {
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="src/assets/images/background.webp" alt="background" />
                <div className="overlay absolute w-full z-10 h-full"></div>
                <div className="container py-12 relative z-20 mt-10">
                    <h1 className='text-6xl font-extrabold text-center text-white'><big className='text-yellow-300'>Our</big> Vision</h1>
                </div>
            </section>
            <section className="py-12">
                <div className="container flex flex-col items-center">
                    <h2 className='text-4xl font-bold pb-2 mb-8 relative pseudo-border'>Vision</h2>
                    <p className='text-gray-700'>As envisioned, <b className='text-black'>Nile International Manpower Agency Pvt. Ltd.</b> remains an exemplary manpower company not only as profit making body, but also one of the dedicated manpower suppliers committed to the economic upliftment of the people of Nepal. We provide appropriate trainings, skill development programs for various level and categories of manpower as per the demand and requirement in International labor market.</p>
                    <p className='text-gray-700 mt-1'>our vision is to be the leading provider of human resource solutions, connecting exceptional talent with outstanding opportunities. We aim to revolutionize the way businesses and job seekers interact, fostering a seamless and efficient hiring process that brings together the right people at the right time. Our commitment lies in building lasting partnerships with our clients and candidates, understanding their unique needs, and delivering tailored solutions to achieve mutual success. Through innovation, technology, and a passion for excellence, we strive to empower organizations to thrive and individuals to achieve their professional aspirations. Our vision encompasses a world where talents are recognized, nurtured, and celebrated, driving growth and progress in the ever-evolving job market.</p>
                </div>
            </section>
        </>
    )
}

export default Vision;
