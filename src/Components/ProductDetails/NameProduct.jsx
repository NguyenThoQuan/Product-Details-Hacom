import React, { useState } from "react";
import { StarFill } from "react-bootstrap-icons";

export default function NameProduct() {
    const [star, setStar] = useState(0);

    return (
        <div className="name-product">
            <h2>Laptop Acer Gaming Aspire 7 A715-76G-59MW (NH.QMYSV.001) (i5 12450H/8GB RAM/512GB SSD/RTX2050 4G/15.6 inch
                FHD//Win11/Đen/Vỏ nhôm) (2023)</h2>
            <div className="evaluate">
                <div>
                    <span>Mã sản phẩm:</span>
                    <span>001.0001.46</span>
                </div>
                <div>
                    <span>Đánh giá: </span>
                    <span onClick={() => setStar(1)}><StarFill className={star >= 1 ? "icon yellow" : "icon"} /></span>
                    <span onClick={() => setStar(2)}><StarFill className={star >= 2 ? "icon yellow" : "icon"} /></span>
                    <span onClick={() => setStar(3)}><StarFill className={star >= 3 ? "icon yellow" : "icon"} /></span>
                    <span onClick={() => setStar(4)}><StarFill className={star >= 4 ? "icon yellow" : "icon"} /></span>
                    <span onClick={() => setStar(5)}><StarFill className={star >= 5 ? "icon yellow" : "icon"} /></span>
                    <span>{star} sao</span>
                </div>
                <div>
                    <span>Bình luận: </span>
                    <span>0</span>
                </div>
                <div>
                    <span>Lượt xem: </span>
                    <span>0</span>
                </div>
            </div>
        </div>
    )
}