import React, { useState } from "react";
import { PcDisplay, PersonCircle, Cart3 } from "react-bootstrap-icons";

export default function Personal({ money, quantity }) {
    const [namePerson, setNamePerson] = useState(false);

    return (
        <div className="personal">
            <PcDisplay className="icon-personal" />
            <PersonCircle className="icon-personal" onMouseEnter={() => setNamePerson(true)} onMouseLeave={() => setNamePerson(false)} />
            {
                namePerson ? <span className="name-person">Nguyễn Thọ Quân</span> : <></>
            }
            <div className="cart">
                <Cart3 className="icon-personal" />
                <span className="quantity">{quantity}</span>
                <div>
                    <span>Giỏ hàng</span><br />
                    <span>{money} đ</span>
                </div>
            </div>
        </div>
    )
}