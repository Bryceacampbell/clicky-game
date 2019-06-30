
import React from "react";

import "./style.css";

function Card(props) {
    return (

        <div className="col-lg-3">
            <div className="card img-container">
                <img src={props.src} alt={props.name} onClick={props.handleClick}></img>
            </div>
        </div>
    );
};


export default Card;