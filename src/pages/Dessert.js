import React from "react";
import {getRecipe, getRecipeList} from "../App";
import RecipeCointainer from "./styled/RecipeCointainer";

export default function Dessert() {
    let list=getRecipeList("desserts");
    let recipeData=getRecipe(list);
    return (
        <RecipeCointainer className={"cointainer"}>
            <div className={"recipeName"} dangerouslySetInnerHTML={{ __html:recipeData[0]}}></div>
            <div className={"ingredients"} dangerouslySetInnerHTML={{ __html:recipeData[1]}}></div>
            <div dangerouslySetInnerHTML={{ __html:recipeData[2]}}></div>
        </RecipeCointainer>
    )
}