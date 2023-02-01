import React from "react";
import '../App.css';
import Order from "../components/Order";

function Home(){
    return(
        <>
        <div className="home" >
            <div >
            <h1>Elenco Ordini</h1>
            </div>
            <div className="order-list">
            <Order />
            </div>
        </div>
        
        </>
    )
}

export default Home;