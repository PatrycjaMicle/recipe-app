import React from "react";
import MyButton from "./styled/MyButton";
import MyMenu from "./styled/MyMenu";

export default function Home() {
 let brVar="br <br> br1"
    return (
        <MyMenu>
            <MyButton text={"Breakfast"}><a href={"/breakfast"}>Breakfast</a></MyButton>
            <MyButton text={"Lunch"}><a href={"/lunch"}>Lunch</a></MyButton>
            <MyButton text={"Dinner"}><a href={"/dinner"}>Dinner</a></MyButton>
            <MyButton text={"Dessert"}><a href={"/desserts"}>Dessert</a></MyButton>
            <div dangerouslySetInnerHTML={{ __html:brVar}}></div>
        </MyMenu>
    )
}


