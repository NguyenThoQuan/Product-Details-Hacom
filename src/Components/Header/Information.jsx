import React, { useState } from "react";
import { GeoAlt, QuestionCircle, Headset, Gift } from "react-bootstrap-icons";

export default function Information() {
    const [hoverInfor1, setHoverInfor1] = useState(false);
    const [hoverInfor2, setHoverInfor2] = useState(false);

    return (
        <div className="info">
            <div className="showroom">
                <GeoAlt />
                <span>Hệ thống Showroom</span>
            </div>
            <div className="line"></div>
            <div className="support" onMouseEnter={() => setHoverInfor1(true)} onMouseLeave={() => setHoverInfor1(false)}>
                <QuestionCircle />
                <span>Hỗ trợ</span>
                {
                    hoverInfor1 ?
                        <div className="option-support">
                            <ul>
                                <li>Chính sách quy định chung</li><br />
                                <li>Chính sách bảo hành</li><br />
                                <li>Chính sách cho doanh nghiệp</li><br />
                                <li>Chính sách hàng chính hãng</li><br />
                                <li>Chính sách nhập lại tính phí</li><br />
                                <li>Hướng dẫn mua hàng trực tuyến</li><br />
                                <li>Hướng dẫn thanh toán</li><br />
                                <li>Hướng dẫn mua hàng trả góp</li><br />
                            </ul>
                        </div>
                        :
                        <></>
                }
            </div>
            <div className="line"></div>
            <div className="service-center" onMouseEnter={() => setHoverInfor2(true)} onMouseLeave={() => setHoverInfor2(false)}>
                <Headset />
                <span>Trung tâm dịch vụ</span>
                {
                    hoverInfor2 ?
                        <div className="option-service-center">
                            <ul>
                                <li>Tra cứu đơn hàng</li><br />
                                <li>Tra cứu bảo hành</li><br />
                                <li>In hóa đơn điện tử</li><br />
                                <li>Bảng giá dịch vụ lắp đặt</li><br />
                            </ul>
                        </div>
                        :
                        <></>
                }
            </div>
            <div className="line"></div>
            <div className="promotion">
                <Gift />
                <span>Khuyến mại</span>
            </div>
        </div>
    )
}