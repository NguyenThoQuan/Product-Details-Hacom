import React from "react";
import TopFooter from "./TopFooter";
import MidFooter from "./MidFooter";
import BottomFooter from "./BottomFooter";
import "../../Styles/Footer.scss"

export default function Footer() {
    return (
        <div className="footer">
            <TopFooter />
            <MidFooter />
            <BottomFooter />
        </div>
    )
}