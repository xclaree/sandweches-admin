import React from "react";
import IngredientTable from "../components/IngredientTable";

function Ingredient() {
    return (
        <>
            <div className="home" >
                <div>
                    <h1>Ingredient</h1>
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