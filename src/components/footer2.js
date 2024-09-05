import React from 'react';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
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
            <li><Link className="link" to="/home" >ARLINGTON</Link></li>
            <li><Link className="link" to="/home" >ATLANTA</Link></li>
            <li><Link className="link" to="/home" >AUSTIN</Link></li>
            <li><Link className="link" to="/home" >BALTIMORE</Link></li>
            <li><Link className="link" to="/home" >CHICAGO</Link></li>
          </ul>
        </div>
        <div className="footer-column">
           
          <ul>
          <li><Link className="link" to="/home" >CLEVELAND</Link></li>
          <li><Link className="link" to="/home" >DALLAS</Link></li>
          <li><Link className="link" to="/home" >DENVER</Link></li>
          <li><Link className="link" to="/home" >HOUSTON</Link></li>
          <li><Link className="link" to="/home" >JACKSONVILLE</Link></li> 
          </ul>
        </div>
        <div className="footer-column">
           
          <ul>
          <li><Link className="link" to="/home" >KANSAS CITY</Link></li> 
          <li><Link className="link" to="/home" >LAS VEGAS</Link></li> 
          <li><Link className="link" to="/home" >LOS ANGELES</Link></li> 
          <li><Link className="link" to="/home" >LOUISVILLE</Link></li> 
          <li><Link className="link" to="/home" >NEW YORK CITY</Link></li> 
          </ul>
        </div>
        <div className="footer-column">
          
          <ul>
          <li><Link className="link" to="/home" >MIAMI</Link></li> 
          <li><Link className="link" to="/home" >MINNEAPOLIS</Link></li> 
          <li><Link className="link" to="/home" >PHOENIX</Link></li> 
          <li><Link className="link" to="/home" >NEW ORLEANS</Link></li> 
          <li><Link className="link" to="/home" >ORLANDO</Link></li> 
          </ul>
        </div>
        <div className="footer-column">
          
          <ul>
          <li><Link className="link" to="/home" >PHILADELPHIA</Link></li> 
          <li><Link className="link" to="/home" >PORTLAND</Link></li> 
          <li><Link className="link" to="/home" >SAN ANTONIO</Link></li> 
          <li><Link className="link" to="/home" >SAN DIEGO</Link></li> 
          <li><Link className="link" to="/home" >SEATTLE</Link></li> 
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
