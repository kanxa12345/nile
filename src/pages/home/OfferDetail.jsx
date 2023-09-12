import React from 'react';
import OfferData from './OfferData';
import { useParams } from 'react-router-dom';
import background from '/src/assets/images/background.webp';

const OfferDetail = () => {
    const { id } = useParams();
    const offerId = parseInt(id);

    const data = OfferData.find(offer => offer.id === offerId);
    const offerTitle = data.title;
    const words = offerTitle.split(' ');
    const firstWord = words[0];
    const otherWords = words.slice(1).join(' ');

    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src={background} alt="background" />
                <div className="bg-gradient-to-t from-black to-transparent opacity-50 absolute w-full z-10 h-full top-0 left-0"></div>
                <div className="container py-12 relative z-20 mt-10" data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                    <h1 className='md:text-6xl sm:text-4xl text-3xl font-extrabold text-center text-white'><big className='text-yellow-300'>{firstWord}</big> {otherWords}</h1>
                </div>
            </section>
            <section className="py-12">
                <div className="container grid md:grid-cols-2 grid-cols-1 gap-5">
                    <div className='flex flex-col md:items-start items-center md:mb-0 mb-5'>
                        <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-6 relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>{offerTitle}</h2>
                        <p className='text-gray-700' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true' data-aos-delay="200">{data.description}</p>
                    </div>
                    <div>
                        <img className='h-96 w-full object-cover rounded-xl' src={data.image} alt={offerTitle} data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay="200" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default OfferDetail;
