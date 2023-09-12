import React from 'react'

const ClientCandidateMatching = () => {
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className="bg-gradient-to-t from-black to-transparent opacity-50 absolute w-full z-10 h-full top-0 left-0"></div>
                <div className="container py-12 relative z-20 mt-10" data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                    <h1 className='md:text-6xl sm:text-4xl text-3xl font-extrabold text-center text-white'><big className='text-yellow-300'>Client-Candidate</big> Matching</h1>
                </div>
            </section>
            <section className="py-12">
                <div className="container flex md:flex-row flex-col justify-between gap-4">
                    <div className='flex flex-col items-start lg:w-1/2 w-full lg:mb-0 mb-5'>
                        <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-6 relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Client-Candidate Matching</h2>
                        <div className='text-gray-700'>
                            <p className='mb-2' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum dignissimos modi nulla ipsa, esse minus in nihil inventore. Voluptate vitae officiis suscipit harum a molestiae ipsam eius expedita qui iusto.</p>
                            <ul className='bg-gray-100 p-2' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <li className='flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Candidate Registration</p>
                                </li>
                                <li className='flex items-center my-1'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Client Job Listing</p>
                                </li>
                                <li className='flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Pre-Screening and Matching</p>
                                </li>
                                <li className='flex items-center my-1'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Candidate Shortlisting</p>
                                </li>
                                <li className='flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Client Review and Interview</p>
                                </li>
                                <li className='flex items-center my-1'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Offer and Placement</p>
                                </li>
                                <li className='flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Post-Placement Support</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full' data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                        <img className='w-full' src="/src/assets/images/client-candidate-matching-image.jpg" alt="client candidate matching" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClientCandidateMatching;
