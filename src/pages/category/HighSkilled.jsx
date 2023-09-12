import React from 'react';
import HighSkilledData from './HighSkilledData';

const HighSkilled = () => {
    const datas = HighSkilledData;
    const ShowData = (props) => {
        const { imageUrl, title } = props;
        return (
            <div className='mb-4' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                <img className='h-56 w-full object-cover' src={`/src/assets/images/category-images/${imageUrl}`} alt={title.toLowerCase()} />
                <h4 className='text-xl font-semibold text-center'>{title}</h4>
            </div>
        )
    }
    return (
        <>
            <section className='py-20 relative'>
                <img className='absolute h-full w-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className="bg-gradient-to-t from-black to-transparent opacity-50 absolute w-full z-10 h-full top-0 left-0"></div>
                <div className="container py-12 relative z-20 mt-10" data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                    <h1 className='md:text-6xl sm:text-4xl text-3xl font-extrabold text-center text-white'><big className='text-yellow-300'>High-Skilled</big> Category</h1>
                </div>
            </section>
            <section className="py-12">
                <div className="container flex flex-col items-center">
                    <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold pb-2 mb-6 relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>High-Skilled</h2>
                    <div className='text-gray-700' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true' data-aos-delay='200'>
                        <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ratione omnis veniam cumque sequi enim libero blanditiis facilis eos accusantium rem voluptas voluptatum ipsum architecto distinctio commodi voluptates labore adipisci nam! Itaque, similique asperiores pariatur cum molestiae officia voluptatibus ex?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, non eveniet ipsa distinctio fuga necessitatibus autem cum minus labore! Esse eius, modi et delectus repellat in quibusdam veritatis, fugit ea nulla velit. Maxime inventore quasi tempore ea impedit officiis nihil in dolores magni, culpa nam? Eius eligendi laudantium rerum repellendus!</p>
                    </div>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10 '>
                        {datas.map((data) => (
                            <ShowData key={data.id} imageUrl={data.image} title={data.title} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HighSkilled;
