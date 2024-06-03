import React, { useState } from "react";
import PortalDetails from "./PortalDetails";

export default function Details({ parameter }) {
    const [clickButton, setClickButton] = useState(false)

    const handleClickButton = () => {
        setClickButton(!clickButton);
    }

    return (
        <>
            <div className="all-details">
                <div>
                    <h2>Thông số kỹ thuật</h2>
                </div>
                <div>
                    <h3>Mô tả chi tiết</h3>
                </div>
                <div className="details">
                    {
                        parameter.slice(0, 10).map((item, index) => (
                            <div key={index} className="details1">
                                <div>{item.label}</div>
                                <div>{item.data}</div>
                            </div>
                        ))
                    }
                </div>
                <div className="button">
                    <button onClick={handleClickButton}>Xem thông số đầy đủ</button>
                </div>
            </div>
            {
                clickButton ? <PortalDetails parameter={parameter} handleClickButton={handleClickButton} /> : <></>
            }
        </>
    )
}