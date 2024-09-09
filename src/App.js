import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes.js';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // Required for modern browsers
      setShowModal(true);  // Open your custom modal
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleStay = () => {
    setShowModal(false);  // Close modal, prevent navigation
  };

  const handleLeave = () => {
    setShowModal(false);
    window.removeEventListener('beforeunload', () => {}); // Allow navigation
    window.close(); // Close window if required, though some browsers might block this
  };

  return (
    <div className="App">
      <AppRoutes />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to leave?</p>
            <button onClick={handleStay}>Stay</button>
            <button onClick={handleLeave}>Leave</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
