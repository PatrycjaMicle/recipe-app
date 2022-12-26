import React from "react";
import Slogan from "../heading/Slogan";
import Navigation from "../navigation/Navigation";
import {FirstPage} from "./styled/CustomPage";


export function MainPage(props) {


    return (
        <FirstPage>
            <Slogan titel={"Recipe finder"} text={"Which recipe ideas are you looking for? " +
            "Lets's inspire you!"} variant={"opcja1"}/>
            <Navigation className={"FirstPageButtons"} />
        </FirstPage>
    )
}

export default MainPage;


