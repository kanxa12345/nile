import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
    return (
        <>
            {/* ---unskilled area--- */}
            <section className='py-12 relative'>
                <img className='absolute top-0 left-0 h-full w-full z-[-2]' src="/src/assets/images/category-images/bg1.webp" alt="background" />
                <div className='bg-black absolute w-full h-full top-0 left-0 z-[-1] opacity-75'></div>
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className='flex flex-col md:items-start items-center md:mb-0 mb-5'>
                            <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-6 text-white relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Unskilled</h2>
                            <div className='text-white' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ratione omnis veniam cumque sequi enim libero blanditiis facilis eos accusantium rem voluptas voluptatum ipsum architecto distinctio commodi voluptates labore adipisci nam! Itaque, similique asperiores pariatur cum molestiae officia voluptatibus ex?</p>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, non eveniet ipsa distinctio fuga necessitatibus autem cum minus labore! Esse eius, modi et delectus repellat in quibusdam veritatis, fugit ea nulla velit. Maxime inventore quasi tempore ea impedit officiis nihil in dolores magni, culpa nam? Eius eligendi laudantium rerum repellendus!</p>
                                <Link to="/Unskilled" className='bg-sky-500 text-white py-2 px-3 rounded hover:bg-sky-600 hover:border hover:border-sky-600'>View More <i className="fa fa-chevron-right ms-1"></i></Link>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='mb-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <img className='h-56 w-full object-cover' src="/src/assets/images/category-images/cleaners.webp" alt="cleaners" />
                                <h4 className='text-xl font-semibold text-center text-yellow-400'>Cleaner</h4>
                            </div>
                            <div className='mb-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <img className='h-56 w-full object-cover' src="/src/assets/images/category-images/labors.webp" alt="labors" />
                                <h4 className='text-xl font-semibold text-center text-yellow-400'>Labor</h4>
                            </div>
                            <div className='mb-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <img className='h-56 w-full object-cover' src="/src/assets/images/category-images/watchman.avif" alt="watchman" />
                                <h4 className='text-xl font-semibold text-center text-yellow-400'>Watchman</h4>
                            </div>
                            <div className='mb-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <img className='h-56 w-full object-cover' src="/src/assets/images/category-images/farmers.webp" alt="farmers" />
                                <h4 className='text-xl font-semibold text-center text-yellow-400'>Farmer</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---semi-skilled area--- */}
            <section className='py-12 relative'>
                <img className='absolute top-0 left-0 h-full w-full z-[-2]' src="/src/assets/images/category-images/bg2.webp" alt="background" />
                <div className='bg-black absolute w-full h-full top-0 left-0 z-[-1] opacity-75'></div>
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className='flex flex-col md:items-start items-center md:mb-0 mb-5'>
                            <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-6 text-white relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Semi-Skilled</h2>
                            <div className='text-white' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ratione omnis veniam cumque sequi enim libero blanditiis facilis eos accusantium rem voluptas voluptatum ipsum architecto distinctio commodi voluptates labore adipisci nam! Itaque, similique asperiores pariatur cum molestiae officia voluptatibus ex?</p>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, non eveniet ipsa distinctio fuga necessitatibus autem cum minus labore! Esse eius, modi et delectus repellat in quibusdam veritatis, fugit ea nulla velit. Maxime inventore quasi tempore ea impedit officiis nihil in dolores magni, culpa nam? Eius eligendi laudantium rerum repellendus!</p>
                                <Link to="/SemiSkilled" className='bg-sky-500 text-white py-2 px-3 rounded hover:bg-sky-600 hover:border hover:border-sky-600'>View More <i className="fa fa-chevron-right ms-1"></i></Link>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='mb-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <img className='h-56 w-full object-cover' src="/src/assets/images/category-images/carpenter.webp" alt="carpenter" />
                                <h4 className='text-xl font-semibold text-center text-yellow-400'>Carpenter</h4>
                            </div>
                            <div className='mb-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <img className='h-56 w-full object-cover' src="/src/assets/images/category-images/fabricator.webp" alt="fabricator" />
                                <h4 className='text-xl font-semibold text-center text-yellow-400'>Fabricator</h4>
                            </div>
                            <div className='mb-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <img className='h-56 w-full object-cover' src="/src/assets/images/category-images/laundry.webp" alt="laundry" />
                                <h4 className='text-xl font-semibold text-center text-yellow-400'>Laundry</h4>
                            </div>
                            <div className='mb-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <img className='h-56 w-full object-cover' src="/src/assets/images/category-images/tailors.webp" alt="tailors" />
                                <h4 className='text-xl font-semibold text-center text-yellow-400'>Tailor</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---skilled area--- */}
            <section className='py-12 relative'>
                <img className='absolute top-0 left-0 h-full w-full z-[-2]' src="/src/assets/images/category-images/bg3.webp" alt="background" />
                <div className='bg-black absolute w-full h-full top-0 left-0 z-[-1] opacity-75'></div>
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className='flex flex-col md:items-start items-center md:mb-0 mb-5'>
                            <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-6 text-white relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Skilled</h2>
                            <div className='text-white' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ratione omnis veniam cumque sequi enim libero blanditiis facilis eos accusantium rem voluptas voluptatum ipsum architecto distinctio commodi voluptates labore adipisci nam! Itaque, similique asperiores pariatur cum molestiae officia voluptatibus ex?</p>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, non eveniet ipsa distinctio fuga necessitatibus autem cum minus labore! Esse eius, modi et delectus repellat in quibusdam veritatis, fugit ea nulla velit. Maxime inventore quasi tempore ea impedit officiis nihil in dolores magni, culpa nam? Eius eligendi laudantium rerum repellendus!</p>
                                <Link to="/Skilled" className='bg-sky-500 text-white py-2 px-3 rounded hover:bg-sky-600 hover:border hover:border-sky-600'>View More <i className="fa fa-chevron-right ms-1"></i></Link>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='mb-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <img className='h-56 w-full object-cover' src="/src/assets/images/category-images/paramedics.webp" alt="paramedics" />
                                <h4 className='text-xl font-semibold text-center text-yellow-400'>Paramedics</h4>
                            </div>
                            <div className='mb-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <img className='h-56 w-full object-cover' src="/src/assets/images/category-images/driver.webp" alt="driver" />
                                <h4 className='text-xl font-semibold text-center text-yellow-400'>Driver</h4>
                            </div>
                            <div className='mb-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <img className='h-56 w-full object-cover' src="/src/assets/images/category-images/plumber.webp" alt="plumber" />
                                <h4 className='text-xl font-semibold text-center text-yellow-400'>Plumber</h4>
                            </div>
                            <div className='mb-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <img className='h-56 w-full object-cover' src="/src/assets/images/category-images/electricians.webp" alt="electricians" />
                                <h4 className='text-xl font-semibold text-center text-yellow-400'>Electrician</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---high-skilled area--- */}
            <section className='py-12 relative'>
                <img className='absolute top-0 left-0 h-full w-full z-[-2]' src="/src/assets/images/category-images/bg4.webp" alt="background" />
                <div className='bg-black absolute w-full h-full top-0 left-0 z-[-1] opacity-75'></div>
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className='flex flex-col md:items-start items-center md:mb-0 mb-5'>
                            <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-6 text-white relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>High Skilled</h2>
                            <div className='text-white' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ratione omnis veniam cumque sequi enim libero blanditiis facilis eos accusantium rem voluptas voluptatum ipsum architecto distinctio commodi voluptates labore adipisci nam! Itaque, similique asperiores pariatur cum molestiae officia voluptatibus ex?</p>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, non eveniet ipsa distinctio fuga necessitatibus autem cum minus labore! Esse eius, modi et delectus repellat in quibusdam veritatis, fugit ea nulla velit. Maxime inventore quasi tempore ea impedit officiis nihil in dolores magni, culpa nam? Eius eligendi laudantium rerum repellendus!</p>
                                <Link to="/HighSkilled" className='bg-sky-500 text-white py-2 px-3 rounded hover:bg-sky-600 hover:border hover:border-sky-600'>View More <i className="fa fa-chevron-right ms-1"></i></Link>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='mb-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <img className='h-56 w-full object-cover' src="/src/assets/images/category-images/doctor.webp" alt="doctor" />
                                <h4 className='text-xl font-semibold text-center text-yellow-400'>Doctor</h4>
                            </div>
                            <div className='mb-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <img className='h-56 w-full object-cover' src="/src/assets/images/category-images/engineer.webp" alt="engineer" />
                                <h4 className='text-xl font-semibold text-center text-yellow-400'>Engineer</h4>
                            </div>
                            <div className='mb-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <img className='h-56 w-full object-cover' src="/src/assets/images/category-images/professor.webp" alt="professor" />
                                <h4 className='text-xl font-semibold text-center text-yellow-400'>Professor</h4>
                            </div>
                            <div className='mb-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                                <img className='h-56 w-full object-cover' src="/src/assets/images/category-images/geologist.webp" alt="geologist" />
                                <h4 className='text-xl font-semibold text-center text-yellow-400'>Geologist</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Categories;
