import React from "react";
import '../CSS/MenuStyle.css';
import { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Menu = () =>
{
    const navigate=useNavigate();
    const [data, setData]=useState([]);

    useEffect(()=>{
        axios.get('https://pizza-app-omega-bay.vercel.app/Menu')
        .then((response)=>{
            setData(response.data);
        })
        .catch((error)=>{
            console.error(error)
        })
    }, []);


    const dataSet = data.map((item) =>{
        return(
            <div key={item.id}  className="itemStyle" onClick={()=>{navigate('/fooddetails', {state:{name:item.name, price:item.price, photo:item.photo, description:item.description, ingredients:item.ingredients}});}}>
                <img src={item.photo} alt={item.name} className="pizzaTypeStyle"/>
                <p className="pizzaName">{item.name}</p>
                <p className="pizzaPrice">{item.price}</p>
            </div>
        );
    });
    return(
        <div className="mainDivMenu">
            <p className="headingStyle">Our Menu</p>
            <div className="itemDivStyle">
                {dataSet}
            </div>            
        </div>
    );
}

export default Menu;
