import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default  function Navbar(){
    return <nav className={"nav"}>
        <a href={"/"} className={"site-title"}>Site Name</a>
        <ul>
            <li>
                <a href={"/pricing"}>Pricing</a>
            </li>
            <li>
                <a href={"/about"}>About</a>
            </li>
        </ul>
    </nav>
}