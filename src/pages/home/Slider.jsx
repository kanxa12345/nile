import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider() {
    const options = {
        items: 3,
        loop: true,
        // margin: 10,
        autoplay: true,
        dots: false,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            // 600: {
            //     items: 2
            // },
            // 1000: {
            //     items: 3
            // }
        }
    };

    return (
        <section className='relative'>
            <div>
                <OwlCarousel className="owl-theme" {...options}>
                    <div className="item carousel-image"><img src="src/assets/images/slider-image/img1.jpg" alt="Image 1" /></div>
                    <div className="item carousel-image"><img src="src/assets/images/slider-image/img2.jpg" alt="Image 2" /></div>
                    <div className="item carousel-image"><img src="src/assets/images/slider-image/img3.jpg" alt="Image 3" /></div>
                    <div className="item carousel-image"><img src="src/assets/images/slider-image/img4.jpg" alt="Image 4" /></div>
                    <div className="item carousel-image"><img src="src/assets/images/slider-image/img5.jpg" alt="Image 5" /></div>
                </OwlCarousel>
            </div>
            <div className="overlay absolute w-full z-10 h-full"></div>
            <div className="container absolute z-20 text-center quote-section">
                <h1 className='text-white font-extrabold text-5xl mb-2'>DISCOVER YOUR GLOBAL POTENTIAL</h1>
                <h2 className='text-white font-semibold text-3xl'>EMBRACE THE WORLD WITH US</h2>
            </div>
        </section>
    )
}

export default Slider; 
