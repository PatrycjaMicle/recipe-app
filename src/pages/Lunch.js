import React from "react";
import RecipeCointainer from "./styled/RecipeCointainer";


export default function Lunch() {
    let recipeData=["Tosts with chenese<br>","eggs,<br>bread,<br>oil,<br>","set bdjshbdbsnjnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnndhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>set bdjshbdbsdhncdncjb<br>bjsabjbajkbcjsabckas<br>chdabcdbsckeabcdj<br>"];
    return (
        <RecipeCointainer className={"cointainer"}>
            <div className={"recipeName"} dangerouslySetInnerHTML={{ __html:recipeData[0]} }></div>
            <div className={"ingredients"} dangerouslySetInnerHTML={{ __html:recipeData[1]}}></div>
            <div dangerouslySetInnerHTML={{ __html:recipeData[2]}}></div>
        </RecipeCointainer>
    )
}