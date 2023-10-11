import React, { useEffect, useState } from "react";
import "../SingleSubscription/Subscription.css"
import * as si from 'react-icons/si';
import AddNew from '../AddNew/AddNew'


export default function Subscription(){
    const [subsFromStorage, setSubsFromStorage] = useState();
    const[updatedSubs, setUpdatedSubs] = useState();
    const colors = ["#f7be02","#fe5db4", "#05b862", "#7d4cfa", "#fe6234", "a505f0"];
    

    // function getItems(){
        
    //     console.log(subsFromStorage)
    // }
    function handleDelete(i){
        subsFromStorage.splice(i,1)
        setUpdatedSubs(subsFromStorage)
        localStorage.setItem('subscription', JSON.stringify(subsFromStorage))    
        console.log(subsFromStorage)
    }

useEffect(() => {
    //    getItems();
    //bypass the infinite load 
    const subsFromStorage = JSON.parse(localStorage.getItem('subscription'));
    if(subsFromStorage){
        setSubsFromStorage(subsFromStorage)
    }
    // setSubsFromStorage(JSON.parse(localStorage.getItem('subscription')))
    console.log(JSON.parse(localStorage.getItem('subscription')))
    
},[updatedSubs])

    if(!Object.keys(subsFromStorage || {})){
        // console.log(subsFromStorage)
        return(<p>...loading</p>)
    }else{
        return(
            <div>
            <AddNew/>
            {subsFromStorage && Object.keys(subsFromStorage).map((i, key) => (
                <div key={i} className="subscriptionCont"
                style={{backgroundColor: colors[i] }}>
                    <p  className="fLeft">{subsFromStorage[i].name}<br/>
                        <span>${subsFromStorage[i].price}/month</span>  
                    </p>
                    <button onClick={() => handleDelete(i)}/>
                    { <p className="fRight"><si.SiNetflix size={50}/></p> }
                    
                </div>
            ))}
    
    
    
    
            {/* <div className="subscriptionCont">
                <p className="fLeft">Spotify<br/>
                  <span>$8/month</span>  
                </p>
                
                <p className="fRight"><si.SiSpotify size={50}/></p>
    
            </div> */}
            </div>
        )
    }
    
}