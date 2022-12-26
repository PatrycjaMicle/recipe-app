import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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