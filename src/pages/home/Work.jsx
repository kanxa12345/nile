import React from 'react';
import WorkData from './WorkData';
import { Link } from 'react-router-dom';
Link

function Work() {
    const datas = WorkData;
    const ShowData = (props) => {
        const { imageUrl, title, description, detailUrl } = props;
        return (
            <div className='relative' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' data-aos-deay='200'>
                <img className='h-full w-full absolute rounded-l-3xl rounded-ee-3xl' src={`/src/assets/images/workdata-images/${imageUrl}`} alt="background-images" style={{ top: '0', left: '0' }} />
                <div className="absolute w-full h-full rounded-l-3xl rounded-ee-3xl top-0 left-0 bg-black opacity-60"></div>
                <div className='relative z-10 text-white px-3 py-6'>
                    <h3 className='text-xl font-semibold mb-1'>{title}</h3>
                    <p className='mb-6'>{description}</p>
                    <Link to={detailUrl} className='bg-sky-500 text-white py-2 px-3 rounded hover:bg-sky-600 hover:border hover:border-sky-600'>Read More <i className="fa fa-chevron-right ms-1"></i></Link>
                </div>
            </div>
        )
    }
    return (
        <section className='py-12 relative'>
            <div className='container flex flex-col items-center relative'>
                <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold text-center pb-2 mb-6 relative pseudo-border' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>What We Do</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {datas.map((data) => (
                        <ShowData key={data.id} imageUrl={data.image} title={data.title} description={data.description} detailUrl={data.detailUrl}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work;
