import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '/src/assets/images/logo.png';

function Header() {
    const [showJobMenu, setShowJobMenu] = useState(false);
    const [showAboutMenu, setShowAboutMenu] = useState(false);
    const [showServiceMenu, setShowServiceMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
        if (!isNavbarOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    };

    const toggleAboutMenu = () => {
        setShowAboutMenu(!showAboutMenu);
    };

    const toggleServiceMenu = () => {
        setShowServiceMenu(!showServiceMenu);
    };

    const toggleJobMenu = () => {
        setShowJobMenu(!showJobMenu);
    };
    return (
        <>
            {/* ----top header---- */}
            <div className="border-b bg-sky-600 text-white md:block hidden">
                <div className="container py-4 flex justify-between items-center gap-2">
                    <div className="flex md:flex-row justify-between md:items-center items-start flex-col lg:w-5/12 md:w-7/12">
                        <p className="md:text-base text-xs">Gov. Lic. No. 820/066/067</p>
                        <p className="md:text-base text-xs">Regd No. 58268/065/066</p>
                    </div>
                    <div className="md:w-1/12 w-1/5 flex justify-between items-center">
                        <a href="https://www.facebook.com/Nileintl" target="_blank" rel="noreferrer"><i className="fa fa-facebook text-lg"></i></a>
                        <a href="#"><i className="fa fa-twitter text-lg"></i></a>
                        <a href="#"><i className="fa fa-youtube text-lg"></i></a>
                    </div>
                </div>
            </div>
            {/* ----bottom header---- */}
            <div className={`sticky top-0 left-0 py-2 right-0 w-full z-30 bg-white ${scrolled ? 'shadow-[0_0_30px_2px_rgba(0,0,0,0.3)]' : 'shadow-none'}`}>
                <div className="container md:py-0 py-3 flex justify-between items-center">
                    <div className="logo md:w-3/12 w-5/12">
                        <Link to="/">
                            <img
                                className="w-full"
                                src={logo}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="md:hidden block" onClick={toggleNavbar}>
                        <i className="fa-solid fa-bars text-xl"></i>
                    </div>
                    <div className={`absolute top-[0px] right-0 opacity-20 h-screen w-full bg-black  ${isNavbarOpen ? 'block' : 'hidden'}`} onClick={toggleNavbar}></div>
                    <div className={`md:w-8/12 md:block md:h-auto h-screen ${isNavbarOpen ? 'custom-navbar' : 'hidden'}`}>
                        <div className="md:hidden inline-block ms-[172px] mb-4" onClick={toggleNavbar}>
                            <i className="fa-solid fa-xmark text-xl text-white"></i>
                        </div>
                        <nav className="md:text-black text-white">
                            <ul className="flex justify-between items-center">
                                <li className="md:w-auto w-full">
                                    <Link className="font-medium w-full inline-block py-3 relative after:absolute after:h-[2px] after:w-0 after:content-[''] after:bottom-[10px] after:left-0 after:bg-sky-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li onMouseEnter={() => setShowAboutMenu(true)} onMouseLeave={() => setShowAboutMenu(false)} className={`relative md:w-auto w-full ${showAboutMenu ? 'md:h-auto h-[395px]' : ''}`}>
                                    <button className="font-medium py-3 relative flex justify-between items-center gap-2 w-full after:absolute after:h-[2px] after:w-0 after:content-[''] after:bottom-[10px] after:left-0 after:bg-sky-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" onClick={toggleAboutMenu}>
                                        About <i className="fa-solid fa-chevron-down text-sm"></i>
                                    </button>
                                    {showAboutMenu && <div className={`md:bg-white md:text-black text-gray-200 ${showAboutMenu ? 'block' : 'hidden'} md:absolute top-[48px] left-[-20px] md:border`}>
                                        <div className="flex flex-col w-[200px] h-full">
                                            <Link className="p-2 md:border-b hover:text-yellow-500" to="/WhoWeAre">Who We Are</Link>
                                            <Link className="p-2 md:border-b hover:text-yellow-500" to="/CompanyProfile">Company Profile</Link>
                                            <Link className="p-2 md:border-b hover:text-yellow-500" to="/ChairmanMessage">Message From Chairman</Link>
                                            <Link className="p-2 md:border-b hover:text-yellow-500" to="/MissionVision">Mission & Vision</Link>
                                            <Link className="p-2 md:border-b hover:text-yellow-500" to="/Objective">Objective</Link>
                                            <Link className="p-2 md:border-b hover:text-yellow-500" to="/OrganizationChart">Organization Chart</Link>
                                            <Link className="p-2 md:border-b hover:text-yellow-500" to="/LegalDocument">Legal Documents</Link>
                                            <Link className="p-2 hover:text-yellow-500" to="/Gallery">Gallery</Link>
                                        </div>
                                    </div>
                                    }
                                </li>
                                <li onMouseEnter={() => setShowServiceMenu(true)} onMouseLeave={() => setShowServiceMenu(false)} className={`relative md:w-auto w-full ${showServiceMenu ? 'md:h-auto h-[200px]' : ''}`}>
                                    <button className="font-medium py-3 relative flex justify-between items-center gap-2 w-full after:absolute after:h-[2px] after:w-0 after:content-[''] after:bottom-[10px] after:left-0 after:bg-sky-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" onClick={toggleServiceMenu}>
                                        Services <i className="fa-solid fa-chevron-down text-sm md:hidden"></i>
                                    </button>
                                    {showServiceMenu && <div className={`md:bg-white md:text-black text-gray-200 ${showServiceMenu ? 'block' : 'hidden'} md:absolute top-[48px] left-[-20px] md:border`}>
                                        <div className="flex flex-col w-[210px]">
                                            <Link className="block p-2 md:border-b hover:text-yellow-500" to="/RequiredDocument">Required Documents</Link>
                                            <Link className="block p-2 md:border-b hover:text-yellow-500" to="/RecruitmentProcess">Recruitment Process</Link>
                                            <Link className="block p-2 md:border-b hover:text-yellow-500" to="/ClientCandidateMatching">Client Candidate Matching</Link>
                                            <Link className="block p-2 hover:text-yellow-500" to="/IndustryExpertise">Industry Expertise</Link>
                                        </div>
                                    </div>
                                    }
                                </li>
                                <li onMouseEnter={() => setShowJobMenu(true)} onMouseLeave={() => setShowJobMenu(false)} className={`relative md:w-auto w-full ${showJobMenu ? 'md:h-auto h-[140px]' : ''}`}>
                                    <button className="font-medium py-3 relative flex justify-between items-center gap-2 w-full after:absolute after:h-[2px] after:w-0 after:content-[''] after:bottom-[10px] after:left-0 after:bg-sky-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" onClick={toggleJobMenu}>
                                        Available Job <i className="hidden fa-solid fa-chevron-down text-sm"></i>
                                    </button>
                                    {showJobMenu && <div className={`md:bg-white md:text-black text-gray-200 ${showJobMenu ? 'block' : 'hidden'} md:absolute top-[48px] left-[-20px] md:border`}>
                                        <div className="flex flex-col w-[180px]">
                                            <Link className="block p-2 md:border-b hover:text-yellow-500" to="/Vacancy">Vacancy</Link>
                                            <Link className="block p-2 hover:text-yellow-500" to="/NewspaperVacancy">Newspaper Vancancy</Link>
                                        </div>
                                    </div>
                                    }
                                </li>
                                <li className="md:w-auto w-full">
                                    <Link className="font-medium w-full inline-block py-3 relative after:absolute after:h-[2px] after:w-0 after:content-[''] after:bottom-[10px] after:left-0 after:bg-sky-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" to="/Category">
                                        Job Category
                                    </Link>
                                </li>
                                <li className="md:w-auto w-full">
                                    <Link className="font-medium w-full py-3 inline-block relative after:absolute after:h-[2px] after:w-0 after:content-[''] after:bottom-[10px] after:left-0 after:bg-sky-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" to="/Contact">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Header;


