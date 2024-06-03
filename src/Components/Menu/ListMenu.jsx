import React from "react";

export default function ListMenu({ onHover }) {
    return (
        <div className={!onHover ? "list-menu none" : "list-menu block"}>
            <span>Danh sách menu</span>
        </div>
    )
}