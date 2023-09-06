import React from "react";
import { Link } from "react-router-dom";
import pizzaheaderimage from '../Images/pizzaheaderimage.jpg';
import '../CSS/HeaderStyles.css';

const Header = () =>
{
    return(
        <div className="mainDiv">
            <div>
                <img src={pizzaheaderimage} alt="pizza icon" className="imageStyle"/>
            </div>
            <div className="linkDivStyle">
                <b>
                    <Link to='/' className="linkStyle">Home</Link>
                    <Link to='/menu' className="linkStyle">Menu</Link>
                    <Link to='/aboutus' className="linkStyle">About Us</Link>
                    <Link to='/contactus' className="linkStyle">Contact</Link>
                </b>
            </div>
        </div>
    );
}

export default Header;