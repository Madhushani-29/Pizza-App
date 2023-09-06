import React from "react";
import '../CSS/ContactUs.css';
import HalfPizza from '../Images/Pizza.jpg';

const ContactUs = () =>
{
    return(
        <div className="contactMainDiv">
            <div>
                <img src={HalfPizza} alt="half pizza"  className="contactImage"/>
            </div>
            <div className="contactFormDiv">
                <div className="contactHeader">
                    <p>Contact Us</p>
                </div>
                <div className="contactForm">
                    <form> 
                        <table>
                            <tr>
                                <td>
                                    <label className="formLabel">Full Name</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" placeholder="Your Full Name" className="inputField"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="formLabel">Email Address</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="email" placeholder="Your Email Address" className="inputField"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="formLabel">Message</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <textarea placeholder="Your Message" className="textArea"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className="contactButton">Send</button>
                                </td>
                            </tr>
                        </table>
                        
                        
                        
                        
                        
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;