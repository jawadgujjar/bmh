import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutpage1 from './pages/aboutpage'
import Contact from './components/contacts';
import Features from './components/features';
import Landingpage from './pages/landing';
import Header from './components/navbar';
import Footer1 from './components/footer';

const AppRoutes = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Landingpage />} />
                <Route path="/home" element={<Landingpage />} />
                <Route path="/features" element={<Features />} />
                <Route path="/about" element={<Aboutpage1 />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer1 />
        </Router>
    );
};

export default AppRoutes;
