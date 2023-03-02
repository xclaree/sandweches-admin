import React from "react";
import IngredientTable from "../components/IngredientTable";
import { NavLink } from "react-router-dom";


function Ingredient() {
    return (
        <>
            <div className="home" >
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <h1>Ingredient</h1>
                </div>
                <span></span>
                <NavLink to="/newingredient">
                <div className="submit-side">
                    <button style={{ width: '250px'}}>Aggiungi ingrediente</button>
                </div>
                </NavLink>
                </div>
                <div className="ingredient-list">
                    <div>
                        <IngredientTable /> 
                    </div>

                </div>
            </div>

        </>
    )
}

export default Ingredient;
