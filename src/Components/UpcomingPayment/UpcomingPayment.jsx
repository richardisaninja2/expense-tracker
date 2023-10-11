import React, { useEffect, useState } from "react";
import "../UpcomingPayment/UpcomingPayment.css";
import * as si from 'react-icons/si';

export default function UpcomingPayment(){
    const [subsFromStorage, setSubsFromStorage] = useState();
    const[upcoming, setUpcoming] = useState();

    useEffect(() => {
        //    getItems();
        //bypass the infinite load 
        const subFromStorage = JSON.parse(localStorage.getItem('subscription'));
        if(subFromStorage){  
            subFromStorage.sort(function(a,b){
                return new Date(a.date) - new Date(b.date);
            });
            setSubsFromStorage(subFromStorage)   
            setUpcoming(subFromStorage[0])
        }
        // setSubsFromStorage(JSON.parse(localStorage.getItem('subscription')))
        // console.log(JSON.parse(localStorage.getItem('subscription')))
           

      
    },[])
    console.log(upcoming)
    
    
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