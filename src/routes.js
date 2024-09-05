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
import Navbrrr from './components/navbars/Navbrrr';
import Footer12 from "./components/footer2"

const AppRoutes = () => {
    return (
        <Router>
            <Navbrrr />
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
                    <Route path="/webdevelopmentpage" element={<Webdevelopmentpage1 />} />
                    <Route path="/privacypolicy" element={<Privacy1 />} />
                    <Route path="/refundpolicy" element={<Refund1 />} />
                    <Route path="/termofservice" element={<Termofservice1 />} />
                </Routes>
                <Footer12 />
            </>
        </Router>
    );
};

export default AppRoutes;
