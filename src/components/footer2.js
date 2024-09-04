import React from 'react';
import { FaHeart } from "react-icons/fa";
import './footer2.css';

const Footer12 = () => {
  return (
    <footer className="footer">
      <div className="footer-heading">
        <h1>Growing Businesses Since 2005</h1>
        <h2>Made with <FaHeart />  in 25 cities around the world</h2>
      </div>
      <div className="footer-columns">
        <div className="footer-column">
           
          <ul>   
            <li><a href="#">ARLINGTON</a></li>
            <li><a href="#">ATLANTA</a></li>
            <li><a href="#">AUSTIN</a></li>
            <li><a href="#">BALTIMORE</a></li>
            <li><a href="#">CHICAGO</a></li>
          </ul>
        </div>
        <div className="footer-column">
           
          <ul>
          <li><a href="#">CLEVELAND</a></li>
            <li><a href="#">DALLAS</a></li>
            <li><a href="#">DENVER</a></li>
            <li><a href="#">HOUSTON</a></li>
            <li><a href="#">JACKSONVILLE</a></li>
          </ul>
        </div>
        <div className="footer-column">
           
          <ul>
            <li><a href="#">KANSAS CITY</a></li>
            <li><a href="#">LAS VEGAS</a></li>
            <li><a href="#">LOS ANGELES</a></li>
            <li><a href="#">LOUISVILLE</a></li>
            <li><a href="#">NEW YORK CITY</a></li>
          </ul>
        </div>
        <div className="footer-column">
          
          <ul>
            <li><a href="#">MIAMI</a></li>
            <li><a href="#">MINNEAPOLIS</a></li>
            <li><a href="#">PHOENIX</a></li>
            <li><a href="#">NEW ORLEANS</a></li>
            <li><a href="#">ORLANDO</a></li>
          </ul>
        </div>
        <div className="footer-column">
          
          <ul>
            <li><a href="#">PHILADELPHIA</a></li>
            <li><a href="#">PORTLAND</a></li>
            <li><a href="#">SAN ANTONIO</a></li>
            <li><a href="#">SAN DIEGO</a></li>
            <li><a href="#">SEATTLE</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} - Brand Marketing Hub / Locations / Write For Us / Refer Thrive / Terms / Privacy Policy / Scam Alert / Sitemap</p>
      </div>
    </footer>
  );
};

export default Footer12;
