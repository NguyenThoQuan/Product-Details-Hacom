import React, { useState } from "react";
import { ShopWindow, CaretDownFill } from "react-bootstrap-icons";

export default function Store({ store }) {
    const [clickButton, setClickButton] = useState(false);

    return (
        <div className="set-background">
            <div className="store">
                <div className="title"><span><ShopWindow /> 9 CỬA HÀNG CÓ SẴN SẢN PHẨM</span></div>
                {
                    store.slice(0, clickButton ? store.length : 4).map((item, index) => (
                        <div key={index} className="store-details">{item.name} - Số lượng sản phẩm còn lại: <span>{item.inventory}</span></div>
                    ))
                }
                {
                    !clickButton ?
                        <button onClick={() => setClickButton(!clickButton)}>Xem thêm 7 cửa hàng <CaretDownFill /></button>
                        :
                        <button onClick={() => setClickButton(!clickButton)}>Ẩn bớt</button>
                }
            </div>
        </div>
    )
}