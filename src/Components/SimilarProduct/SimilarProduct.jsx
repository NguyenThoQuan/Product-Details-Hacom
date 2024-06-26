import React, { useState } from "react";
import HoverSimilar from "./HoverSimilar";
import { Calendar3Event, StarFill, Check, Handbag, ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import "../../Styles/SimilarProduct.scss";

export default function SimilarProduct() {
    const [similarProduct] = useState([
        { percent: "-7%", images: "/images/SP1.jpg", name: "Laptop Acer Gaming Aspire 7 A715-42G-R4XX (NH.QAYSV.008) (R5 5500U/8GB RAM/256GB SSD/15.6 inch FHD/GTX1650 4G/Win11/Đen)", promotion: "16.650.000 đ", cost: "15.499.000 đ" },
        { percent: "-33%", images: "/images/SP2.png", name: "Laptop Acer Gaming Aspire 7 A715-43G-R8GA (NH.QHDSV.002) (R5 5625U/8GB RAM/512GB SSD/15.6 inch FHD 144Hz/RTX3050 4G/Win11/Đen) ", promotion: "23.999.000 đ", cost: "15.999.000 đ" },
        { percent: "-9%", images: "/images/SP3.jpg", name: "Laptop Acer Gaming Aspire 7 A715-76G-5806 (NH.QMFSV.002) (i5 12450H/16GB RAM/512GB SSD/RTX 3050 4G/15.6 inch FHD 144Hz/Win11/Đen/Vỏ nhôm) ", promotion: "22.999.000 đ", cost: "20.999.000 đ" },
        { percent: "-28%", images: "/images/SP4.jpg", name: "Màn hình VSP CM2701B (27 inch/FHD/VA/75Hz/5ms/Cong/Đen)", promotion: "3.999.000 đ", cost: "2.899.000 đ" },
        { percent: "-29%", images: "/images/SP4.jpg", name: "Màn hình VSP CM2701B (27 inch/FHD/VA/75Hz/5ms/Cong/Đen)", promotion: "4.099.000 đ", cost: "2.999.000 đ" },
        { percent: "-30%", images: "/images/SP4.jpg", name: "Màn hình VSP CM2701B (27 inch/FHD/VA/75Hz/5ms/Cong/Đen)", promotion: "4.199.000 đ", cost: "3.099.000 đ" },
        { percent: "-31%", images: "/images/SP4.jpg", name: "Màn hình VSP CM2701B (27 inch/FHD/VA/75Hz/5ms/Cong/Đen)", promotion: "4.299.000 đ", cost: "3.199.000 đ" },
    ])

    const [startIndex, setStartIndex] = useState(0);

    const [clickOption, setClickOption] = useState(false);

    const [hoveredProduct, setHoveredProduct] = useState(null);

    const handleClickOption = () => {
        setClickOption(!clickOption);
    }

    const scrollLeft = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const scrollRight = () => {
        if (startIndex < similarProduct.length - 4) {
            setStartIndex(startIndex + 1);
        }
    };

    return (
        <div className="similar-product">
            <div className="menus">
                <div onClick={handleClickOption} className={!clickOption ? "setBG" : ""}>SẢN PHẨM TƯƠNG TỰ</div>
                <div onClick={handleClickOption} className={clickOption ? "setBG" : ""}>SẢN PHẨM ĐÃ XEM</div>
            </div>
            <div className="details-SM">
                <button onClick={scrollLeft} disabled={startIndex === 0}><ChevronLeft className='icon' /></button>
                {
                    similarProduct && similarProduct.slice(startIndex, startIndex + 4).map((item, index, array) => (
                        <div key={index} className="SM" onMouseEnter={() => setHoveredProduct(item)} onMouseLeave={() => setHoveredProduct(null)}>
                            <div className="percent">
                                <div>{item.percent}</div>
                            </div>
                            <img src={item.images} alt="Ảnh sản phẩm" />
                            <div className="installment"><Calendar3Event className="icon-1" /> Trả góp</div>
                            <div className="details">
                                <div>
                                    <div className="star"><StarFill className="icon" /><StarFill className="icon" /><StarFill className="icon" /><StarFill className="icon" /><StarFill className="icon" /> (0) </div>
                                    <h5>{item.name}</h5>
                                    <div className="div-1">
                                        <div className="div-2">
                                            <div><span className="promotion">{item.promotion}</span><br /></div>
                                            <span className="cost">{item.cost}</span><br />
                                            <span className="check"><Check /> Sẵn sàng</span><br />
                                        </div>
                                        <div className="button"><button><Handbag /></button></div>
                                    </div>
                                </div>
                            </div>
                            {hoveredProduct === item && <HoverSimilar product={item} isLastItem={index === array.length - 1} />}
                        </div>
                    ))
                }
                <button onClick={scrollRight} disabled={startIndex >= similarProduct.length - 1}><ChevronRight className='icon' /></button>
            </div>
        </div>
    )
}