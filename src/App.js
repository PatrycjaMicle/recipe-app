import React from 'react';
import Navbar from "./Navbar";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Home from "./pages/Home";
import Dessert from "./pages/Dessert";
import Under30 from "./pages/Under30";
import LowCarb from "./pages/LowCarb";
import SpecialOccasion from "./pages/SpecialOccasion";

function App() {
    let component
    switch (window.location.pathname) {
        case "/":
            component=<Home/>
            break
        case"/breakfast":
            component=<Breakfast/>
            break
        case"/lunch":
            component=<Lunch/>
            break
        case"/under_30_min":
            component=<Under30/>
            break
        case"/dessert":
            component=<Dessert/>
            break
        case "/low_carb":
            component=<LowCarb/>
            break
        case "/special_occasion":
            component=<SpecialOccasion/>
    }


    return (
        <>
            <Navbar/>
            <div>
                {component}
            </div>
        </>
    )

}

export function getRecipeList(meal){

    const url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags="+meal;

    function httpGet(url) {
        const request = new XMLHttpRequest();
        request.open("GET", url, false);
        request.setRequestHeader('X-RapidAPI-Key','ad4b45ab06msh184b62126bc0e87p15d299jsn3c0c3f024f01');
        request.setRequestHeader('X-RapidAPI-Host','tasty.p.rapidapi.com')
        request.send(null);

        return request.responseText;
    }

    function getList(url) {
        const response = httpGet(url);
        return JSON.parse(response);
    }

    return getList(url);
}

export function getImage() {

}

export function getRecipe(list){


    const random = Math.floor(Math.random() * 5);

    let name=list.results[random].name+"<br/>";                        //name
    const componentsList= list.results[random].sections[0].components;

    let ingredients = "";                                           //ingredients
    for(let i=0;i<componentsList.length;i++){
        let component =componentsList[i].raw_text+"<br/>";
        ingredients+=component;
    }

    const instructionsList=list.results[random].instructions;
    let instructions="";                                        //instructions
    for(let i=0;i<instructionsList.length;i++){
        let instruction=instructionsList[i].display_text+"<br/>";
        instructions+=instruction;
    }

    const recipeData = [name, ingredients, instructions];
    return recipeData;
}

export default App;