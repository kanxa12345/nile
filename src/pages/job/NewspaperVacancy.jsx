import React from 'react';
import Images from './NewspaperVacancyImages';
import ImageModal from './ImageModal';

function NewspaperVacancy() {
    const images = Images;
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="src/assets/images/background.webp" alt="background" />
                <div className="overlay absolute w-full z-10 h-full"></div>
                <div className="container py-12 relative z-20 mt-10">
                    <h1 className='text-6xl font-extrabold text-center text-white'><big className='text-yellow-300'>Newspaper</big> Vacancy</h1>
                </div>
            </section>
            <section className='py-12'>
                <div className='container flex flex-col items-center'>
                    <h2 className='text-4xl font-bold pb-2 mb-8 relative pseudo-border'>Newspaper  Vacancy Available</h2>
                    <div className='grid grid-cols-3 gap-4'>
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

export default NewspaperVacancy;