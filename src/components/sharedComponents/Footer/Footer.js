import React from 'react';
import logo from '../../../images/logo.svg'
import './Footer.css'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

const Footer = () => {
    return (
        <div className='container-fluid color'>
            
            <div className='mt-5'>

                <div className='row justify-content-center'>

                <div className='col-md-2 text-center mt-4'>
                    <div><img src={logo} className="w-75" /></div>
                    <div>
                        <h5><small>Social Media</small></h5>
                        <div>
                        <FaFacebook className='me-2'/>
                        <FaTwitter className='me-2'/>
                        <FaLinkedinIn className='me-2'/>
                        <FaInstagramSquare className='me-2'/>

                        </div>
                    </div>
                </div>

                <div className='col-md-2 mt-4'>
                    <div><h5>Venues</h5></div>
                    <div><small><h6>EWU GROUND</h6></small></div>
                    <div>
                        {`EWU AUDITORIUM
                          AFTABNAGAR GROUND
                          BASHUNDHARA
                          CONVENTION CENTER
                          HATIR JHILL
                        `}
                    </div>
                </div>
                <div className='col-md-2 mt-4'>
                <div><h5>Suppliers</h5></div>
                    
                    <div>
                        {`Photographers
                          Decorators
                          Venues Planner
                          Choreographers
                          Designers
                          Makeup Artists
                        `}
                    </div>
                </div>
                <div className='col-md-2 mt-4'>
                <div><h5>Quick Links</h5></div>
                   
                    <div>
                        {`About Us
                          Careers
                          Contact Us
                          Privacy Policy
                          Terms & Conditions
                        `}
                    </div>
                </div>
                <div className='col-md-4 mt-4'>
                <div><h5>Newsletter</h5></div>
                    <p>Subscribe to greatest media updates</p>

                    <Button variant="outline-secondary">Live Chat</Button>{' '}
                    
                </div>

                </div>
            


            </div>


        </div>
    );
};

export default Footer;