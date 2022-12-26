import React from 'react';
import Navbar from "./Navbar";
import Pricing from "./pages/Pricing";
import Home from "./pages/About";
import About from "./pages/About";
import Breakfast from "./pages/Breakfast";

function App() {
    let component
    switch (window.location.pathname) {
        case "/":
            component=<Home/>
            break
        case "/pricing":
            component=<Pricing/>
            break
        case "/about":
            component=<About/>
            break
        case"/breakfast":
            component=<Breakfast/>
    }
    return (
        <>
            <Navbar/>
            <div>
                {component}
            </div>

        </>
    )

}

export default App;