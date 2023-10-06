import React, { useEffect, useState } from "react";
import "../SingleSubscription/Subscription.css"
import * as fa from 'react-icons/fa';
import AddNew from "../AddNew/AddNew";


export default function Subscription(){
    const [subsFromStorage, setSubsFromStorage] = useState();
    const arr = [];
    setSubsFromStorage(JSON.parse(localStorage.getItem('subscription')))

    


useEffect(() => {
       
    console.log(subsFromStorage)
},[subsFromStorage])

    if(Object.keys(subsFromStorage || {})){
        return(<p>...loading</p>)
    }else{
        return(
            <div>
            <AddNew/>
            {Object.keys(subsFromStorage).map((i, key) => (
                <div>
                    {subsFromStorage.name}
                </div>
            ))}
    
    
    
    
            <div className="subscriptionCont">
                <p className="fLeft">Spotify<br/>
                  <span>$8/month</span>  
                </p>
                
                <p className="fRight"><fa.FaSpotify size={50}/></p>
    
            </div>
            </div>
        )
    }
    
}