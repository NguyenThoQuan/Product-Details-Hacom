import React, { useState } from "react";
import { Heart, HeartFill, Handbag } from "react-bootstrap-icons";

export default function Buy() {
    const [quantity, setQuantity] = useState(1);
    const [clickSave, setClickSave] = useState(false);

    const handleReduced = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="buy">
            <div className="quantity">
                <span>Số lượng: </span>
                <div>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    <span>{quantity}</span>
                    <button onClick={handleReduced}>-</button>
                </div>
                <div>
                    <span>THÊM VÀO GIỎ HÀNG</span>
                </div>
                <div onClick={() => setClickSave(!clickSave)}>
                    {
                        !clickSave ?
                            <><Heart /><span>Lưu</span></>
                            :
                            <><HeartFill /><span>Lưu</span></>
                    }
                </div>
            </div>
            <div className="buy-now">
                <button><Handbag /> Mua ngay</button>
            </div>
            <div className="installment">
                <button>
                    <span>TRẢ GÓP QUA THẺ</span><br />
                    <span>VISA, Master Card, AMEX</span>
                </button>
                <button>
                    <span>TRAE GÓP HỒ SƠ</span><br />
                    <span>Duyệt nhanh trong 15 phút</span>
                </button>
            </div>
        </div>
    )
}