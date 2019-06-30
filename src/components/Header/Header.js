import React from "react";

import "./style.css";

function Header() {
    return (

        <header className="header">
            <h1>Clicky Game!</h1>
            <h2>Click on an image to earn points, but <br></br>do <strong>NOT</strong> click on the same one more than once!</h2>
        </header>
    );
};

export default Header;