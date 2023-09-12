import React from 'react'

function RequiredDocument() {
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className="bg-gradient-to-t from-black to-transparent opacity-50 absolute w-full z-10 h-full top-0 left-0"></div>
                <div className="container py-12 relative z-20 mt-10" data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                    <h1 className='md:text-6xl sm:text-4xl text-3xl font-extrabold text-center text-white'><big className='text-yellow-300'>Required</big> Document</h1>
                </div>
            </section>
            <section className='py-12'>
                <div className="container flex flex-col items-center">
                    <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-10 relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Required Document</h2>
                    <div className='grid lg:grid-cols-3 grid-cols-1'>
                        <div className='w-full p-2 bg-gray-100' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                            <h3 className='sm:text-xl text-lg font-semibold mb-4'>Required document for Qatar, Kuwait, Bahrain, Oman & UAE</h3>
                            <ul>
                                <li className='text-gray-700'><i class="fa-sharp fa-solid fa-check me-2"></i>Demand Letter</li>
                                <li className='text-gray-700 my-1'><i class="fa-sharp fa-solid fa-check me-2"></i>Power of Attorney</li>
                                <li className='text-gray-700'><i class="fa-sharp fa-solid fa-check me-2"></i>Employment Contract</li>
                                <li className='text-gray-700 my-1'><i class="fa-sharp fa-solid fa-check me-2"></i>Guarantee Letter</li>
                                <li className='text-gray-700'><i class="fa-sharp fa-solid fa-check me-2"></i>Agency Agreement</li>
                            </ul>
                        </div>
                        <div className='w-full lg:shadow-[0_0_30px_2px_rgba(0,0,0,0.3)] shadow-none p-2 relative z-[1] lg:my-0 my-5 lg:border-none border' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                            <h3 className='sm:text-xl text-lg font-semibold mb-4'>Required document for Malaysia</h3>
                            <ul>
                                <li className='text-gray-700 flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>KDN approval (from Labour Ministry)</p>
                                </li>
                                <li className='text-gray-700 my-1 flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Translation letter (from Labour Ministry or Home Ministry)</p>
                                </li>
                                <li className='text-gray-700 flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Demand Letter</p>
                                </li>
                                <li className='text-gray-700 my-1 flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Power of Attonery</p>
                                </li>
                                <li className='text-gray-700 flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Agency Agreement</p>
                                </li>
                                <li className='text-gray-700 my-1 flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Employment Contract</p>
                                </li>
                                <li className='text-gray-700 flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>His Excellency ( Letter written by employer company to Malaysian Consulate in Nepal)</p>
                                </li>
                                <li className='text-gray-700 my-1 flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Letter from Royal Nepal Embassy to Labour Department Nepal</p>
                                </li>
                                <li className='text-gray-700 flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>Notary Public ( Notari awam)</p>
                                </li>
                                <li className='text-gray-700 my-1 flex items-center'>
                                    <i class="fa-sharp fa-solid fa-check me-2"></i>
                                    <p>ID copy of authorized person of Employer Company</p>
                                </li>
                            </ul>
                        </div>
                        <div className='w-full p-2 bg-gray-100' data-aos="fade-left" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                            <h3 className='sm:text-xl text-lg font-semibold mb-4'>Required document for Saudi Arabia</h3>
                            <ul>
                                <li className='text-gray-700'><i class="fa-sharp fa-solid fa-check me-2"></i>Demand Letter</li>
                                <li className='text-gray-700 my-1'><i class="fa-sharp fa-solid fa-check me-2"></i>Visa Slip</li>
                                <li className='text-gray-700'><i class="fa-sharp fa-solid fa-check me-2"></i>Power of Attorney</li>
                                <li className='text-gray-700 my-1'><i class="fa-sharp fa-solid fa-check me-2"></i>Employment Contract</li>
                                <li className='text-gray-700'><i class="fa-sharp fa-solid fa-check me-2"></i>Guarantee Letter</li>
                                <li className='text-gray-700 my-1'><i class="fa-sharp fa-solid fa-check me-2"></i>Agency Agreement</li>
                                <li className='text-gray-700'><i class="fa-sharp fa-solid fa-check me-2"></i>Commercial Registration</li>
                                <li className='text-gray-700 my-1'><i class="fa-sharp fa-solid fa-check me-2"></i>Consulate Authorization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RequiredDocument;
