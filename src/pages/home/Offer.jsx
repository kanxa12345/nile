import React from 'react';
import OfferData from './OfferData';

function Offer() {
    const datas = OfferData;
    const ShowData = (props) => {
        const { imageUrl, title } = props;
        return (
            <div className='mb-6'>
                <a href="#" className='relative custom-hover'>
                    <img className='h-64 w-full object-cover' src={`src/assets/images/offer-image/${imageUrl}`} alt="image" />
                </a>
                <h3 className='text-center text-xl text-yellow-400 font-bold mt-4'>{title}</h3>
            </div>
        )
    }
    return (
        <section className='py-12 offer-section relative'>
            <img className='absolute w-full h-full top-0 left-0' src="/src/assets/images/homepage-image/bg1.jpg" alt="background-images" />
            <div className="overlay absolute w-full h-full"></div>
            <div className='container flex flex-col items-center relative z-10'>
                <h2 className='text-4xl font-bold text-center pb-2 mb-8 relative pseudo-border text-white'>What We Offer</h2>
                <div className='grid grid-cols-3 gap-4'>
                    {datas.map((data) => (
                        <ShowData key={data.id} imageUrl={data.image} title={data.title} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Offer;
