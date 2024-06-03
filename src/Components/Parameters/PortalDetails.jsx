import React from "react";

export default function PortalDetails({ parameter, handleClickButton }) {
    return (
        <div className="setBG">
            <div className="portal-details">
                <div className="title">
                    <h2>Thông số kỹ thuật</h2>
                    <button onClick={handleClickButton}>X</button>
                </div>
                <div className="mo-ta">
                    <h3>Mô tả chi tiết</h3>
                </div>
                <div className="details">
                    {
                        parameter.map((item, index) => (
                            <div key={index} className="details1">
                                <div>{item.label}</div>
                                <div>{item.data}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}