import React, { useEffect, useState } from "react";
import { PcDisplay, PersonCircle, Cart3 } from "react-bootstrap-icons";

export default function Personal() {
    const [namePerson, setNamePerson] = useState(false);
    const [promotion, setPromotion] = useState(0);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPromotion(localStorage.getItem("promotion"));
            setQuantity(localStorage.getItem("quantity"));
        }, 1000);

        return () => clearInterval(interval);
    }, [])

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
                    <span>{promotion} đ</span>
                </div>
            </div>
        </div>
    )
}