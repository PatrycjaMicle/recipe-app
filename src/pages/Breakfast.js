import React from "react";
import MyButton from "./styled/MyButton";
import MyMenu from "./styled/MyMenu";

export default function Breakfast() {
    return (
        <MyMenu>
            <MyButton text={"Vegetarian"}><a href={"/breakfast/vege"}>Vegetarian</a></MyButton>
            <MyButton text={"With meat"}><a href={"/breakfast/meat"}>With Meat</a></MyButton>
            <MyButton text={"Sweet"}><a href={"/breakfast/sweet"}>Sweet</a></MyButton>
        </MyMenu>
    )
}