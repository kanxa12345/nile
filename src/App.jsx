import React, { useEffect, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Category from "./pages/category/Category";
import Contact from "./pages/contact/Contact";
import Homepage from "./pages/home/Homepage";
import NewspaperVacancy from "./pages/job/NewspaperVacancy";
import WhoWeAre from "./pages/about/WhoWeAre";
import ChairmanMessage from "./pages/about/ChairmanMessage";
import CompanyProfile from "./pages/about/CompanyProfile";
import Vacancy from "./pages/job/Vacancy";
import Gallery from "./pages/about/Gallery";
import RequiredDocument from "./pages/service/RequiredDocument";
import OrganizationChart from "./pages/about/OrganizationChart";
import Objective from "./pages/about/Objective";
import RecruitmentProcess from "./pages/service/RecruitmentProcess";
import GoToTopButton from './components/GoToTopButton';
import Unskilled from './pages/category/Unskilled';
import Skilled from './pages/category/Skilled';
import SemiSkilled from './pages/category/SemiSkilled';
import HighSkilled from './pages/category/HighSkilled';
import ClientCandidateMatching from './pages/service/ClientCandidateMatching';
import IndustryExpertise from './pages/service/IndustryExpertise';
import OfferDetail from './pages/home/OfferDetail';
import NotFound from './components/NotFound';
import LegalDocument from './pages/about/LegalDocument';
import MissionVision from './pages/about/MissionVision';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const animatedRef = useRef(false);
  useEffect(() => {
    if (!animatedRef.current) {
      Aos.init();
      animatedRef.current = true;
    }
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/Offer/:id" element={<OfferDetail />} />
          <Route exact path="/WhoWeAre" element={<WhoWeAre />} />
          <Route exact path="/CompanyProfile" element={<CompanyProfile />} />
          <Route exact path="/ChairmanMessage" element={<ChairmanMessage />} />
          <Route exact path="/MissionVision" element={<MissionVision />} />
          <Route exact path="/Objective" element={<Objective />} />
          <Route exact path="/OrganizationChart" element={<OrganizationChart />} />
          <Route exact path="/LegalDocument" element={<LegalDocument />} />
          <Route exact path="/Gallery" element={<Gallery />} />
          <Route exact path="/RequiredDocument" element={<RequiredDocument />} />
          <Route exact path="/RecruitmentProcess" element={<RecruitmentProcess />} />
          <Route exact path="/ClientCandidateMatching" element={<ClientCandidateMatching />} />
          <Route exact path="/IndustryExpertise" element={<IndustryExpertise />} />
          <Route exact path="/Vacancy" element={<Vacancy />} />
          <Route exact path="/NewspaperVacancy" element={<NewspaperVacancy />} />
          <Route exact path="/Category" element={<Category />} />
          <Route exact path="/Unskilled" element={<Unskilled />} />
          <Route exact path="/SemiSkilled" element={<SemiSkilled />} />
          <Route exact path="/Skilled" element={<Skilled />} />
          <Route exact path="/HighSkilled" element={<HighSkilled />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        <GoToTopButton />
      </Router>
    </>
  );
}

export default App;
