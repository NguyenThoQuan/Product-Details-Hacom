import React from "react";
import { PcDisplay, PersonCircle, Cart3 } from "react-bootstrap-icons";

export default function Personal({ money }) {
    

    return (
        <div className="personal">
            <PcDisplay className="icon-personal" />
            <PersonCircle className="icon-personal" />
            <div className="cart">
                <Cart3 className="icon-personal" />
                <div>
                    <span>Giỏ hàng</span><br />
                    <span>{money} đ</span>
                </div>
            </div>
        </div>
    )
}