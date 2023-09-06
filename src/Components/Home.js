import React from "react";
import pizzahomebackground from '../Images/HomeBackground.jpg';
import '../CSS/HomeStyle.css';

const Home = () =>
{
    return(
        <div>
            <img src={pizzahomebackground} alt="pizza" className="imgStyle"/>
            <div>
                <p className="para1">Fedora's <span className="darkFont">P</span>izza</p>
                <p className="para2">PIZZA TO FIT ANY TA<span className="darkFont">ST</span>E</p>
                <button className="button">ORDER</button>
            </div>
        </div>
    );
}

export default Home;