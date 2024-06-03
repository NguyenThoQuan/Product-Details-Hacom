import React from "react";
import { StarFill } from "react-bootstrap-icons";

export default function WriteEvaluate({ handleClickButton, handleVoted, handleStar, star }) {
    const handleClickMoreButton = () => {
        handleClickButton();
        handleVoted();
    }

    return (
        <div className="setBG">
            <div className="write-evaluate">
                <div>
                    <h3>{localStorage.getItem("nameProduct")}</h3>
                    <button onClick={handleClickButton}>X</button>
                </div>
                <div>
                    <h3>Đánh giá sản phẩm</h3>
                    <div>
                        <StarFill onClick={() => handleStar(1)} className={star >= 1 ? "yellow" : "gray"} />
                        <StarFill onClick={() => handleStar(2)} className={star >= 2 ? "yellow" : "gray"} />
                        <StarFill onClick={() => handleStar(3)} className={star >= 3 ? "yellow" : "gray"} />
                        <StarFill onClick={() => handleStar(4)} className={star >= 4 ? "yellow" : "gray"} />
                        <StarFill onClick={() => handleStar(5)} className={star >= 5 ? "yellow" : "gray"} />
                    </div>
                </div>
                <div>
                    <h3>Viết đánh giá</h3>
                    <form>
                        <label htmlFor="fullName">Họ và tên</label><br />
                        <input type="text" placeholder="Nhập họ tên của bạn" required /><br />
                        <label htmlFor="phoneNumber">Số điện thoại</label><br />
                        <input type="text" placeholder="Nhập số điện thoại" required /><br />
                        <label htmlFor="email">Email</label><br />
                        <input type="text" placeholder="Nhập địa chỉ email" required /><br />
                        <label htmlFor="content-evaluate">Nội dung đánh giá</label><br />
                        <input type="text" placeholder="Nhập đánh giá về sản phẩm" required /><br />
                        <button onClick={handleClickMoreButton}>Gửi đánh giá</button>
                    </form>
                </div>
            </div>
        </div>
    )
}