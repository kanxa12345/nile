import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Clients() {
    const images = ['alstom.png', 'kepco.png', 'manco.png', 'ottawa.png', 'punj-lloyd.jpg', 'technip.png']
    const options = {
        items: 3,
        loop: true,
        margin: 20,
        autoplay: true,
        dots: false,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    };

    return (
        <section className='py-12'>
            <div className='container flex flex-col items-center'>
                <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold text-center pb-2 mb-10 relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Our Precious Clients</h2>
                <OwlCarousel className="owl-theme" {...options}>
                    {images.map((image, index) => (
                        <div className="item flex justify-center items-center clients-image" key={index}>
                            <img src={`/src/assets/images/clients-images/${image}`} alt="clients" />
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </section>
    )
}

export default Clients;
