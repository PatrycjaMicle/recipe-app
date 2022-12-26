import React from "react";
import {ChoicePage} from "./styled/CustomPage";
import {SingleMenuBut} from "../button/SingleMenuBut";



export function SecondChoicePage(props) {

    return (
        <ChoicePage>
            <SingleMenuBut text={"Vegetarian"}/>
            <SingleMenuBut text={"With meat"}/>
            <SingleMenuBut text={"Sweet"}/>
        </ChoicePage>

    )
}

export default SecondChoicePage;


