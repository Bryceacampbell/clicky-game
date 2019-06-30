import React from "react";

import "./style.css";

function NavBar(props) {
    return (
        <nav className="navbar">
            <ul>
                <li className="brand"><a href="/">Clicky Game</a></li>
                <li className="brand"></li>
                <li className="brand">Score:  {props.score} | Top Score: {props.highscore}</li>
            </ul>
        </nav>
    );
};

export default NavBar;