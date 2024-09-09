import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes.js';
import TiltedCards from './components/portfolio/portfolio.js';

const App = () => {

    return (
        <div className="App">
            {/* <AppRoutes /> */}
            <TiltedCards />

        </div>
    );
};

export default App;
