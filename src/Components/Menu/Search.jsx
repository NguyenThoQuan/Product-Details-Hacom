import React from "react";
import { Search } from "react-bootstrap-icons";

export default function Searchh() {
    return (
        <div className="search">
            <input type="text" placeholder="Nhập tên sản phẩm cần tìm" />
            <div>
                <Search className="icon-search" />
            </div>
        </div>
    )
}