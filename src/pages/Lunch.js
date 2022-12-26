import React from "react";
import MyMenu from "./styled/MyMenu";
import MyButton from "./styled/MyButton";

export default function Lunch() {
        return (
            <MyMenu>
                <MyButton text={"Vegetarian"}><a href={"/lunch/vege"}>Vegetarian</a></MyButton>
                <MyButton text={"With meat"}><a href={"/lunch/meat"}>With Meat</a></MyButton>
            </MyMenu>
        )
}