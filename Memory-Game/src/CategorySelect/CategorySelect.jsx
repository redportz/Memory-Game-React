import React from"react";
import {useNavigate} from "react-router-dom";
import cardSets from "../Categories/index.js";
import "./CategorySelect.css";

function CategorySelect({difficulty}) {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Select category</h1>
            <div className="options">
            {Object.keys(cardSets).map((category) =>(
                <div key={category} className={`${category}s categories`}>
                <button
                    className="category_btn" 
                    key ={`${category}s_btn`}
                    onClick = {()  => navigate(`/game/${category}/${difficulty}`)}
                    >
                <img src={`/assets/${category}s/${category}_1.webp`} alt={`${category}`} />
                <p className="category_label">
                {`${category.replace(/_/g," ").toUpperCase()}S`}
                </p>
                </button>            
                    </div>
            ))}
            </div>
        </div>
    );
}
export default CategorySelect