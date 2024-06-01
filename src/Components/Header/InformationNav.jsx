import React from "react";
import Hotline from "./Hotline";
import Store from "./Store";
import Information from "./Information";
import "../../Styles/InformationNav.scss";

export default function InformationNav() {
    return (
        <div className="info-nav">
            <Hotline />
            <Store />
            <Information />
        </div>
    )
}