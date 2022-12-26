import {PageSlogan, PageTitel} from "./styled/CustomSlogan";
import React from "react";

export function Slogan(props) {
    return (
        <div className="titel">
            <PageTitel variant={props.variant}>
                {props.titel}
            </PageTitel>
            <PageSlogan>
                {props.text}
            </PageSlogan>
        </div>
    );
}

export default Slogan;