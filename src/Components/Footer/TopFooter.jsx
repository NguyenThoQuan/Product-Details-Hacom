import React from "react";
import { Truck, Repeat, CreditCard, ChatSquareDots } from "react-bootstrap-icons";

export default function TopFooter() {
    return (
        <div className="top-footer">
            <div className="tag-1">
                <Truck className="icon" />
                <div>
                    <span>CHÍNH SÁCH GIAO HÀNG</span><br />
                    <span>Nhận hàng và thanh toán tại nhà</span>
                </div>
            </div>
            <div className="tag-2">
                <Repeat className="icon" />
                <div>
                    <span>ĐỔI TRẢ DỄ DÀNG</span><br />
                    <span>1 đổi 1 trong 15 ngày</span>
                </div>
            </div>
            <div className="tag-3">
                <CreditCard className="icon" />
                <div>
                    <span>THANH TOÁN TIỆN LỢI</span><br />
                    <span>Trả tiền mặt, CK, trả góp 0%</span>
                </div>
            </div>
            <div className="tag-4">
                <ChatSquareDots className="icon" />
                <div>
                    <span>HỖ TRỢ NHIỆT TÌNH</span><br />
                    <span>Tư vấn, giải đáp mọi thắc mắc</span>
                </div>
            </div>
        </div>
    )
}