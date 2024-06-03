import React from "react";
import "../../Styles/SubmitEmail.scss";

export default function SubmitEmail() {
    return (
        <div className="submit-email">
            <h3>ĐĂNG KÝ NHẬN EMAIL THÔNG BÁO KHUYẾN MẠI HOẶC ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ</h3>
            <div>
                <input type="text" placeholder="Nhập email của bạn" />
                <button>Gửi</button>
            </div>
        </div>
    )
}