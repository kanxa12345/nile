import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Clients() {
    const options = {
        items: 3,
        loop: true,
        margin: 20,
        autoplay: true,
        dots: false,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    };

    return (
        <section className='py-12'>
            <div className='container flex flex-col items-center'>
                <h2 className='text-4xl font-bold text-center pb-2 mb-10 relative pseudo-border'>Our Precious Clients</h2>
                <OwlCarousel className="owl-theme" {...options}>
                    <div className="item flex justify-center items-center clients-image"><img src="src/assets/images/clients-images/alstom.png" alt="alstom" /></div>
                    <div className="item flex justify-center items-center clients-image"><img src="src/assets/images/clients-images/kepco.png" alt="kepco" /></div>
                    <div className="item flex justify-center items-center clients-image"><img src="src/assets/images/clients-images/manco.png" alt="manco" /></div>
                    <div className="item flex justify-center items-center clients-image"><img src="src/assets/images/clients-images/ottawa.png" alt="ottawa" /></div>
                    <div className="item flex justify-center items-center clients-image"><img src="src/assets/images/clients-images/punj-lloyd.jpg" alt="punj-lloyd" /></div>
                    <div className="item flex justify-center items-center clients-image"><img src="src/assets/images/clients-images/technip.png" alt="technip" /></div>
                </OwlCarousel>
            </div>
        </section>
    )
}

export default Clients;
