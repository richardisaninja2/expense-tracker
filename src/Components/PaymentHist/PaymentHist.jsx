import React, { useEffect, useState } from "react"
import "../PaymentHist/PaymentHist.css"
import * as si from 'react-icons/si';

export default function PaymentHist(props){

    const [subsFromStorage, setSubsFromStorage] = useState();
    let invoiceDate;
    let dueDate;
    useEffect(() => {
        //    getItems();
        //bypass the infinite load 
        const subFromStorage = JSON.parse(localStorage.getItem('subscription'));
        if(subFromStorage){  
            subFromStorage.sort(function(a,b){
                return new Date(a.date) - new Date(b.date);
            });
            setSubsFromStorage(subFromStorage)
            
        }
        // setSubsFromStorage(JSON.parse(localStorage.getItem('subscription')))
        // console.log(JSON.parse(localStorage.getItem('subscription')))
           
     
     
    },[])
    
   

    

    function due(a){
    var dueDateElement = document.querySelector("#dueDate");
        // a.split("-");
        // invoiceDate = new Date(a[0],a[1] - 1,a[2])
        // dueDate = invoiceDate.setDate(invoiceDate.getDate() + 30)
        // dueDate.valueAsDate = new Date();
        // return dueDate;

    invoiceDate = a.split("-");
    invoiceDate = new Date(invoiceDate[0], invoiceDate[1] - 1, invoiceDate[2]);
    
    invoiceDate.setDate(invoiceDate.getDate() + 30)
    return invoiceDate.toString().substring(0, 15);
    // dueDateElement.valueAsDate = invoiceDate;

    }

    if(!Object.keys(subsFromStorage || {})){
        // console.log(subsFromStorage)
        return(<p>...no Subs yet</p>)
    }else{
        return(<div className="paymentH">
                {/* {console.log(subsFromStorage && Object.keys(subsFromStorage).map(key => subsFromStorage[key]))} */}
                {subsFromStorage && Object.keys(subsFromStorage).map((i, key) => (
                    <div key={key} className="paymentInner">
                        <p><si.SiNetflix size={30}/></p> 
                        <div className="paymentInnerFlex">
                            <p>{subsFromStorage[i].name}</p>
                            <p id="invoiceDate">
                                    {due(subsFromStorage[i].date)}
                            </p> 
                        </div>
                           <p className="fRight">-${subsFromStorage[i].price}</p>
                            
                        
                        
                    </div>
                ))}
        </div>)
    }

}