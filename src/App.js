import React  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes.js';

const App = () => {

  return (
    <div className="App">
      <AppRoutes  />
    </div>
  );
};

export default App;




// window closing pop-up

// import React, { useEffect } from 'react';

// const App = () => {
//   useEffect(() => {
//     const handleBeforeUnload = (event) => {
//       const message = "Are you sure you want to leave? Your changes might not be saved.";
//       event.returnValue = message; // Standard way to set the message
//       return message; // For older browsers
//     };

//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>My React App</h1>
//       <p>Try closing this tab or navigating away to see the confirmation dialog.</p>
//     </div>
//   );
// };

// export default App;

