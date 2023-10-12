import React, { useEffect, useState } from "react";
import "../UpcomingPayment/UpcomingPayment.css";
import * as si from 'react-icons/si';

export default function UpcomingPayment(props){
    const[upcoming, setUpcoming] = useState();
    useEffect(() => {
        setUpcoming(props.upcoming)
    },[props])
    
    
    
    if(upcoming){
     return(
        <div className="upcomingP">
            <div className="upcomingPInner">
                <div className="ucBeside">
                    <span><si.SiSpotify size={50}/></span>
                    <span className="fRight2">$ {upcoming.price}</span>
                </div>
                
                
                <p>{upcoming.name}</p>
                 <p>Upcoming payment on: {upcoming.date.substring(5,10)} </p>
             </div>
        </div>
        )
    }else{
        return(<p>...loading</p>)
    }

}