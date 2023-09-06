import React from "react";
import { useLocation } from "react-router-dom";
import '../CSS/FoodDetails.css';

const FoodDetails = () =>{
    const location=useLocation();
    const {name, price, description, photo, ingredients}=location.state;
    const ingredientsList=ingredients.map((ingredients, index) => (
        <p key={index}>{ingredients}</p>
        ));
    return(
        <div className="foodDetailsMainDiv">
            <div><b><p className="mainHeading">{name}</p></b></div>
            <div className="imgDesDiv">
                <div className="imageDiv"><img className="foodImage" src={photo} alt=""/></div>
                <div className="descrDiv"><p>{description}</p></div>
            </div>
            <div className="ingrPriceDiv">    
                <p className="pHeading"><b>Ingredients:</b></p>
                <p className="ingredListStyle">{ingredientsList}</p>
                <p><b>Price:</b>{price}</p>
            </div>     
        </div>
    );
}

export default FoodDetails;