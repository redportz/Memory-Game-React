import React from"react";
import {useNavigate} from "react-router-dom";
import cardSets from "../Categories/index.js";
import "./CategorySelect.css";

function CategorySelect() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Select a Category</h1>

            {console.log(cardSets)}
            {Object.keys(cardSets).map((key) =>(
                <button 
                    key = {key}
                    onClick = {()  => navigate(`/game/${key}`)}
                >
                {key.toUpperCase()}                   
                </button>            
            ))}
        </div>
    );
}

export default CategorySelect