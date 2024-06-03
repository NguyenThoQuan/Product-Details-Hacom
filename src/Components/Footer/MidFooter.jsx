import React from "react";
import logo from "../../Images/logo-hacom-compressed4.f1d79573.svg";
import fb from "../../Images/FaceBookIcon.jpg"
import ytb from "../../Images/iconYoutube.webp"
import linkedIn from "../../Images/iconLinkedin.webp"
import tt from "../../Images/iconTiktok.webp"
import dmca from "../../Images/dmca_logo 1.webp"
import gov from "../../Images/Gov.webp"
import { Telephone, Envelope } from "react-bootstrap-icons";

export default function MidFooter() {
    return (
        <div className="mid-footer">
            <div className="tag-1">
                <img src={logo} alt="logo"></img><br />
                <a href="#">Về chúng tôi</a><br />
                <a href="#">Liên hệ hợp tấc kinh doanh</a><br />
                <a href="#">Tuyển dụng nhân sự</a><br />
                <a href="#">Tin tức công nghệ</a><br />
                <a href="#">Tin tức</a><br />
            </div>
            <div className="tag-2">
                <span>HỖ TRỢ</span><br />
                <a href="#">Xây dựng cấu hình</a><br />
                <a href="#">Tra cứu đơn hàng</a><br />
                <a href="#">Hướng dẫn mua hàng trực tuyến</a><br />
                <a href="#">Hướng dẫn thanh toán</a><br />
                <a href="#">Hướng dẫn mua hàng trả góp</a><br />
                <a href="#">In hóa đơn điện tử</a><br />
                <a href="#">Bảng giá vậy tư</a><br />
                <a href="#">Góp ý, Khiếu lại</a><br />
            </div>
            <div className="tag-3">
                <span>CHÍNH SÁCH</span><br />
                <a href="#">Chính sách, quy định chung</a><br />
                <a href="#">Chính sách giao hàng</a><br />
                <a href="#">Chính sách bảo hành</a><br />
                <a href="#">Chính sách cho doanh nghiệp</a><br />
                <a href="#">Chính sách hàng chính hãng</a><br />
                <a href="#">Bảo mật thông tin khách hàng</a><br />
                <a href="#">Chính sách nhập lại tính phí</a><br />
            </div>
            <div className="tag-4">
                <span>KẾT NỐI</span><br />
                <div><Telephone /> Hotline: <span className="sdt">1900 1903</span></div>
                <div><Envelope /> Email: <span className="email">info@hacom.vn</span></div>
                <div className="logo-1">
                    <img src={fb} alt="fb" />
                    <img src={ytb} alt="ytb" />
                    <img src={linkedIn} alt="linkedIn" />
                    <img src={tt} alt="tiktok" />
                </div>
                <div className="logo-2">
                    <img src={dmca} alt="dcma" />
                    <img src={gov} alt="bct" />
                </div>
            </div>
        </div>
    )
}