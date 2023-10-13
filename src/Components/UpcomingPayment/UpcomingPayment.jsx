import React, { useEffect, useState } from "react";
import "../UpcomingPayment/UpcomingPayment.css";
import * as si from 'react-icons/si';

export default function UpcomingPayment(props){
    const[upcoming, setUpcoming] = useState();
    const[subs, setSubs] = useState();
    const[upcomingSub, setUpcomingSub] = useState();
    

    function getDates(){
        let arr = [];
        const date = new Date();
        let curDate = date.toJSON().slice(0,10);
        // console.log(curDate);
        console.log(Object.keys(subs).length)
        for(let i =0; i<Object.keys(subs).length; i++){
            
            if(curDate<subs[i].date){
                arr.push(subs[i])
                setUpcomingSub(subs[i]);
            }
        }
        console.log(arr)
        console.log(upcomingSub)
        
        
    }
    

    useEffect(() => {
    setUpcoming(props.upcoming)
    setSubs(props.subsFromStorage)
    if(subs){
      getDates();     
    }
    // console.log(subs)
    
        
    },[props])
    
    
    
    if(upcomingSub){
     return(
        <div className="upcomingP">
            <div className="upcomingPInner">
                <div className="ucBeside">
                    <span><si.SiSpotify size={50}/></span>
                    <span className="fRight2">$ {upcomingSub.price}</span>
                </div>
                
                
                <p>{upcomingSub.name}</p>
                 <p>Upcoming payment on: {upcomingSub.date.substring(5,10)} </p>
             </div>
        </div>
        )
    }else{
        return(<p>...loading</p>)
    }

}