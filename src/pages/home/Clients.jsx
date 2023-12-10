import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Clients() {
    const images = [
        '/src/assets/images/clients-images/alstom.png',
        '/src/assets/images/clients-images/kepco.png',
        '/src/assets/images/clients-images/manco.png',
        '/src/assets/images/clients-images/ottawa.png',
        '/src/assets/images/clients-images/punj-lloyd.jpg',
        '/src/assets/images/clients-images/technip.png',
    ]

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 546,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    };
    return (
        <section className='py-12'>
            <div className='container flex flex-col items-center'>
                <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-8 relative after:absolute after:w-[80%] after:content-[''] after:h-[4px] after:bg-sky-700 after:bottom-[-8px] after:left-[10%] after:rounded-md before:absolute before:w-[4px] before:h-[4px] before:bg-white before:content-[''] before:z-10 before:bottom-[-8px] custom-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Our Clients</h2>
                <div className='w-full'>
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index} className="flex justify-center items-center h-full">
                                <img className='sm:h-[60px] h-[50px] w-[60%] p-2 bg-white' src={image} alt="clients" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Clients;
