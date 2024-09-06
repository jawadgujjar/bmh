import React from 'react'
import "./landingcontact.css"
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn, FaThreads } from "react-icons/fa6";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";




import { Button } from 'antd'
import { Link } from 'react-router-dom';
import Modal1 from './modal';

function Landingcontact() {
    return (
        <div className='centered-whole-component'>
            <div className='landing-leftcol'>
                <div className='image-landingcontact'>
                    <img className='logo-svg' alt='logo' src='bmhlogo.png' />
                </div>
                <p>Brand Marketing Hub is a full-service digital marketing agency. Attract, Impress, and Convert more leads online and get results with Thrive.</p>

            </div>

            <div>
                <div className='all-logos-contact'>
                    <div className='div-logos'><TiSocialFacebook />
                    </div>
                    <div className='div-logos'><RiTwitterXFill />
                    </div>
                    <div className='div-logos'><FaLinkedinIn />
                    </div> <div className='div-logos'><TiSocialYoutubeCircular />
                    </div> <div className='div-logos'><AiFillInstagram />
                    </div> <div className='div-logos'><FaThreads />
                    </div>

                </div>
                <div>
                    <p className='fontsize-call'><span className='callus-text'>Call Us</span> at  <a href="tel:+1234567890" style={{ color: ' rgb(253, 126, 20)', textDecoration: 'none' }}>
                        +123-456-7890
                    </a></p>
                </div>
                <div>
                    <Link to="/contact"><Button className='discover-button'>Contact Us</Button></Link>
                </div>
            </div>

        </div>
    )
}

export default Landingcontact