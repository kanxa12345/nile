import React from 'react';
import ImageModal from '../job/ImageModal';
import Images from './LegalDocumentImages';

function LegalDocument() {
    const images = Images;
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className="bg-gradient-to-t from-black to-transparent opacity-50 absolute w-full z-10 h-full top-0 left-0"></div>
                <div className="container py-12 relative z-20 mt-10" data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                    <h1 className='md:text-6xl sm:text-4xl text-3xl font-extrabold text-center text-white'><big className='text-yellow-300'>Legal</big> Documents</h1>
                </div>
            </section>
            <section className='py-12'>
                <div className='container flex flex-col items-center'>
                    <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-8 relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>Legal Documents</h2>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                        {images.map((image, index) => (
                            <ImageModal imageUrl={image.imageUrl} images={images} index={index} key={image.id} />
                        ))}
                    </div>
                </div>
                <div></div>
            </section>
        </>
    )
}

export default LegalDocument;