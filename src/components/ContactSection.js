import React from 'react';
import { Link } from 'react-router-dom';
import './ContactSection.css';

function ContactSection() {
    return (
        <>
            <div className="home contact987">
            <h1 className="h-primary">Contact Us</h1>
            </div>
            <div className="contact-wrap">
                <div className="contact-in">
                    <h1>Contact Info</h1>
                    <h2><i className="fa fa-phone" aria-hidden="true"></i> Phone</h2>
                    <p>+91 9878924564</p>
                    <h2><i className="fa fa-envelope" aria-hidden="true"></i> Email</h2>
                    <p>info@iitdwarka.com</p>
                    <h2><i className="fa fa-map-marker" aria-hidden="true"></i> Address</h2>
                    <p>Dwarka sector-9, Delhi, India</p>
                    <ul>
                        <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-google" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                    </ul>
                </div>
                <div className="contact-in">
                    <h1 id="contact1">Send a Message</h1>
                    <form>
                        <input type="text" placeholder="Full Name" class="contact-in-input" />
                        <input type="text" placeholder="Email Address" class="contact-in-input" />
                        <input type="text" placeholder="Phone Number" class="contact-in-input" />
                        <textarea placeholder="Enter Your Message" class="contact-in-textarea"></textarea>
                        <input type="submit" value="SUBMIT" class="contact-in-btn" />
                    </form>
                </div>
                </div>
        </>
    );
}

export default ContactSection;