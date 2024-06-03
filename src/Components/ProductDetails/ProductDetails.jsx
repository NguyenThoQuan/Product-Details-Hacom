import React from "react";
import NameProduct from "./NameProduct";
import ProductParameters from "./ProductParameters";
import Store from "./Store";
import Vouchers from "./Vouchers";
import Buy from "./Buy";

export default function ProductDetails({ productParameters, store, vouchers }) {
    localStorage.setItem("nameProduct", "Laptop Acer Gaming Aspire 7 A715-76G-59MW (NH.QMYSV.001) (i5 12450H/8GB RAM/512GB SSD/RTX2050 4G/15.6 inchFHD//Win11/Đen/Vỏ nhôm) (2023)")

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