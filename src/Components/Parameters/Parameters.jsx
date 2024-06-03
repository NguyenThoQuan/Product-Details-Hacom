import React, { useState } from "react";
import Comment from "./Comment";
import ParametersDetails from "./ParameterDetails";
import "../../Styles/Parameters.scss";

export default function Parameters() {
    const [parameter] = useState([
        { label: "Hãng sản xuất", data: "Acer" },
        { label: "Chủng loại", data: "Aspire 7 A715-76G-59MW– model giải trí, gaming" },
        { label: "Part Number", data: "NH.QMYSV.001" },
        { label: "Mầu sắc, chất liệu", data: "Đen (Charcoal Black); vỏ nhôm mặt A" },
        { label: "Bộ vi xử lý", data: "Intel® Core™ i5-12450H (3.3GHz upto 4.4Ghz/12MB cache)" },
        { label: "Chipset", data: "" },
        { label: "Bộ nhớ trong", data: "8GB DDR4 3200Mhz" },
        { label: "Số khe cắm", data: "2" },
        { label: "Dung lượng tối đa", data: "32GB" },
        { label: "VGA", data: "NVIDIA® GeForce RTX™ 2050 4GB GDDR6" },
        { label: "Ổ cứng", data: "512GB SSD PCIe NVMe" },
        { label: "Ổ quang", data: "None" },
        { label: "Card Reader", data: "None" },
        { label: "Bảo mật, công nghệ", data: "Đèn bàn phím; Bảo mật vân tay; 2 quạt Tản nhiệt ;" },
        { label: "Màn hình", data: "15.6 inch FHD IPS (1920 x 1080) Slim Benzel; ComfyView IPS LED" },
        { label: "Webcam", data: "HD" },
        { label: "Audio", data: "" },
        { label: "Giao tiếp mạng", data: "Gigabit" },
        { label: "Giao tiếp không dây", data: "Intel® Wireless Wi-Fi 6E AX211,  2x2 MU-MIMO, Support Bluetooth® 5.1" },
        { label: "Cổng giao tiếp", data: "1xUSB Type-C™ port: USB 3.2 Gen 2 (up to 10 Gbps)" },
        { label: "Pin", data: "50Wh Li-ion battery" },
        { label: "Kích thước (rộng x dài x cao)", data: "362.3 (W) x 237.4 (D) x 19.9 (H) mm" },
        { label: "Cân nặng", data: "2.1kg" },
        { label: "Hệ điều hành", data: "Win 11 Home" },
        { label: "Phụ kiện đi kèm", data: "Cable + Sạc" },
    ])

    const [latestNews] = useState([
        { images: "/images/LatestNew1.jpg", title: "Hướng dẫn cơ bản khi mua router trong năm 2023 - Sử dụng router WiFi có thể mở rộng", content: "Nếu bạn đang tìm kiếm một router có giá cả phải chăng, sử dụng được cho nhiều mục đích với hiệu năng vượt trội hoặc muốn tối ưu hóa router để chơi game, router ASUS chính là lựa chọn hàng đầu dành cho bạn." },
        { images: "/images/LatestNew2.jpg", title: "Cách chọn màn hình phụ dành cho người sử dụng hệ sinh thái Apple", content: " Với ProArt, màn hình máy tính đồ họa chất lượng cao, giúp bạn có thể tận hưởng màu sắc tương đồng với hệ sinh thái Apple, tạo ra trải nghiệm hài hòa và chuyên nghiệp." },
        { images: "/images/LatestNew3.jpg", title: "HACOM đồng hành cùng tiếp sức mùa thi 2023!", content: "HACOM Thanh Hóa đồng hành cùng các bạn sinh viên tiếp sức mùa thi năm 2023!" },
        { images: "/images/LatestNew4.jpg", title: "SỞ HỮU BẢN QUYỀN WINRAR CỰC RẺ HỢP VÍ", content: "Hôm nay HACOM sẽ hướng dẫn các bạn cách mua bản quyền WinRAR chính hãng cho “Người Có Nhu Cầu”, với GIÁ CHỈ 80,000đ." }
    ])

    return (
        <div className="parameters">
            <Comment />
            <ParametersDetails parameter={parameter} latestNews={latestNews} />
        </div>
    )
}