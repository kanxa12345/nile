import React from 'react'

function WhoWeAre() {
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="src/assets/images/background.webp" alt="background" />
                <div className="overlay absolute w-full z-10 h-full"></div>
                <div className="container py-12 relative z-20 mt-10">
                    <h1 className='text-6xl font-extrabold text-center text-white'><big className='text-yellow-300'>Who</big> We Are</h1>
                </div>
            </section>
            <section className='py-12'>
                <div className="container grid grid-cols-2 gap-8">
                    <div>
                        <h2 className='text-4xl font-semibold'><big className='text-6xl font-bold'>15</big> YEARS OF <br /> EXPERIENCE</h2>
                        <p className='mb-2 mt-5 text-gray-700'><b className='text-black'>Nile International Manpower Agency Pvt. Ltd.</b>
                            is one of the leading and
                            trustworthy Manpower Recruiting Agencies with a long series of
                            experience and aptitude to select the right man in the right place and
                            supplying them abroad in right time. </p>
                        <p className='text-gray-700'>
                            we have been supplying skilled and unskilled manpower to Gulf countries
                            for over a decade. Our rapid growth can be attributed to a well-planned
                            manpower recruitment development strategy. At Nile International, we
                            take pride in selecting the right individuals for the right positions and
                            ensuring timely placements abroad.</p>
                    </div>
                    <div className='image-shape'>
                        <img className='h-[450px] w-full object-cover' src="src/assets/images/about-image1.png" alt="image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhoWeAre;
