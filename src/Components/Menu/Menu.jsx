import React, { useState, useEffect } from "react";
import Searchh from "./Search";
import Personal from "./Personal";
import ListMenu from "./ListMenu";
import { List } from "react-bootstrap-icons";
import "../../Styles/Menu.scss";
import logo from "../../Images/logo-hacom-compressed4.f1d79573.svg"

export default function Menu() {
    const [isSticky, setIsSticky] = useState(false);
    const [onHover, setOnHover] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={isSticky ? "sticky" : "menu"} style={{}}>
                {
                    isSticky ? <div className="new-menu" onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}><List className="icon" />Danh mục</div> : <></>
                }
                <img src={logo} alt="logo" />
                <Searchh />
                <Personal />
            </div>
            <ListMenu onHover={onHover} />
        </>
    )
}