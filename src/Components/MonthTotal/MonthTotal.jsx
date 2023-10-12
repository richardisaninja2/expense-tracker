import React, { useEffect, useState } from "react";
import "../MonthTotal/MonthTotal.css"


export default function MonthTotal(props){
    const[total,setTotal] = useState();

    useEffect(() => {
    setTotal(props.total)

    },[props])

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    let name = month[d.getMonth()];

    if(props.total){
       return(
        <div className="monthTot">
            <h3>{name}'s Estimate</h3>
            <h1>${total}</h1>
        </div>
    ) 
    }else{
        return(
            <p>...please input some expenses</p>
        )
    }
    
}