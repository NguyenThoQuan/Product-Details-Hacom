import React from "react";

export default function LatestNews({ latestNews }) {
    return (
        <div className="latest-news">
            <h2>Tin tức mới nhất</h2>
            <div className="LN-details">
                {
                    latestNews && latestNews.map((item, index) => (
                        <div key={index} className="details">
                            <img src={item.images} alt="Tin tức mới nhất" />
                            <h3>{item.title}</h3>
                            <span>{item.content}</span>
                            <span className="more">Xem thêm</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}