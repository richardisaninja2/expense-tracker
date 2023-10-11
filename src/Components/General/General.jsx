import React, { useState } from "react"
import "../General/General.css"

import PaymentHist from "../PaymentHist/PaymentHist";
import UpcomingPayment from "../UpcomingPayment/UpcomingPayment";

export default function General(){
    const[subsFromStrorage, setSubsFromStrorage] = useState()
    return(
        <div className="generalCont">
            <h3>Spent this Month</h3>
            <h1>33.51</h1>
            <UpcomingPayment />
            <h2>Upcoming Payments</h2>
            <PaymentHist />
        </div>
        
    )
}