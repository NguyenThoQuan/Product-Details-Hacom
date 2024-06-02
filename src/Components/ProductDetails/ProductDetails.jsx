import React, { useState } from "react";
import NameProduct from "./NameProduct";
import ProductParameters from "./ProductParameters";
import Store from "./Store";
import Vouchers from "./Vouchers";
import Buy from "./Buy";

export default function ProductDetails() {
    const [productParameters] = useState([
        { accessory: "CPU", parameter: "Intel Core i5 12450H" },
        { accessory: "RAM", parameter: "8GB (1x 8GB) DDR4-3200MHz (2 khe) (Tối đa 32GB)" },
        { accessory: "Ổ cứng", parameter: "512GB SSD M.2 2280 PCIe NVMe" },
        { accessory: "VGA", parameter: "NVIDIA GeForce RTX 2050 4GB" },
        { accessory: "Màn hình", parameter: "15.6 inch FHD IPS (1920 x 1080) Slim Benzel 144Hz; ComfyView IPS LED" },
        { accessory: "Màu", parameter: "Đen" },
        { accessory: "Chất liệu", parameter: "Nhôm" },
        { accessory: "OS", parameter: "Windows 11 Home" },
    ]);

    const [store] = useState([
        { name: "Kho tổng Bắc Giang", inventory: 1 },
        { name: "Kho tổng Hai Bà", inventory: 1 },
        { name: "Kho tổng Đống Đa", inventory: 2 },
        { name: "Kho tổng Cầu Giấy", inventory: 3 },
        { name: "Kho tổng Hà Đông 1", inventory: 1 },
        { name: "Kho tổng Long Biên", inventory: 1 },
        { name: "Kho tổng Từ Sơn", inventory: 1 },
        { name: "Kho tổng Thanh Trì", inventory: 1 },
        { name: "Kho tổng Đông Anh", inventory: 1 },
    ]);

    const [vouchers] = useState([
        { voucher: "50.000 đ", promotionalProducts: "Balo, Cặp, Túi chống sốc cao cấp..." },
        { voucher: "100.000 đ", promotionalProducts: "Ram Laptop thương hiệu KINGSTON" },
        { voucher: "100.000 đ", promotionalProducts: "Ram Laptop thương hiệu LEXAR" },
        { voucher: "200.000 đ", promotionalProducts: "Ghế công thái học thương hiệu LEGION" },
        { voucher: "40.000 đ", promotionalProducts: "kèm phần mềm diệt virus" },
        { voucher: "500.000 đ", promotionalProducts: "kèm Ổ HDD" },
        { voucher: "100.000 đ", promotionalProducts: "Ram Laptop thương hiệu LEXAR" },
    ]);

    return (
        <div className="product-details">
            <NameProduct />
            <ProductParameters productParameters={productParameters} />
            <Store store={store} />
            <Vouchers vouchers={vouchers} />
            <Buy />
        </div>
    )
}