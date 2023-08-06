import React from 'react';
import { Link } from 'react-router-dom';

function Intro() {
    return (
        <section className='py-12'>
            <div className='container flex flex-col items-center'>
                <h2 className='text-4xl font-bold text-center pb-2 mb-6 relative pseudo-border'>Who We Are</h2>
                <div>
                    <h3 className='text-center text-2xl font-bold'>Nile International Manpower Agency Pvt. Ltd.</h3>
                    <p className='text-gray-700 mb-5'>A leading name among Manpower Recruiting Agencies in Nepal. With a wealth of experience and expertise, we specialize in selecting the perfect candidates and providing overseas opportunities that align with their skills and aspirations. Established under the company Act 2053,  our trustworthy agency has quickly made its mark in the industry. Our founders, enriched by years of experience across Gulf countries, have been supplying skilled and unskilled manpower to the Gulf region for over a decade. Our rapid growth is a testament to our strategic recruitment approach, placing skilled individuals in multinational companies, benefiting both candidates and the nation's economy. Join us for an exciting journey of global opportunities and career growth.</p>
                    <Link to="/WhoWeAre" className='bg-sky-500 text-white py-2 px-3 rounded hover:bg-sky-600 hover:border hover:border-sky-600'>Read More <i className="fa fa-chevron-right ms-1"></i></Link>
                </div>
            </div>
        </section>
    )
}

export default Intro;
