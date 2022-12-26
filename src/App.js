import React from 'react';
import Navbar from "./Navbar";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Home from "./pages/Home";
import Dinner from "./pages/Dinner";

function App() {
    let component
    switch (window.location.pathname) {
        case "/":
            component=<Home/>
            break
        case"/breakfast":
            component=<Breakfast/>
            break
        case"/lunch":
            component=<Lunch/>
            break
        case"/dinner":
            component=<Dinner/>
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