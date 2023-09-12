import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='py-20 bg-gradient-to-r from-yellow-300 to-sky-300'>
            <div className="container flex flex-col items-center">
                <h1 className='lg:text-5xl md:text-4xl text-2xl font-bold'>404 - Page Not Found</h1>
                <p className=' md:text-2xl sm:text-xl text-sm my-6'>Sorry, the page you are looking for does not exist.</p>
                <Link to="/" className='bg-white py-2 px-3 rounded border border-black hover:bg-gray-100'>Return to Home</Link>
            </div>
        </section>
    )
}

export default NotFound;
