import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [showJobMenu, setShowJobMenu] = useState(false);
    const [showAboutMenu, setShowAboutMenu] = useState(false);
    const [showServiceMenu, setShowServiceMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleOpenNavbar = () => {
        if (isNavbarOpen) {
            setIsNavbarOpen(false)
        }
        else {
            setIsNavbarOpen(true)
        }
    }
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
    return (
        <>
            {/* ----top header---- */}
            <div className="border-b bg-gray-100">
                <div className="container py-4 flex justify-between items-center gap-1">
                    <div className="logo md:w-3/12 w-5/12">
                        <Link to="/">
                            <img
                                className="w-full"
                                src="src/assets/images/logo.png"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="flex md:flex-row justify-between md:items-center items-start flex-col lg:w-5/12 md:w-7/12">
                        <p className="md:text-base text-xs">Govt. Lic. No. 820/066/067</p>
                        <p className="md:text-base text-xs">Regd No. 58268/065/066</p>
                    </div>
                </div>
            </div>
            {/* ----bottom header---- */}
            <div className={`sticky top-0 left-0 right-0 w-full z-30 bg-white ${scrolled ? 'shadow-[0_0_30px_2px_rgba(0,0,0,0.3)]' : 'shadow-none'}`}>
                <div className="container py-3 flex justify-between items-center relative">
                    <div className="md:hidden block" onClick={handleOpenNavbar}>
                        <i class="fa-solid fa-bars text-xl"></i>
                    </div>
                    <div className={`w-8/12 md:inline-block ${isNavbarOpen ? 'hidden' : 'custom-navbar'}`}>
                        <nav>
                            <ul className="flex justify-between items-center">
                                <li>
                                    <Link className="font-medium py-3 relative custom-border" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li onMouseEnter={() => setShowAboutMenu(true)} onMouseLeave={() => setShowAboutMenu(false)}>
                                    <div className="inline-block relative h-full">
                                        <Link className="font-medium py-3 relative custom-border" to="#">
                                            About
                                        </Link>
                                        {showAboutMenu && <div className={`bg-white ${showAboutMenu ? 'block' : 'hidden'} absolute top-[35px] left-[-20px] border custom-dropdown`}>
                                            <div className="flex flex-col w-[200px] h-full">
                                                <Link className="p-2 border-b hover:text-yellow-500" to="/WhoWeAre">Who We Are</Link>
                                                <Link className="p-2 border-b hover:text-yellow-500" to="/CompanyProfile">Company Profile</Link>
                                                <Link className="p-2 border-b hover:text-yellow-500" to="/ChairmanMessage">Message From Chairman</Link>
                                                <Link className="p-2 border-b hover:text-yellow-500" to="/Mission">Mission</Link>
                                                <Link className="p-2 border-b hover:text-yellow-500" to="/Vision">Vision</Link>
                                                <Link className="p-2 border-b hover:text-yellow-500" to="/Objective">Objective</Link>
                                                <Link className="p-2 border-b hover:text-yellow-500" to="/OrganizationChart">Organization Chart</Link>
                                                <Link className="p-2 hover:text-yellow-500" to="/Gallery">Gallery</Link>
                                            </div>
                                        </div>
                                        }
                                    </div>
                                </li>
                                <li onMouseEnter={() => setShowServiceMenu(true)} onMouseLeave={() => setShowServiceMenu(false)} className="relative">
                                    <Link className="font-medium py-3 relative custom-border" to="#">
                                        Services
                                    </Link>
                                    {showServiceMenu && <div className={`bg-white ${showServiceMenu ? 'block' : 'hidden'} absolute top-[35px] left-[-20px] border custom-dropdown`}>
                                        <div className="flex flex-col w-[180px]">
                                            <Link className="block p-2 border-b hover:text-yellow-500" to="/RequiredDocument">Required Documents</Link>
                                            <Link className="block p-2 hover:text-yellow-500" to="/RecruitmentProcess">Recruitment Process</Link>
                                        </div>
                                    </div>
                                    }
                                </li>
                                <li onMouseEnter={() => setShowJobMenu(true)} onMouseLeave={() => setShowJobMenu(false)} className="relative">
                                    <Link className="font-medium py-3 relative custom-border" to="#">
                                        Available Job
                                    </Link>
                                    {showJobMenu && <div className={`bg-white ${showJobMenu ? 'block' : 'hidden'} absolute top-[35px] left-[-20px] border custom-dropdown`}>
                                        <div className="flex flex-col w-[180px]">
                                            <Link className="block p-2 border-b hover:text-yellow-500" to="/Vacancy">Vacancy</Link>
                                            <Link className="block p-2 hover:text-yellow-500" to="/NewspaperVacancy">Newspaper Vancancy</Link>
                                        </div>
                                    </div>
                                    }
                                </li>
                                <li>
                                    <Link className="font-medium py-3 relative custom-border" to="/Category">
                                        Job Category
                                    </Link>
                                </li>
                                <li>
                                    <Link className="font-medium py-3 relative custom-border" to="/Contact">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="md:w-1/12 w-1/5 flex justify-between items-center">
                        <a href="#"><i className="fa fa-facebook text-lg"></i></a>
                        <a href="#"><i className="fa fa-twitter text-lg"></i></a>
                        <a href="#"><i className="fa fa-youtube text-lg"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;


