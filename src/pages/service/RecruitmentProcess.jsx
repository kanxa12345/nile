import React from 'react'

function RecruitmentProcess() {
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className="bg-gradient-to-t from-black to-transparent opacity-50 absolute w-full z-10 h-full top-0 left-0"></div>
                <div className="container py-12 relative z-20 mt-10" data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                    <h1 className='md:text-6xl sm:text-4xl text-3xl font-extrabold text-center text-white'><big className='text-yellow-300'>Recruitment</big> Process</h1>
                </div>
            </section>
            <section className="py-12">
                <div className="container flex lg:flex-row flex-col justify-between gap-4">
                    <div className='flex flex-col items-start lg:w-5/12 w-full lg:mb-0 mb-5'>
                        <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-6 relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Recruitment Process</h2>
                        <div className='text-gray-700'>
                            <p className='mb-2' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id itaque aut, nemo perspiciatis est quisquam, aspernatur quidem quam iure incidunt, dolorum placeat illo? Minima, sunt ratione modi assumenda asperiores voluptas?</p>
                            <ul className='bg-gray-100 p-2' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <li className='flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Advertisement</p>
                                </li>
                                <li className='flex items-center my-1'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Legal Documentation & Registration</p>
                                </li>
                                <li className='flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Prepares Schedule of Interview Dates</p>
                                </li>
                                <li className='flex items-center my-1'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Offer Letters, Medical & Relevant Documents</p>
                                </li>
                                <li className='flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Deployment & Begins Deployment Process</p>
                                </li>
                                <li className='flex items-center my-1'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Visa, Other Processes & Orientation</p>
                                </li>
                                <li className='flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Employment Contract Signing</p>
                                </li>
                                <li className='flex items-center my-1'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Pre-Departure Orientation</p>
                                </li>
                                <li className='flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Departure</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='lg:w-7/12 w-full' data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                        <img className='w-full' src="/src/assets/images/recruimentprocess-image.jpg" alt="recruitment process" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default RecruitmentProcess;
