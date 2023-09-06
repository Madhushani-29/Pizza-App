import React from "react";
import instalogo from '../Images/instagramlogo.png';
import twitterlogo from '../Images/twitterlogo.png';
import fblogo from '../Images/facebooklogo.png';
import linkedinlogo from '../Images/linkedinlogo.png';
import '../CSS/FooterStyle.css';

const Footer = () =>
{
    return(
        <div className="mainDivFooter">
            <div className="footerDivStyle">
                <a href="https://www.instagram.com/">
                    <img src={instalogo} alt="instagram logo" className="logoStyle"/>
                </a>
                <a href="https://twitter.com/?lang=en">
                    <img src={twitterlogo} alt="twitter logo" className="logoStyle"/>
                </a>
                <a href="https://www.facebook.com">
                    <img src={fblogo} alt="facebook logo" className="logoStyle"/>
                </a>
                <a href="https://lk.linkedin.com/">
                    <img src={linkedinlogo} alt="linkedin logo" className="linkedinlogoStyle"/>
                </a>
            </div>
            <br/>
            <p className="para">@2023pizza.com</p>
        </div>

    );
}

export default Footer;