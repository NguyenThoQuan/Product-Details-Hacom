import React from "react";
import { Stack } from "react-bootstrap-icons";

export default function HoverSimilar({ product, isLastItem }) {
    return (
        <div className="hover-similar">
            <div className={`${isLastItem ? 'hover-similar-left' : 'hover-similar-content'}`}>
                <span className="name">{product.name}</span>
                <div className="hover-details">
                    <span className="span-1">- Giá bán:</span><span> {product.promotion}</span><br />
                    <span className="span-3">- Giá HACOM:</span><span className="span-4"> {product.cost}</span><span className="vat">[Đã bao gồm VAT]</span><br />
                    <span className="span-5">- Bảo hành:</span><span> 12 tháng - BH 3S1</span><br />
                </div>
                <div className="title">
                    <span><Stack /> Thông số sản phẩm</span>
                </div>
                <div className="info-product">
                    <p>- CPU: AMD R5 5625U</p>
                    <p>- RAM: 8GB</p>
                    <p>- Ổ cứng: 512GB SSD</p>
                    <p>- VGA: NVIDIA RTX3050 4GB</p>
                    <p>- Màn hình: 15.6 inch FHD 144Hz</p>
                    <p>- HĐH: Window 11</p>
                    <p>- CPU: AMD R5 5625U</p>
                    <p>- Màu: Đen</p>
                </div>
            </div>
        </div>
    )
}