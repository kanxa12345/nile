import React from 'react'

function OrganizationChart() {
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="src/assets/images/background.webp" alt="background" />
                <div className="overlay absolute w-full z-10 h-full"></div>
                <div className="container py-12 relative z-20 mt-10">
                    <h1 className='text-6xl font-extrabold text-center text-white'><big className='text-yellow-300'>Organization</big> Chart</h1>
                </div>
            </section>
            <section className='py-12'>
                <div className="container flex flex-col items-center">
                    <h2 className='text-4xl font-bold pb-2 mb-8 relative pseudo-border'>Organization Chart</h2>
                    <img src="src/assets/images/organizational-chart.png" alt="organizational chart" />
                </div>
            </section>
        </>
    )
}

export default OrganizationChart;
