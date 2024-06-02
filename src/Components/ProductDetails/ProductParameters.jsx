import React, { useState } from "react";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";

export default function ProductParameters({ productParameters }) {
    const [clickButton, setClickButton] = useState(false);

    return (
        <>
            <div className="product-parameters">
                <div className="title"><span>Thông số sản phẩm</span></div>
                {
                    productParameters.slice(0, clickButton ? productParameters.length : 4).map((item, index) => (
                        <div key={index}><span>- {item.accessory} : {item.parameter}</span></div>
                    ))
                }
                {clickButton === false ?
                    <button onClick={() => setClickButton(!clickButton)}>Xem thêm <CaretDownFill /></button>
                    :
                    <button onClick={() => setClickButton(!clickButton)}>Ẩn bớt <CaretUpFill /></button>
                }
            </div>
            <div className="price">
                <div>
                    <span>Giá khuyến mãi: </span>
                </div>
                <div>
                    <span className="promotion">17.999.000đ</span>
                    <div><span className="cost">20.999.000đ</span></div>
                    <span>(Tiết kiệm 3.000.000đ)</span>
                </div>
            </div>
        </>
    )
}