import React from "react";
import MyButton from "./styled/MyButton";
import MyMenu from "./styled/MyMenu";

export default function Home() {

    return (
        <MyMenu>
            <MyButton text={"Breakfast"}><a href={"/breakfast"}>Breakfast</a></MyButton>
            <MyButton text={"Lunch"}><a href={"/lunch"}>Lunch</a></MyButton>
            <MyButton text={"Dinner"}><a href={"/dinner"}>Dinner</a></MyButton>
            <MyButton text={"Dessert"}><a href={"/dessert"}>Dessert</a></MyButton>
        </MyMenu>
    )
}


