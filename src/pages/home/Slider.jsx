import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider() {
    const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg']
    const options = {
        items: 3,
        loop: true,
        autoplay: true,
        dots: false,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
        }
    };

    return (
        <section className='relative lg:py-[204px] md:py-[180px] sm:py-[146px] py-[141px] slider-section'>
            <div className='absolute w-full h-full top-0 left-0'>
                <OwlCarousel className="owl-theme h-full" {...options}>
                    {images.map((image, index) => (
                        <div className="item" key={index}>
                            <img src={`/src/assets/images/slider-image/${image}`} alt="slider" />
                        </div>
                    ))}
                </OwlCarousel>
            </div>
            <div className="bg-gradient-to-t from-black to-transparent opacity-60 absolute w-full z-10 h-full top-0 left-0"></div>
            <div className="container relative z-20 text-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                <h1 className='text-white font-extrabold lg:text-5xl md:text-4xl sm:text-3xl text-2xl mb-2'>DISCOVER YOUR GLOBAL POTENTIAL</h1>
                <h2 className='text-white font-semibold md:text-3xl sm:text-xl text-lg'>EMBRACE THE WORLD WITH US</h2>
            </div>
        </section>
    )
}

export default Slider; 
