import React, { useState } from "react";

export default function AddNew(){
    const [sub, setSub] = useState({});
    var subHistArray = JSON.parse(localStorage.getItem('subscription') || '[]');



    function handleSubmit(e){
            e.preventDefault();
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
        <form onSubmit={handleSubmit}>
          <label>Enter your name:
            <input
              type="text"
              name="color"
              placeholder="color"
              value={sub.color || ""} 
              onChange={handleChange}
              
            />
            <input
              type="text" 
              name="price"
              placeholder="price"
              value={sub.price || ""}
              onChange={handleChange}
              
            />
            <input
              type="text" 
              name="name"
              placeholder="name"
              value={sub.name || ""}
              onChange={handleChange}
              
            />
             <input type="submit" />
          </label>
        </form>
      )
}