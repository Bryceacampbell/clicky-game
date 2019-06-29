import React from "react";

import "./style.css"

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li className="brand"><a href="/">Clicky Game</a></li>
                <li className="brand"></li>
                <li className="brand">Score:  0 | Top Score: 0</li>
            </ul>
        </nav>
    );
}

export default NavBar;