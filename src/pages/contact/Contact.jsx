import React from 'react';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <>
      <section className='py-20 relative'>
        <img className='absolute h-full w-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
        <div className="bg-gradient-to-t from-black to-transparent opacity-50 absolute w-full z-10 h-full top-0 left-0"></div>
        <div className="container py-12 relative z-20 mt-10" data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
          <h1 className='md:text-6xl sm:text-4xl text-3xl font-extrabold text-center text-white'><big className='text-yellow-300'>Contact</big> Us</h1>
        </div>
      </section>
      <ContactForm />
      <section className='py-4'>
        <iframe className="w-full border-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.601159402349!2d85.34929757393606!3d27.698719425874703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1986e9bdcec3%3A0x54389fea89ce22e5!2sNile%20International%20Manpower%20Agency%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1690868161348!5m2!1sen!2snp" allowFullScreen="" loading="lazy" height='300px' referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  )
}

export default Contact;
