import React from "react";

function Footer() {
    return (
        <footer className=" text-black">
            <div className="bg-gray-100">
                <div className="pb-6 pt-8 container grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-3 sm:gap-6">
                    {/* ----logo---- */}
                    <div className="sm:mb-4 mb-10">
                        <img className="w-full" src="src/assets/images/logo.png" alt="logo" />
                        <div className="mt-10">
                            <a href="#" className="bg-sky-500 text-white py-2 px-3 rounded hover:bg-sky-600 hover:border hover:border-sky-600">Download Brochure</a>
                        </div>
                    </div>
                    {/* ----contact area---- */}
                    <div className="flex md:justify-center justify-start sm:mb-4 mb-10">
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                            <div className="flex flex-col gap-2">
                                <span className="flex items-center font-regular text-gray-700">
                                    <i className="fa-solid fa-location-dot me-1"></i>
                                    <p>Sinamangal, Kathmandu, Nepal</p>
                                </span>
                                <span className="flex items-center font-regular text-gray-700">
                                    <i className="fa-solid fa-phone me-1"></i>
                                    <p className="">Tel: +977-1-4599491,4578036 Cell:+977-9851051559</p>
                                </span>
                                <span className="flex items-center font-regular text-gray-700">
                                    <i className="fa-solid fa-envelope me-1"></i>
                                    <p>nileintl@wlink.com.np, nileintl1@gmail.com</p>
                                </span>

                            </div>
                        </div>
                    </div>
                    {/* ----nav area---- */}
                    <div className="flex md:justify-center justify-start sm:mb-4 mb-10">
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Links</h4>
                            <div className="flex flex-col gap-2">
                                <a href="#" className="font-regular text-gray-700"><i className="fa-solid fa-arrow-right me-1"></i>About Us</a>
                                <a href="#" className="font-regular text-gray-700"><i className="fa-solid fa-arrow-right me-1"></i>Services</a>
                                <a href="#" className="font-regular text-gray-700"><i className="fa-solid fa-arrow-right me-1"></i>Available Job</a>
                                <a href="#" className="font-regular text-gray-700"><i className="fa-solid fa-arrow-right me-1"></i>Job Category</a>
                                <a href="#" className="font-regular text-gray-700"><i className="fa-solid fa-arrow-right me-1"></i>Contact Us</a>
                            </div>
                            <div className="flex justify-between items-center mt-5">
                                <a href="#"><i className="fa fa-facebook text-2xl text-blue-600"></i></a>
                                <a href="#"><i className="fa fa-twitter text-2xl text-sky-600"></i></a>
                                <a href="#"><i className="fa fa-youtube text-2xl text-red-600"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* ----map area---- */}
                    <div className="flex md:justify-center justify-start sm:mb-4 mb-10">
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Map</h4>
                            <iframe className="w-full border-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.601159402349!2d85.34929757393606!3d27.698719425874703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1986e9bdcec3%3A0x54389fea89ce22e5!2sNile%20International%20Manpower%20Agency%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1690868161348!5m2!1sen!2snp" allowFullScreen="" loading="lazy" height='170px' referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* ----copyright area---- */}
            <div className="border-t bg-sky-600 text-white">
                <div className="container py-2">
                    <p className="md:text-base text-sm">
                        Copyright &copy; 2023 All rights reserved. Nile International Manpower
                        Agency Pvt. Ltd. Powered by
                        <a className="ms-1 text-yellow-300" target="_blank" rel="noreferrer" href="https://radiantnepal.com/">
                            Radiant Infotech Nepal
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
