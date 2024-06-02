import React, { useState } from "react";
import ScrollImage from "./ScrollImage";
import ProductDetails from "./ProductDetails";
import "../../Styles/ImageProduct.scss"

export default function ImageProduct() {
    const [images] = useState([
        '/images/AnhPC1.jpg',
        '/images/AnhPC2.jpg',
        '/images/AnhPC3.jpg',
        '/images/AnhPC4.jpg',
        '/images/AnhPC5.jpg',
        '/images/AnhPC6.jpg',
        '/images/AnhPC7.jpg',
        '/images/AnhPC8.jpg',
    ]);

    return (
        <div className="image-product">
            <ScrollImage images={images} />
            <ProductDetails />
        </div>
    )
}