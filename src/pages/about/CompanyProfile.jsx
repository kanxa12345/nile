import React from 'react';
import LeaderData from './LeaderData';

function CompanyProfile() {
    const leaders = LeaderData;
    const ShowData = (props) => {
        const { imageUrl, postName, name, contact } = props;
        return (
            <>
                <div className='flex flex-col items-center' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                    <img className='h-[300px] w-full object-cover' src={`/src/assets/images/${imageUrl}`} alt="chairman" />
                    <div className='mt-1 text-gray-700'>
                        <h3 className='text-xl font-bold text-black'>{postName}</h3>
                        <p className='font-semibold'>{name}</p>
                        <span className='flex items-center'>
                            <i className='fa fa-phone me-2'></i><p>{contact}</p>
                        </span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className="bg-gradient-to-t from-black to-transparent opacity-50 absolute w-full z-10 h-full top-0 left-0"></div>
                <div className="container py-12 relative z-20 mt-10" data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                    <h1 className='md:text-6xl sm:text-4xl text-3xl font-extrabold text-center text-white'><big className='text-yellow-300'>Company</big> Profile</h1>
                </div>
            </section>
            {/* ---company profile area--- */}
            <section className="py-12">
                <div className="container flex flex-col items-center">
                    <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-8 relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Company Profile</h2>
                    <div className='w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                        <span className='flex justify-between gap-2 bg-gray-100 p-2'>
                            <b className='md:font-bold sm:font-semibold font-normal'>Company Name</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>Nile International Manpower Agency Pvt. Ltd.</p>
                        </span>
                        <span className='flex justify-between gap-2 p-2'>
                            <b className='md:font-bold sm:font-semibold font-normal'>Address</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>Sinamangal, Kathmandu, Nepal</p>
                        </span>
                        <span className='flex justify-between gap-2 bg-gray-100 p-2'>
                            <b className='md:font-bold sm:font-semibold font-normal'>Registration No.</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>58268/065/066</p>
                        </span>
                        <span className='flex justify-between gap-2 p-2'>
                            <b className='md:font-bold sm:font-semibold font-normal'>Labour Ministry licence No.</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>820/066/067</p>
                        </span>
                        <span className='flex justify-between gap-2 p-2 bg-gray-100'>
                            <b className='md:font-bold sm:font-semibold font-normal'>Telephone</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>00977-1-4478036, 4479844, 4499491, 4479843, 4479845</p>
                        </span>
                        <span className='flex justify-between gap-2 p-2'>
                            <b className='md:font-bold sm:font-semibold font-normal'>P.O.Box No.</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>2852</p>
                        </span>
                        <span className='flex justify-between gap-2 p-2 bg-gray-100'>
                            <b className='md:font-bold sm:font-semibold font-normal'>E-mail</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>nileintl@wlink.com.np, nileintl1@gmail.com, nileintl2008@yahoo.com</p>
                        </span>
                        <span className='flex justify-between gap-2 p-2'>
                            <b className='md:font-bold sm:font-semibold font-normal'>Website</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>www.nilegroupofcompanies.com</p>
                        </span>
                        <span className='flex justify-between gap-2 p-2 bg-gray-100'>
                            <b className='md:font-bold sm:font-semibold font-normal'>Official Bank</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>Prabhu Bank Ltd. Nepal</p>
                        </span>
                    </div>
                </div>
            </section>
            {/* ---director profile area--- */}
            <section className='py-12'>
                <div className='container flex flex-col items-center'>
                    <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-8 relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Director Profile</h2>
                    <div className='w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
                        {leaders.map((leader) => (
                            <ShowData key={leader.id} imageUrl={leader.image} postName={leader.post} name={leader.name} contact={leader.tel} />
                        ))}
                    </div>
                </div>
            </section>
            {/* ---capital strategy area--- */}
            <section className='py-12'>
                <div className="container flex flex-col items-center">
                    <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-8 relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Capital Strategy</h2>
                    <div className='w-full' data-aos="fade-left" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                        <span className='flex justify-between gap-2 p-2 bg-gray-100'>
                            <b className='md:font-bold sm:font-semibold font-normal'>Authorized Capital</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>Rs. 5,000,000.00</p>
                        </span>
                        <span className='flex justify-between gap-2 p-2'>
                            <b className='md:font-bold sm:font-semibold font-normal'>Paid up Capital</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>Rs.8,000,000.00</p>
                        </span>
                        <span className='flex justify-between gap-2 p-2 bg-gray-100'>
                            <b className='md:font-bold sm:font-semibold font-normal'>Issued</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'> Rs. 5,000,000.00</p>
                        </span>
                        <span className='flex justify-between gap-2 p-2'>
                            <b className='md:font-bold sm:font-semibold font-normal'>Auditor</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>Rajendra Bist</p>
                        </span>
                        <span className='flex justify-between gap-2 p-2 bg-gray-100'>
                            <b className='md:font-bold sm:font-semibold font-normal'>Insurance</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>National Life Insurance Company</p>
                        </span>
                    </div>
                </div>
            </section>
            {/* ---associate companies area--- */}
            <section className='py-12'>
                <div className='container flex flex-col items-center'>
                    <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-8 relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Associate Companies</h2>
                    <div className='w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                        <span className='flex justify-between gap-2 p-2 bg-gray-100'>
                            <b className='md:font-bold sm:font-semibold font-normal'>Name</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>Nile International Technical Training and Consultancy Pvt.Ltd.</p>
                        </span>
                        <span className='flex justify-between gap-2 p-2'>
                            <b className='md:font-bold sm:font-semibold font-normal'>Address</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>Sinamangal,Kathmandu,Nepal</p>
                        </span>
                        <span className='flex justify-between gap-2 p-2 bg-gray-100'>
                            <b className='md:font-bold sm:font-semibold font-normal'>Email</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>trainingnile@gmail.com</p>
                        </span>
                        <span className='flex justify-between gap-2 p-2'>
                            <b className='md:font-bold sm:font-semibold font-normal'>P.O. Box</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>9875</p>
                        </span>
                        <span className='flex justify-between gap-2 p-2 bg-gray-100'>
                            <b className='md:font-bold sm:font-semibold font-normal'>EPC</b>
                            <p className='text-gray-700 w-2/3 sm:text-base text-sm'>2467</p>
                        </span>
                    </div>
                </div>
            </section >
        </>
    )
}

export default CompanyProfile;
