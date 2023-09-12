import React from 'react';

function ChairmanMessage() {
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className="bg-gradient-to-t from-black to-transparent opacity-50 absolute w-full z-10 h-full top-0 left-0"></div>
                <div className="container py-12 relative z-20 mt-10" data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                    <h1 className='md:text-6xl sm:text-4xl text-3xl font-extrabold text-center text-white'><big className='text-yellow-300'>Message</big> From Chairman</h1>
                </div>
            </section>
            <section className='py-12'>
                <div className="container flex md:flex-row flex-col justify-between gap-4">
                    <div className='md:w-2/3 w-full flex flex-col md:items-start items-center md:mb-0 mb-5'>
                        <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-8 text-black relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Chairman's Message</h2>
                        <div className='text-gray-700' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                            <p className='text-xl font-medium text-black'>Namaste everyone,</p>
                            <p>Nile International Manpower Agency Pvt. Ltd. takes great pride in being recognized as one of the distinguished and esteemed manpower recruiting companies in Nepal. Our journey began in 2008 AD with a clear mission – to provide competent and honest Nepalese youths to overseas companies seeking exceptional talent</p>

                            <p className='my-2'>Throughout the years, we have embraced challenges with unwavering determination, allowing us to work with unparalleled enthusiasm and passion. Our commitment to excellence has been the driving force behind our continued success.</p>

                            <p>At Nile International Manpower Agency Pvt. Ltd., quality is at the core of everything we do. We take immense pride in upholding our reputation and delivering top-notch services. Our dedication to providing nothing short of the best has earned us the trust and admiration of our clients.</p>

                            <p className='my-2'>Our success story is not complete without acknowledging the meaningful relationships we have fostered with esteemed manpower recruiting companies worldwide. These collaborations have allowed us to extend our reach and offer exceptional opportunities to aspiring talents.</p>

                            <p>As the Chairman of this esteemed organization, I personally assure you that our team is driven to excel in every aspect of our services. Our commitment to delivering excellence remains unwavering, and we look forward to forging new partnerships and contributing to the success of businesses around the globe.</p>
                        </div>
                    </div>
                    <div className='md:w-1/3 w-full' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                        <img  src="/src/assets/images/chairman-image.avif" alt="chairman image" />
                        <h3 className='text-xl text-center font-bold mt-1'>Anita Lama</h3>
                        <p className='text-lg text-center font-semibold text-gray-700'>Chairman</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChairmanMessage;
