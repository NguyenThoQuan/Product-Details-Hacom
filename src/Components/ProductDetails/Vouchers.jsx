import React, { useState } from "react";
import { Gift, CaretDownFill } from "react-bootstrap-icons";

export default function Vouchers({ vouchers }) {
    const [clickButton, setClickButton] = useState(false);

    return (
        <div className="vouchers">
            <div className="title"><span><Gift /> QUÀ TẶNG VÀ ƯU ĐÃI DÀNH CHO BẠN</span></div>
            {
                vouchers.slice(0, clickButton ? vouchers.length : 4).map((item, index) => (
                    <div key={index} className="voucher-details">Giảm ngay <span>{item.voucher}</span> khi mua {item.promotionalProducts}</div>
                ))
            }
            {
                !clickButton ?
                    <button onClick={() => setClickButton(!clickButton)}>Xem thêm ưu đãi <CaretDownFill /></button>
                    :
                    <button onClick={() => setClickButton(!clickButton)}>Ẩn bớt</button>
            }
        </div>
    )
}