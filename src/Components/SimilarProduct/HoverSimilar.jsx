import React from "react";

export default function HoverSimilar({ selectedAppointment }) {
    return (
        <div className="hovet-similar">
            {
                selectedAppointment.map((item, index) => {
                    <div key={index}>
                        {item.name}
                    </div>
                })
            }
        </div>
    )
}