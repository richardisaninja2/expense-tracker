import React, { useEffect, useState } from "react"
import "../General/General.css"

import PaymentHist from "../PaymentHist/PaymentHist";
import UpcomingPayment from "../UpcomingPayment/UpcomingPayment";
import MonthTotal from "../MonthTotal/MonthTotal";

export default function General(){
    const[subsFromStrorage, setSubsFromStrorage] = useState()

    const [subsFromStorage, setSubsFromStorage] = useState();
    const[upcoming, setUpcoming] = useState();
    const[total,setTotal] = useState();
    let sum = 0;
    const subFromStorage = JSON.parse(localStorage.getItem('subscription'));
    
    useEffect(() => {
        //    getItems();
        //bypass the infinite load 
        
        if(subFromStorage){  
            subFromStorage.sort(function(a,b){
                return new Date(a.date) - new Date(b.date);
            });
            setSubsFromStorage(subFromStorage)   
            setUpcoming(subFromStorage[0])

           
           for(let i = 0; i<Object.keys(subFromStorage).length; i++){  
            sum += Number.parseInt(subFromStorage[i].price)
           }
           setTotal(sum)
           
        }
        // setSubsFromStorage(JSON.parse(localStorage.getItem('subscription')))
        // console.log(JSON.parse(localStorage.getItem('subscription')))
           
      
    },[total])
    
        


    return(
        <div className="generalCont">
            <MonthTotal total={total}/>
            <UpcomingPayment upcoming={upcoming} subsFromStorage={subsFromStorage}/>
            <h2>Payments</h2>
            <PaymentHist />
        </div>
        
    )
}