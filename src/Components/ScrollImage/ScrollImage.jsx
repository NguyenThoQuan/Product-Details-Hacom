import React, { useState } from 'react';
import { CaretUpFill, CaretDownFill } from 'react-bootstrap-icons';

const images = [
    '/images/AnhPC1.jpg',
    '/images/AnhPC2.jpg',
    '/images/AnhPC3.jpg',
    '/images/AnhPC4.jpg',
    '/images/AnhPC5.jpg',
    '/images/AnhPC6.jpg',
    '/images/AnhPC7.jpg',
    '/images/AnhPC8.jpg',
];

export default function ScrollImage() {
    const [startIndex, setStartIndex] = useState(0);

    const scrollUp = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const scrollDown = () => {
        if (startIndex < images.length - 5) {
            setStartIndex(startIndex + 1);
        }
    };

    return (
        <div className="scroll-image">
            <button onClick={scrollUp} disabled={startIndex === 0}><CaretUpFill className='icon' /></button>
            <div className="image">
                {images.slice(startIndex, startIndex + 5).map((item, index) => (
                    <img key={index} src={item} alt="Hình ảnh sản phẩm" />
                ))}
            </div>
            <button onClick={scrollDown} disabled={startIndex >= images.length - 5}><CaretDownFill className='icon' /></button>
        </div>
    );
};
