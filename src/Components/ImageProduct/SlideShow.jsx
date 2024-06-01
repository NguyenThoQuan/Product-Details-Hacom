import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

export default function SlideShow({ images, selectedImage }) {
    const [startIndex, setStartIndex] = useState(0);

    const scrollLeft = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const scrollRight = () => {
        if (startIndex < images.length - 1) {
            setStartIndex(startIndex + 1);
        }
    };

    useEffect(() => {
        const selectedIndex = images.indexOf(selectedImage);
        setStartIndex(selectedIndex !== -1 ? selectedIndex : 0);
    }, [selectedImage, images]);

    return (
        <div className="slide-show">
            <button onClick={scrollLeft} disabled={startIndex === 0}><ChevronLeft className='icon' /></button>
            <div className="image">
                {
                    images.slice(startIndex, startIndex + 1).map((item, index) => (
                        <img key={index} src={item} alt="Hình ảnh sản phẩm" />
                    ))
                }
            </div>
            <button onClick={scrollRight} disabled={startIndex >= images.length - 1}><ChevronRight className='icon' /></button>
        </div>
    )
}