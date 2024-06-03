import React, { useState } from "react";

export default function Details({ parameter }) {
    const [clickButton, setClickButton] = useState(false)

    return (
        <div className="all-details">
            <div>
                <h2>Thông số kỹ thuật</h2>
            </div>
            <div>
                <h3>Mô tả chi tiết</h3>
            </div>
            <div className="details">
                {
                    parameter.slice(0, clickButton ? parameter.length : 10).map((item, index) => (
                        <div key={index} className="details1">
                            <div>{item.label}</div>
                            <div>{item.data}</div>
                        </div>
                    ))
                }
            </div>
            <button>Xem thông số đầy đủ</button>
        </div>
    )
}