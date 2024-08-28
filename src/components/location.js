import React, { useState, useEffect } from 'react';
import './location.css';

const Loc = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          setError(error.message);
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []);

  return (
    <div className="container">
      <h1 className="title">Your Location</h1>
      {loading ? (
        <p className="loading">Fetching location...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="location-info">
          <p className="location-text">Latitude: {location.latitude}</p>
          <p className="location-text">Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default Loc;
