import React from "react";
import MyMenu from "./styled/MyMenu";
import {getRecipe, getRecipeList} from "../App";
import RecipeCointainer from "./styled/RecipeCointainer";

export default function Breakfast() {
    let list=getRecipeList("breakfast");
    let recipeData=getRecipe(list);
    return (
        <RecipeCointainer>
           <div  dangerouslySetInnerHTML={{ __html:recipeData[0]}}></div>
            <div dangerouslySetInnerHTML={{ __html:recipeData[1]}}></div>
            <div dangerouslySetInnerHTML={{ __html:recipeData[2]}}></div>
        </RecipeCointainer>
    )
}