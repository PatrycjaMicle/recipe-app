import React from 'react';
import Navbar from "./Navbar";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Home from "./pages/Home";
import Dinner from "./pages/Dinner";

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
        case"/dinner":
            component=<Dinner/>
    }
    if (window.location.pathname=="/breakfast"){
        let list=getRecipeList();
        getRecipe(list);

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

function getRecipeList(){

    const urlBreakfast = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=breakfast";

    function httpGet(url) {
        const request = new XMLHttpRequest();
        request.open("GET", url, false); // async: false?
        request.setRequestHeader('X-RapidAPI-Key','ad4b45ab06msh184b62126bc0e87p15d299jsn3c0c3f024f01');
        request.setRequestHeader('X-RapidAPI-Host','tasty.p.rapidapi.com')
        request.send(null); // body:null??

        return request.responseText;
    }

    function getList(url) {
        const response = httpGet(url);
        return JSON.parse(response);
    }

    return getList(urlBreakfast);
}



function getRecipe(list){

    let name=list.results[1].name+"\n";                                 //name
    const componentsList= list.results[1].sections[0].components;

    let ingredients = "";                                           //ingredients
    for(let i=0;i<componentsList.length;i++){
        let component =componentsList[i].raw_text+"\n";
        ingredients+=component;
    }

    const instructionsList=list.results[1].instructions;
    let instructions="";                                        //instructions
    for(let i=0;i<instructionsList.length;i++){
        let instruction=instructionsList[i].display_text+"\n";
        instructions+=instruction;
    }

    console.log(name,ingredients,instructions);

    //NEXT STEPS
    //epxport name , ingredients , instructions
    //import in components
}

export default App;