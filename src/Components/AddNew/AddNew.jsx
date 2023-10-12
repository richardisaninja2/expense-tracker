import React, { useState } from "react";
import "../AddNew/AddNew.css"
import { useNavigate } from "react-router-dom";

export default function AddNew(){
    const [sub, setSub] = useState({});
    var subHistArray = JSON.parse(localStorage.getItem('subscription') || '[]');
    const navigate = useNavigate();



    function handleSubmit(e){
            e.preventDefault();
            navigate("/subscriptions")
            if(sub.name.length != 0){
                subHistArray.push(sub);
            }
            localStorage.setItem('subscription', JSON.stringify(subHistArray))
    }
    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setSub(values => ({...values, [name]: value}))
        
    }
    return(
        <form onSubmit={handleSubmit} className="addNewPage">
          <label>Enter your Subscription:
          <br/>
            <input
              type="date"
              name="date"
              placeholder="Choose Date"
              value={sub.color || ""} 
              onChange={handleChange}
              
            />
            <br/>
            <input
              type="number" 
              name="price"
              placeholder="price"
              value={sub.price || ""}
              onChange={handleChange}
              
            />
            <br/>
            <input
              type="text" 
              name="name"
              placeholder="name"
              value={sub.name || ""}
              onChange={handleChange}
              
            />
            <br/>
             <input type="submit" />
          </label>
        </form>
      )
}