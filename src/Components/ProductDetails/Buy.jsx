import React, { useEffect, useState } from "react";
import { Heart, HeartFill, Handbag, Plus, Dash } from "react-bootstrap-icons";
import { toast } from "react-toastify";

export default function Buy() {
    const [quantity, setQuantity] = useState(1);
    const [clickSave, setClickSave] = useState(false);

    const handleReduced = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    useEffect(() => {
        if (!localStorage.getItem("promotion") && !localStorage.getItem("quantity")) {
            localStorage.setItem("promotion", "0");
            localStorage.setItem("quantity", "0");
        }
    }, [])

    const handleAddCart = () => {
        if (localStorage.getItem("promotion") && localStorage.getItem("quantity")) {
            localStorage.setItem("promotion", "17.999.000");
            localStorage.setItem("quantity", "1");
            toast.success("Thêm vào giỏ hàng thành công !!!")
        } else {

        }
    }

    return (
        <div className="buy">
            <div className="quantity">
                <div>
                    <span className="add-quantity">Số lượng: </span>
                    <div>
                        <button onClick={() => setQuantity(quantity + 1)}><Plus className="icon" /></button>
                        <span>{quantity}</span>
                        <button onClick={handleReduced}><Dash className="icon" /></button>
                    </div>
                </div>
                <div className="add-cart" onClick={handleAddCart}>
                    <span>THÊM VÀO GIỎ</span>
                </div>
                <div className="save" onClick={() => setClickSave(!clickSave)}>
                    {
                        !clickSave ?
                            <><Heart /><span>Lưu</span></>
                            :
                            <><HeartFill /><span>Lưu</span></>
                    }
                </div>
            </div>
            <div className="buy-now">
                <button><Handbag /> <span>Mua ngay</span></button>
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