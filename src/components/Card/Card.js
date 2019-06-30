
import React from "react";

import "./style.css";

function Card(props) {
    console.log(props);
    return (
        <div className="card col-lg-3">
            <img src={props.src} alt={props.name}></img>
        </div>
    );
};


export default Card;