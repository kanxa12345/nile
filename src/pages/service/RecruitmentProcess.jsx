import React from 'react'

function RecruitmentProcess() {
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="src/assets/images/background.webp" alt="background" />
                <div className="overlay absolute w-full z-10 h-full"></div>
                <div className="container py-12 relative z-20 mt-10">
                    <h1 className='text-6xl font-extrabold text-center text-white'><big className='text-yellow-300'>Recruitment</big> Process</h1>
                </div>
            </section>
            <section className="py-12">
                <div className="container flex justify-between gap-4">
                    <div className='flex flex-col items-start w-5/12'>
                        <h2 className='text-4xl font-bold pb-2 mb-6 relative pseudo-border'>Recruitment Process</h2>
                        <ul className='text-gray-700 text-lg'>
                            <li><i class="fa-sharp fa-solid fa-check me-2"></i>Advertisement</li>
                            <li><i class="fa-sharp fa-solid fa-check me-2"></i>Legal Documentation & Registration</li>
                            <li><i class="fa-sharp fa-solid fa-check me-2"></i>Prepares Schedule of Interview Dates</li>
                            <li><i class="fa-sharp fa-solid fa-check me-2"></i>Offer Letters, Medical & Relevant Documents</li>
                            <li><i class="fa-sharp fa-solid fa-check me-2"></i>Deployment & Begins Deployment Process</li>
                            <li><i class="fa-sharp fa-solid fa-check me-2"></i>Visa, Other Processes & Orientation</li>
                            <li><i class="fa-sharp fa-solid fa-check me-2"></i>Employment Contract Signing</li>
                            <li><i class="fa-sharp fa-solid fa-check me-2"></i>Pre-Departure Orientation</li>
                            <li><i class="fa-sharp fa-solid fa-check me-2"></i>Departure</li>
                        </ul>
                    </div>
                    <div className='w-7/12'>
                        <img className='w-full' src="src/assets/images/recruimentprocess-image.jpg" alt="recruitment process" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default RecruitmentProcess;
