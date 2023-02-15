import React from "react";
import OfferTable from "../components/OfferTable";

function Offer(){
    return (
        <>
            <div className="home" >
                <div>
                    <h1>Offer</h1>
                </div>
                <span></span>
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
