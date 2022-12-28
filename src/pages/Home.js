import React from "react";
import MyButton from "./styled/MyButton";
import MyMenu from "./styled/MyMenu";

export default function Home() {
    let under30="Under<br/>30 minutes";
    let special="Special<br/>occasion";
    return (
        <MyMenu>
            <MyButton text={"Breakfast"}><a href={"/breakfast"}>Breakfast</a></MyButton>
            <MyButton text={"Lunch"}><a href={"/lunch"}>Lunch</a></MyButton>
            <MyButton text={"Dessert"}><a href={"/dessert"}>Dessert</a></MyButton>
            <MyButton text={"Under_30_min"}><a href={"/under_30_min"} dangerouslySetInnerHTML={{ __html:under30}}></a></MyButton>
            <MyButton text={"Special_occasion"}><a href={"/special_occasion"} dangerouslySetInnerHTML={{ __html:special}}></a></MyButton>
            <MyButton text={"Low_carb"}><a href={"/low_carb"}>Low carb</a></MyButton>
        </MyMenu>
    )
}


