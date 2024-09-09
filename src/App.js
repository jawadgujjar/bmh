import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes.js';

const App = () => {

    return (
        <div className="App">
            <AppRoutes />
        </div>
    );
};

export default App;
