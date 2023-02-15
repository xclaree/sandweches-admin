import React from "react";
import '../App.css';
import Order from "../components/OrderTable";

function Home() {
    return (
        <>
            <div className="home" >
                <div>
                    <h1>Elenco Ordini</h1>
                </div>
                <span></span>
                <div>
                    <div>
                        <Order /> 
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;
