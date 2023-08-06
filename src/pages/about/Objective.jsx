import React from 'react'

function Objective() {
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="src/assets/images/background.webp" alt="background" />
                <div className="overlay absolute w-full z-10 h-full"></div>
                <div className="container py-12 relative z-20 mt-10">
                    <h1 className='text-6xl font-extrabold text-center text-white'><big className='text-yellow-300'>Our</big> Objective</h1>
                </div>
            </section>
            <section className="py-12">
                <div className="container flex flex-col items-center">
                    <h2 className='text-4xl font-bold pb-2 mb-8 relative pseudo-border'>Objective</h2>
                    <div>
                        <span className='inline-block mb-3'>
                            <b>Recruitment Process</b>
                            <p className='text-gray-700'>Our primary objective is to optimize the recruitment process for both employers and job seekers. By leveraging technology, data-driven insights, and streamlined procedures, we aim to reduce time-to-hire, enhance efficiency, and ensure a seamless experience for all parties involved</p>
                        </span>
                        <span className='inline-block mb-3'>
                            <b>Enhance Candidate Experience</b>
                            <p className='text-gray-700'>For job seekers, we strive to create a positive and empowering experience throughout the job search journey. Our objective is to offer valuable resources, personalized guidance, and support to help candidates showcase their strengths and find the right career fit</p>
                        </span>
                        <span>
                            <b>Deliver Top-Tier Talent</b>
                            <p className='text-gray-700'>We are committed to providing our clients with access to the best talent in the market. Our objective is to thoroughly understand the unique requirements of each organization and deliver candidates who not only possess the required skills but also align with the company's values and culture</p>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Objective;
