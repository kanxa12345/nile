import React, { useEffect } from 'react';
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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vision from "./pages/about/Vision";
import Mission from "./pages/about/Mission";
import Objective from "./pages/about/Objective";
import RecruitmentProcess from "./pages/service/RecruitmentProcess";

function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/WhoWeAre" element={<WhoWeAre />}></Route>
          <Route exact path="/CompanyProfile" element={<CompanyProfile />}></Route>
          <Route exact path="/ChairmanMessage" element={<ChairmanMessage />}></Route>
          <Route exact path="/Mission" element={<Mission />}></Route>
          <Route exact path="/Vision" element={<Vision />}></Route>
          <Route exact path="/Objective" element={<Objective />}></Route>
          <Route exact path="/OrganizationChart" element={<OrganizationChart />}></Route>
          <Route exact path="/Gallery" element={<Gallery />}></Route>
          <Route exact path="/RequiredDocument" element={<RequiredDocument />}></Route>
          <Route exact path="/RecruitmentProcess" element={<RecruitmentProcess />}></Route>
          <Route exact path="/Vacancy" element={<Vacancy />}></Route>
          <Route exact path="/NewspaperVacancy" element={<NewspaperVacancy />}></Route>
          <Route exact path="/Category" element={<Category />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
