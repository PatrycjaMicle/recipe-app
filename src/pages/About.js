import React from "react";
import MyButton from "./styled/MyButton";
import MyMenu from "./styled/MyMenu";
import Breakfast from "./Breakfast";
import Home from "./Home";
import Lunch from "./styled/Lunch";


export default function About() {

    return (
            <MyMenu>
                <MyButton text={"Breakfast"}><a href={"/breakfast"}>Breakfast</a></MyButton>
                <MyButton text={"Lunch"}><a href={"/lunch"}>Lunch</a></MyButton>
                <MyButton text={"Dinner"}><a href={"/dinner"}>Dinner</a></MyButton>
                <MyButton text={"Dessert"}><a href={"/dessert"}>Dessert</a></MyButton>
            </MyMenu>
    )
}


