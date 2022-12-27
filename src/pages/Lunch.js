import React from "react";
import RecipeCointainer from "./styled/RecipeCointainer";


export default function Lunch() {
    let recipeData=["Tosts with chenese<br>","eggs,<br>bread,<br>oil,<br>","set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br></br>"];
    return (
        <RecipeCointainer>
            <div dangerouslySetInnerHTML={{ __html:recipeData[0]} }></div>
            <div dangerouslySetInnerHTML={{ __html:recipeData[1]}}></div>
            <div dangerouslySetInnerHTML={{ __html:recipeData[2]}}></div>
        </RecipeCointainer>
    )
}