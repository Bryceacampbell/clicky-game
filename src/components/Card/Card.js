
import React from "react";

import "./style.css";

function Card(props) {
    return (
        <div className="card col-lg-3">
            <img src={props.src} alt={props.name} onClick={props.handleClick}></img>
        </div>
    );
};


export default Card;