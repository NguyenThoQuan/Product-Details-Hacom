import React, { useState } from 'react';
import { CaretUpFill, CaretDownFill } from 'react-bootstrap-icons';
import SlideShow from './SlideShow';

export default function ScrollImage({ images }) {
    const [startIndex, setStartIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);

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

    const selectImage = (image) => {
        setSelectedImage(image);
    };

    return (
        <>
            <div className="scroll-image">
                <button onClick={scrollUp} disabled={startIndex === 0}><CaretUpFill className='icon' /></button>
                <div className="image">
                    {
                        images.slice(startIndex, startIndex + 5).map((item, index) => (
                            <img key={index} onClick={() => selectImage(item)} src={item} alt="Hình ảnh sản phẩm" />
                        ))
                    }
                </div>
                <button onClick={scrollDown} disabled={startIndex >= images.length - 5}><CaretDownFill className='icon' /></button>
            </div>
            <SlideShow images={images} selectedImage={selectedImage} />
        </>
    );
};
