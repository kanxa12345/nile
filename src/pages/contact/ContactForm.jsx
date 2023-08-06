import React from 'react'

function ContactForm() {
    return (
        <section className='py-12'>
            <div className="container grid grid-cols-2 gap-4">
                <div className='shadow-[0_0_30px_2px_rgba(0,0,0,0.3)] p-5 rounded-xl'>
                    <h2 className='text-2xl font-semibold mb-4'>ENQUIRE WITH US</h2>
                    <form>
                        <div className='flex flex-col items-start'>
                            <label className='mb-1 relative' htmlFor="name">Name<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{fontSize: '5px'}}></i></label>
                            <input className='p-3 bg-gray-200 rounded focus:outline outline-sky-500 w-full' type="text" id='name' name='name' placeholder='Your Name' required />
                        </div>
                        <div className='flex flex-col items-start my-4'>
                            <label className='mb-1 relative' htmlFor="email">Email<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{fontSize: '5px'}}></i></label>
                            <input className='p-3 bg-gray-200 rounded focus:outline outline-sky-500 w-full' type="email" id='email' name='email' placeholder='Your Email' required />
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className='mb-1 relative' htmlFor="mobile">Mobile No.<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{fontSize: '5px'}}></i></label>
                            <input className='p-3 bg-gray-200 rounded focus:outline outline-sky-500 w-full' type="tel" id='mobile' name='mobile' placeholder='Your Mobile No.' required />
                        </div>
                        <div className='flex flex-col items-start my-4'>
                            <label className='mb-1 relative' htmlFor="subject">Subject<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{fontSize: '5px'}}></i></label>
                            <input className='p-3 bg-gray-200 rounded focus:outline outline-sky-500 w-full' type="text" id='subject' name='subject' placeholder='Subject' required />
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className='mb-1 relative' htmlFor="message">Message<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{fontSize: '5px'}}></i></label>
                            <textarea className='p-3 bg-gray-200 focus:outline outline-sky-500 w-full' type="text" id='message' name='message' rows='5' placeholder='Your Message' required />
                        </div>
                        <input className='bg-sky-500 text-white py-2 px-3 rounded hover:bg-sky-600 hover:border hover:border-sky-600 cursor-pointer my-3' type="submit" value='SUBMIT' />
                    </form>
                </div>
                <div>
                    <div className='mb-6'>
                        <h3 className='text-xl font-semibold mb-4'>Nile International Manpower Agency Pvt. Ltd.</h3>
                        <span className="flex items-center font-regular text-gray-700">
                            <i className="fa-solid fa-location-dot me-2"></i>
                            <p>Sinamangal, Kathmandu, Nepal</p>
                        </span>
                        <span className="flex items-center font-regular text-gray-700 my-2">
                            <i className="fa-solid fa-mobile me-2"></i>
                            <p>+977-9851051559</p>
                        </span>
                        <span className="flex items-center font-regular text-gray-700">
                            <i className="fa-solid fa-phone me-2"></i>
                            <p>+977-1-4599491,4578036</p>
                        </span>
                        <span className="flex items-center font-regular text-gray-700 my-2">
                            <i className="fa-solid fa-fax me-2"></i>
                            <p>00977-1-4594529</p>
                        </span>
                        <span className="flex items-center font-regular text-gray-700">
                            <i className="fa-solid fa-envelope me-2"></i>
                            <p>nileintl@wlink.com.np,<br /> nileintl1@gmail.com,<br />nileintl2008@yahoo.com</p>
                        </span>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-4'>Nile International Technical Training Center</h3>
                        <span className="flex items-center font-regular text-gray-700">
                            <i className="fa-solid fa-location-dot me-2"></i>
                            <p>Sinamangal, Kathmandu, Nepal</p>
                        </span>
                        <span className="flex items-center font-regular text-gray-700 my-2">
                            <i className="fa-solid fa-phone me-2"></i>
                            <p>+977-1-4594529</p>
                        </span>
                        <span className="flex items-center font-regular text-gray-700">
                            <i className="fa-solid fa-envelope me-2"></i>
                            <p>trainingnile@gmail.com</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;
