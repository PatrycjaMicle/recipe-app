import React from "react";
import {getRecipe, getRecipeList} from "../App";
import RecipeCointainer from "./styled/RecipeCointainer";

export default function Under30() {
    let list=getRecipeList("under_30_minutes");
    let recipeData=getRecipe(list);
    return (
        <RecipeCointainer className={"cointainer"}>
            <div className={"recipeName"} dangerouslySetInnerHTML={{ __html:recipeData[0]}}></div>
            <div className={"ingredients"} dangerouslySetInnerHTML={{ __html:recipeData[1]}}></div>
            <div dangerouslySetInnerHTML={{ __html:recipeData[2]}}></div>
        </RecipeCointainer>
    )
}