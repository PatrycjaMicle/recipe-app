import React from "react";
import MyMenu from "./styled/MyMenu";
import MyButton from "./styled/MyButton";

export default function Dinner() {
    return (
        <MyMenu>
            <MyButton text={"Vegetarian"}><a href={"/dinner/vege"}>Vegetarian</a></MyButton>
            <MyButton text={"With meat"}><a href={"/dinner/meat"}>With Meat</a></MyButton>
        </MyMenu>
    )
}