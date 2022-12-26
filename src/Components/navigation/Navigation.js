import {SingleMenuBut} from "../button/SingleMenuBut";
import {MenuNav} from "../button/styled/CustomMenu";
import React, {useState} from "react";


class Navigation extends React.Component {
    constructor() {

        super();
        this.state = {
            page: null
        }
    }
    goToParent(){
        console.log('called gotoparent');
        alert( this.text + " LOL");
        //this.setState(this.state,{page:this.text});
        // this.state.page = this.text;
    }

    render() {
        console.log('called render');
        return (
            <MenuNav className={"FirstPageNavigation"} >
                <SingleMenuBut text={"Breakfast"} clicked={this.goToParent}/>
                <SingleMenuBut text={"Lunch"} clicked={this.goToParent} />
                <SingleMenuBut text={"Dinner"} clicked={this.goToParent}/>
                <SingleMenuBut text={"Dessert"} clicked={this.goToParent}/>
            </MenuNav>
        );
    }
}


export default Navigation;