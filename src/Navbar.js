import React from "react";

export default  function Navbar(){
    return <nav className={"nav"}>
        <a href={"/"} className={"site-title"}>Find my recipe!</a>
        <ul>
            <li>
                <a href={"/"}>Home</a>
            </li>
        </ul>
    </nav>
}