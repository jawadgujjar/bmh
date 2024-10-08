import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutpage1 from './pages/aboutpage'
import Contact from './components/contacts';
import Features from './components/features';
import Landingpage from './pages/landing';
import Brandmarketingpage1 from './pages/brandmarketingpage';
import Seopage1 from './pages/seopage';
import Ecommercepage1 from './pages/ecommercepage';
import Digitalmarketingpage1 from './pages/digitalmarketingpage';
import Webdevelopmentpage1 from './pages/webdevelopmentpage';
import Privacy1 from './components/privacypolicy';
import Refund1 from './components/refundpolicy';
import Termofservice1 from './components/termofservice';
import ScrollToTop from './components/scroll';
import Footer12 from "./components/footer2"
import PortfolioRemain from './components/portfolio/portfolioremaining';
import Appdevelopment1 from './components/webdevelopmentmain/appdevelopment';
import Socialmediamarketing1 from './components/socialmediamarketing';
import Ecommercedevelopment1 from './components/ecommercedevelopment';
import NavbarBmh from './components/navbars/navbar';
import Digitalmarketingmain from './pages/digitalmarketingmain';
import Seocompanymain1 from './pages/seocompanymain';
import Hireseo from './pages/hireseo';
import Dentalseo from './pages/dentalseo';
import Localseomain1 from './pages/localseomain';

const AppRoutes = () => {
    return (
        <Router>
            <NavbarBmh />
            <>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Landingpage />} />
                    <Route path="/home" element={<Landingpage />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/about" element={<Aboutpage1 />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/brandmarketingpage" element={<Brandmarketingpage1 />} />
                    <Route path="/Seopage" element={<Seopage1 />} />
                    <Route path="/ecommercepage" element={<Ecommercepage1 />} />
                    <Route path="/digitalmarketingpage" element={<Digitalmarketingpage1 />} />
                    <Route path="/digital-marketing" element={<Digitalmarketingmain />} />
                    <Route path="/webdevelopmentpage" element={<Webdevelopmentpage1 />} />
                    <Route path="/privacypolicy" element={<Privacy1 />} />
                    <Route path="/refundpolicy" element={<Refund1 />} />
                    <Route path="/termofservice" element={<Termofservice1 />} />
                    <Route path="/portfolio" element={<PortfolioRemain />} />
                    <Route path="/appdevelopment" element={<Appdevelopment1 />} />
                    <Route path="/socialmediamarketing" element={<Socialmediamarketing1 />} />
                    <Route path="/ecommercedevelopment" element={<Ecommercedevelopment1 />} />
                    <Route path="/seocompany" element={<Seocompanymain1/>} />
                    <Route path="/localseo" element={<Localseomain1/>} />
                    <Route path="/hireseoconsultant" element={<Hireseo />} />
                    <Route path="/Dentalseo" element={<Dentalseo />} />

                    

                </Routes>
                <Footer12 />
            </>
        </Router>
    );
};

export default AppRoutes;
