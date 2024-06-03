import React, { useState } from "react";
import { StarFill } from "react-bootstrap-icons";

export default function NameProduct() {
    const [star, setStar] = useState(0);

    return (
        <div className="name-product">
            <h2>{localStorage.getItem("nameProduct")}</h2>
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