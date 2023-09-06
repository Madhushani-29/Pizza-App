import React from "react";
import PizzaWithBoard from '../Images/AbousUsPizza.jpg';
import '../CSS/AboutUsStyle.css';
import PizzawithVine from '../Images/PizzawithVine.jpg';

const AboutUs = () =>
{
    return(
        <div>
            <div>
                <img src={PizzaWithBoard} alt="pizza with board" className="backgroundPizza"/>
            </div>
            <div className="aboutUsDiv">
                <div>
                    <img src={PizzawithVine} alt="pizza with vine" className="pizzaVineImage"/>
                </div>
                <div>
                    <p className="para1AboutUs">About Us</p>
                    <p className="para2AboutUs">
                        When it comes to making pizza, we’re the experts. Drawing on centuries of Italian techniques, we infuse our own unique methods and ingredient combinations to create pizzas that are delectable and unlike anything else in the world. After all these years, we’re still as passionate about pizza as the day we opened. We want to give our customers the best pizza experience, which is why we never cut corners and continue to go to great lengths to ensure our pizzas are as tasty as possible. We love pizza and we want you to love it as much as we do. 11 Inch Pizza’s cosy restaurant is located in the heart of Melbourne city on Little Collins Street. Our central location makes us the perfect stop for any late-night cravings or quick lunch breaks. With our friendly and welcoming atmosphere, you can feel right at home immediately so that you can have a relaxed and casual dining experience.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;