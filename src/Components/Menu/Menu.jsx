import React, { useState } from "react";
import Searchh from "./Search";
import Personal from "./Personal";
import "../../Styles/Menu.scss";
import logo from "../../Images/logo-hacom-compressed4.f1d79573.svg"

export default function Menu() {
    const [money] = useState(0);

    return (
        <div className="menu">
            <img src={logo} alt="logo" />
            <Searchh />
            <Personal money={money} />
        </div>
    )
}