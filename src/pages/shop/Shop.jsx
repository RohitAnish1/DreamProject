import React from "react";
import "./shop.css";


export default function Shop(){
    return(
        <div className="Shop">
            <div className="top-bar">
            <textarea name="search" id="srh" cols="30" rows="10"></textarea>
            </div>
            <div className="left-bar">
           <h2>Categories:</h2>
           <h3>Mens
            <br/>Womens
            <br/>Kids
           </h3>
            </div>
            <div className="cards">
            
            </div>
            <div className="right-bar">

            </div>
        </div>
    )
}