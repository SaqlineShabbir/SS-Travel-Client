import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-content">
          <div className="footer">
            <div className="p-5">
                <h4>SS <span className="my-color">Dental</span> </h4>
                <p>SS Dental is a dental clinic here you will get all the  services related teeth . We started this clinic year ago</p>
            </div>
            <div className="footer-text">
                <h6>Contact Us</h6>
               <div className="footer-text">
               <p>Address : Banani Dhaka</p>
                <p>Phone : 000000000000</p>
                <p>Email : youremail@gmail.com</p>
                <p>Fax : (.............)</p>
               </div>
            </div>
            <div className="footer-text">
                <h6>Information</h6>
                 <div className="footer-p">
                 <p>About Us</p>
                <p>Legal Notice</p>
                <p>Payments</p>
                <p>Services</p>
                 </div>
            </div>
            <div className="footer-text">
                <h6>My Account</h6>
                 <div className="footer-p">
                 <p>sign Up</p>
                <p>Log In</p>
                <p>Previous Service</p>
                <p>Doctor</p>
                 </div>
            </div>
            <div className="footer-text">
                <h5>Clinic</h5>
                <div className="footer-p">
                <p>Best service</p>
                <p>About Clinic</p>
                <p>Payment</p>
                <p>suppliers</p>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Footer;