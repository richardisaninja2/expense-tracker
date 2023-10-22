import React, { useEffect, useState } from "react";
import "../SingleSubscription/Subscription.css"
import * as si from 'react-icons/si';
import * as ri from 'react-icons/ri';
import AddNew from '../AddNew/AddNew'
import { NavLink } from "react-router-dom";


export default function Subscription(){
    //set style from css
    const [style, setStyle] = useState("subscriptionCont");
    const[pStyle, setPStyle] = useState("fLeft")
    const [subsFromStorage, setSubsFromStorage] = useState();
    const[updatedSubs, setUpdatedSubs] = useState();
    //  = ["#f7be02","#fe5db4", "#05b862", "#7d4cfa", "#fe6234", "a505f0"];
    const colors = new Array(15).fill(["#f7be02","#fe5db4", "#05b862", "#7d4cfa", "#fe6234", "#a505f0"]).flat();
    // console.log(colors)

    const changeStyle = (e) => {
        if(e.target.classList.contains('subscriptionCont')){
            e.target.classList.add('subscriptionContClicked')  
            e.target.classList.remove('subscriptionCont') 
            // document.querySelector('.deleteButton').style.display= 'block';
        }
        else if(e.target.classList.contains('subscriptionContClicked')){
            e.target.classList.remove('subscriptionContClicked') 
            e.target.classList.add('subscriptionCont')
            // document.querySelector('.deleteButton').style.display= 'none';
        }
    }
    // function getItems(){
        
    //     console.log(subsFromStorage)
    // }
    function handleDelete(i){
        subsFromStorage.splice(i,1)
        setUpdatedSubs(subsFromStorage)
        localStorage.setItem('subscription', JSON.stringify(subsFromStorage))    
        // console.log(subsFromStorage)
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
            <div className="subscriptionPage">
            {/* <AddNew/> */}
             <div className="subscriptionCont  blue">
                <p className="fLeft">Add a subscription<br/>
                </p>
                
                <p className="fRight"><NavLink to="/addNew"><ri.RiAddCircleLine size={50}/></NavLink></p>
    
            </div> 
            {subsFromStorage && Object.keys(subsFromStorage).map((i, key) => (
                <div key={key} className={style} onClick={changeStyle}
                style={{backgroundColor: colors[i] } }>
                    <p  className="fLeft">{subsFromStorage[i].name}<br/>
                        <span>${subsFromStorage[i].price}/month</span>  
                        <button className="deleteButton" onClick={() => handleDelete(i)}>Delete</button>
                    </p>
                    
                    { <p className="fRight"><si.SiNetflix size={50}/></p> }
                    <br/>
                    
                </div>
            ))}
    
    
    
    

            </div>
        )
    }
    
}