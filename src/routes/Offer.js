import React from "react";
import OfferTable from "../components/OfferTable";
import { NavLink } from "react-router-dom";

function Offer(){
    return (
        <>
            <div className="home" >
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <h1>Offer</h1>
                </div>
                <span></span>
                <NavLink to="/newoffer">
                <div className="submit-side">
                <button style={{ width: '250px'}}>Aggiungi Offerta</button> 
                </div>
                </NavLink>
                </div>
                <div className="offer-list">
                    <div>
                        <OfferTable /> 
                    </div>

                </div>
            </div>

        </>
    )
}

export default Offer;
