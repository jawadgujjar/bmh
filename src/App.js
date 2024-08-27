// src/App.js
import React from 'react';
import Header from './components/navbar.js';
import HeroSection from './components/herosection.js';
import Features from './components/features.js';
import Car from './components/carousel.js';
import About from './components/about.js';
import Contact from './components/contacts.js';
import Footer from './components/footer.js'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <Features />
            <Car/>
            <About />
            <Contact />
            <Footer/>
            {/* <Features />
            <About />
            <Contact />
            <Footer/> */}
             
        </div>
    );
};

export default App;
