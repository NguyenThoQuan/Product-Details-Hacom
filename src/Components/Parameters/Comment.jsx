import React, { useState } from "react";
import WriteEvaluate from "./WriteEvaluate";
import { StarFill } from "react-bootstrap-icons";

export default function Comment() {
    const [star, setStar] = useState(0);
    const [voted, setVoted] = useState(0);
    const [clickButton, setClickButton] = useState(false);

    const handleStar = (index) => {
        setStar(index);
    }

    const handleVoted = () => {
        setVoted(voted + 1);
    }

    const handleClickButton = () => {
        setClickButton(!clickButton);
    }

    return (
        <>
            <div className="comment">
                <h2>Xếp hạng đánh giá của khách hàng</h2>
                <div className="evaluate">
                    <div className="evaluate-1">
                        <h1>{star}/5</h1><br />
                        <span>
                            <StarFill className={star >= 1 ? "yellow" : "gray"} />
                            <StarFill className={star >= 2 ? "yellow" : "gray"} />
                            <StarFill className={star >= 3 ? "yellow" : "gray"} />
                            <StarFill className={star >= 4 ? "yellow" : "gray"} />
                            <StarFill className={star >= 5 ? "yellow" : "gray"} />
                            ({voted} lượt bình chọn)
                        </span><br />
                        <button onClick={handleClickButton}>Viết nhận xét của bạn</button>
                    </div>
                    <div className="evaluate-2">
                        <div>
                            <span>5 <StarFill /></span>
                            <div></div>
                            <span>{voted}</span>
                        </div>
                        <div>
                            <span>4 <StarFill /></span>
                            <div></div>
                            <span>{voted}</span>
                        </div>
                        <div>
                            <span>3 <StarFill /></span>
                            <div></div>
                            <span>{voted}</span>
                        </div>
                        <div>
                            <span>2 <StarFill /></span>
                            <div></div>
                            <span>{voted}</span>
                        </div>
                        <div>
                            <span>1 <StarFill /></span>
                            <div></div>
                            <span>{voted}</span>
                        </div>
                    </div>
                </div>
                <div className="write-comment">
                    <div>
                        <span>Bình luận</span>
                    </div>
                    <div>
                        <input type="text" placeholder="Nhập bình luận của bạn"></input><br />
                        <button>Gửi bình luận</button>
                    </div>
                </div>
            </div>
            {
                clickButton ?
                    <WriteEvaluate handleStar={handleStar} handleClickButton={handleClickButton} handleVoted={handleVoted} star={star} />
                    :
                    <></>
            }
        </>
    )
}