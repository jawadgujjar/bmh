import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes.js';
import AppModal from './components/appmodal.js';

const App = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (showModal) {
                // Browsers now only show generic message; custom text is no longer displayed
                event.preventDefault();
                event.returnValue = ''; // For modern browsers
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [showModal]);

    const handleLeave = () => {
        setShowModal(false);
        // Continue with navigation or action
    };

    return (
        <div className="App">
            <AppRoutes />
            <AppModal
                show={showModal}
                onHide={() => setShowModal(false)}
                onConfirm={handleLeave}
            />

        </div>
    );
};

export default App;
