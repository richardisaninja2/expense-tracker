import React from "react"
import "../General/General.css"
import * as si from 'react-icons/si';
import PaymentHist from "../PaymentHist/PaymentHist";

export default function General(){
    return(
        <div className="generalCont">
            <h3>Spent this Month</h3>
            <h1>33.51</h1>
            <div className="upcomingP">
                <p className=""><si.SiSpotify size={50}/></p>
                <p>Spotify</p>
                <p>Upcoming payment on: 25.01 </p>
            </div>
            <PaymentHist/>
        </div>
        
    )
}