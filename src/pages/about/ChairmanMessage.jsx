import React from 'react'

function ChairmanMessage() {
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="src/assets/images/background.webp" alt="background" />
                <div className="overlay absolute w-full z-10 h-full"></div>
                <div className="container py-12 relative z-20 mt-10">
                    <h1 className='text-6xl font-extrabold text-center text-white'><big className='text-yellow-300'>Message</big> From Chairman</h1>
                </div>
            </section>
            <section className='py-12'>
                <div className="container flex justify-between gap-4">
                    <div className='w-2/3 flex flex-col items-start'>
                        <h2 className='text-4xl font-bold pb-2 mb-6 text-black relative pseudo-border'>Chairman's Message</h2>
                        <div className='text-gray-700'>
                            <p className='text-xl font-medium text-black'>Namaste everyone,</p>
                            <p>Nile International Manpower Agency Pvt. Ltd. takes great pride in being recognized as one of the distinguished and esteemed manpower recruiting companies in Nepal. Our journey began in 2008 AD with a clear mission – to provide competent and honest Nepalese youths to overseas companies seeking exceptional talent</p>

                            <p className='my-2'>Throughout the years, we have embraced challenges with unwavering determination, allowing us to work with unparalleled enthusiasm and passion. Our commitment to excellence has been the driving force behind our continued success.</p>

                            <p>At Nile International Manpower Agency Pvt. Ltd., quality is at the core of everything we do. We take immense pride in upholding our reputation and delivering top-notch services. Our dedication to providing nothing short of the best has earned us the trust and admiration of our clients.</p>

                            <p className='my-2'>Our success story is not complete without acknowledging the meaningful relationships we have fostered with esteemed manpower recruiting companies worldwide. These collaborations have allowed us to extend our reach and offer exceptional opportunities to aspiring talents.</p>

                            <p>As the Chairman of this esteemed organization, I personally assure you that our team is driven to excel in every aspect of our services. Our commitment to delivering excellence remains unwavering, and we look forward to forging new partnerships and contributing to the success of businesses around the globe.</p>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <img  src="src/assets/images/chairman-image.avif" alt="chairman image" />
                        <h3 className='text-xl text-center font-bold mt-1'>Anita Lama</h3>
                        <p className='text-lg text-center font-semibold text-gray-700'>Chairman</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChairmanMessage;
