import React from 'react'

function CompanyProfile() {
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="src/assets/images/background.webp" alt="background" />
                <div className="overlay absolute w-full z-10 h-full"></div>
                <div className="container py-12 relative z-20 mt-10">
                    <h1 className='text-6xl font-extrabold text-center text-white'><big className='text-yellow-300'>Company</big> Profile</h1>
                </div>
            </section>
            <section className="py-12">
                <div className="container flex flex-col items-center">
                    <h2 className='text-4xl font-bold pb-2 mb-8 relative pseudo-border'>Company Profile</h2>
                    <div className='w-full'>
                        <span className='flex justify-between bg-gray-100 p-2'>
                            <b>Company Name</b>
                            <p className='text-gray-700 w-2/3'>Nile International Manpower Agency Pvt. Ltd.</p>
                        </span>
                        <span className='flex justify-between p-2'>
                            <b>Address</b>
                            <p className='text-gray-700 w-2/3'>Sinamangal, Kathmandu, Nepal</p>
                        </span>
                        <span className='flex justify-between bg-gray-100 p-2'>
                            <b>Registration No.</b>
                            <p className='text-gray-700 w-2/3'>58268/065/066</p>
                        </span>
                        <span className='flex justify-between p-2'>
                            <b>Labour Ministry licence No.</b>
                            <p className='text-gray-700 w-2/3'>820/066/067</p>
                        </span>
                        <span className='flex justify-between p-2 bg-gray-100'>
                            <b>Telephone</b>
                            <p className='text-gray-700 w-2/3'>00977-1-4478036,4479844,4499491,4479843,,4479845</p>
                        </span>
                        <span className='flex justify-between p-2'>
                            <b>P.O.Box No.</b>
                            <p className='text-gray-700 w-2/3'>2852</p>
                        </span>
                        <span className='flex justify-between p-2 bg-gray-100'>
                            <b>E-mail</b>
                            <p className='text-gray-700 w-2/3'>nileintl@wlink.com.np,nileintl1@gmail.com,nileintl2008@yahoo.com</p>
                        </span>
                        <span className='flex justify-between p-2'>
                            <b>Website</b>
                            <p className='text-gray-700 w-2/3'>www.nilegroupofcompanies.com</p>
                        </span>
                        <span className='flex justify-between p-2 bg-gray-100'>
                            <b>Official Bank</b>
                            <p className='text-gray-700 w-2/3'>Prabhu Bank Ltd. Nepal</p>
                        </span>
                    </div>
                </div>
            </section>
            <section className='py-12'>
                <div className='container flex flex-col items-center'>
                    <h2 className='text-4xl font-bold pb-2 mb-8 relative pseudo-border'>Director Profile</h2>
                    <div className='w-full grid grid-cols-3 gap-8'>
                        <div className='flex flex-col items-center'>
                            <img className='h-[300px] w-full object-cover' src="src/assets/images/chairman-image.avif" alt="chairman" />
                            <div className='mt-1 text-gray-700'>
                                <h3 className='text-xl font-bold text-black'>Chairman</h3>
                                <p className='font-semibold'>Anita Lama</p>
                                <p><i className='fa fa-phone me-2'></i>+977-9851051559, 01-447985</p>
                            </div>
                        </div>

                        <div className='flex flex-col items-center'>
                            <img className='h-[300px] w-full object-cover' src="src/assets/images/md-image.avif" alt="managaig director" />
                            <div className='mt-1 text-gray-700'>
                                <h3 className='text-xl font-bold text-black'>Managing Director</h3>
                                <p className='font-semibold'>Mohan Tamang</p>
                                <p><i className='fa fa-phone me-2'></i>+977-9851038014</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='h-[300px] w-full object-cover' src="src/assets/images/advisor-image.avif" alt="advisor" />
                            <div className='mt-1 text-gray-700'>
                                <h3 className='text-xl font-bold text-black'>Advisor</h3>
                                <p className='font-semibold'>Advocate Khadindra Katuwal</p>
                                <p><i className='fa fa-phone me-2'></i>+977-9851081944</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-12'>
                <div className="container flex flex-col items-center">
                    <h2 className='text-4xl font-bold pb-2 mb-8 relative pseudo-border'>Capital Strategy</h2>
                    <div className='w-full'>
                        <span className='flex justify-between p-2 bg-gray-100'>
                            <b>Authorized Capital</b>
                            <p className='text-gray-700 w-2/3'>Rs. 5,000,000.00</p>
                        </span>
                        <span className='flex justify-between p-2'>
                            <b>Paid up Capital</b>
                            <p className='text-gray-700 w-2/3'>Rs.8,000,000.00</p>
                        </span>
                        <span className='flex justify-between p-2 bg-gray-100'>
                            <b>Issued</b>
                            <p className='text-gray-700 w-2/3'> Rs. 5,000,000.00</p>
                        </span>
                        <span className='flex justify-between p-2'>
                            <b>Auditor</b>
                            <p className='text-gray-700 w-2/3'>Rajendra Bist</p>
                        </span>
                        <span className='flex justify-between p-2 bg-gray-100'>
                            <b>Insurance</b>
                            <p className='text-gray-700 w-2/3'>National Life Insurance Company</p>
                        </span>
                    </div>
                </div>
            </section>
            <section className='py-12'>
                <div className='container flex flex-col items-center'>
                    <h2 className='text-4xl font-bold pb-2 mb-8 relative pseudo-border'>Associate Companies</h2>
                    <div className='w-full'>
                        <span className='flex justify-between p-2 bg-gray-100'>
                            <b>Name</b>
                            <p className='text-gray-700 w-2/3'>Nile International Technical Training and Consultancy Pvt.Ltd.</p>
                        </span>
                        <span className='flex justify-between p-2'>
                            <b>Address</b>
                            <p className='text-gray-700 w-2/3'>Sinamangal,Kathmandu,Nepal</p>
                        </span>
                        <span className='flex justify-between p-2 bg-gray-100'>
                            <b>Email</b>
                            <p className='text-gray-700 w-2/3'>trainingnile@gmail.com</p>
                        </span>
                        <span className='flex justify-between p-2'>
                            <b>P.O. Box</b>
                            <p className='text-gray-700 w-2/3'>9875</p>
                        </span>
                        <span className='flex justify-between p-2 bg-gray-100'>
                            <b>EPC</b>
                            <p className='text-gray-700 w-2/3'>2467</p>
                        </span>
                    </div>
                </div>
            </section >
        </>
    )
}

export default CompanyProfile;
