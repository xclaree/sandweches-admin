import React from "react";
import OfferTable from "../components/OfferTable";
import { NavLink } from "react-router-dom";

function Offer(){
    return (
        <>
            <div className="home" >
                <div>
                    <h1>Offer</h1>
                </div>
                <span></span>
                <NavLink to="/newoffer">
                <div className="addProduct"><h2 style={{ color: "#000"}}> Add Offer </h2> 
                </div>
                </NavLink>
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
