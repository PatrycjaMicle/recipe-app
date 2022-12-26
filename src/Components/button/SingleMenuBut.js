import React from "react";
import {ChoosingBut} from "./styled/CustonButton";

export class SingleMenuBut extends React.Component{
    /**
     * props:
     *  - text : value
     *  - callParent: function()
     */

    clickFunction =()=>{
        this.props.clicked();
    }

    render() {
        return (
            <div>
                <ChoosingBut  onClick={this.clickFunction}>
                    {this.props.text}
                </ChoosingBut>
            </div>
        );
    }

}

// export default SingleMenuBut;