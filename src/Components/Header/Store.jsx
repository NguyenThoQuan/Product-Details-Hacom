import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Telephone, ChevronDown } from "react-bootstrap-icons";

export default function Store() {
    const [hoverStore1, setHoverStore1] = useState(false);
    const [hoverStore2, setHoverStore2] = useState(false);
    const [hoverStore3, setHoverStore3] = useState(false);
    const [hoverStore4, setHoverStore4] = useState(false);

    return (
        <div className="store">
            <div className="online" onMouseEnter={() => setHoverStore1(true)} onMouseLeave={() => setHoverStore1(false)}>
                <div className="title-store">
                    <Telephone />
                    <span>Mua hàng online</span>
                    <ChevronDown />
                </div>
                {
                    hoverStore1 && createPortal(
                        <div className="content-store">
                            <div onMouseEnter={() => setHoverStore1(true)} onMouseLeave={() => setHoverStore1(false)}>
                                <span>Mua hàng Online</span>
                            </div>
                        </div>, document.body
                    )
                }
            </div>
            <div className="mien-bac" onMouseEnter={() => setHoverStore2(true)} onMouseLeave={() => setHoverStore2(false)}>
                <div className="title-store">
                    <Telephone />
                    <span>Miền Bắc</span>
                    <ChevronDown />
                </div>
                {
                    hoverStore2 && createPortal(
                        <div className="content-store">
                            <div onMouseEnter={() => setHoverStore2(true)} onMouseLeave={() => setHoverStore2(false)}>
                                <span>Showroom Miền Bắc</span>
                            </div>
                        </div>, document.body
                    )
                }
            </div>
            <div className="mien-trung" onMouseEnter={() => setHoverStore3(true)} onMouseLeave={() => setHoverStore3(false)}>
                <div className="title-store">
                    <Telephone />
                    <span>Miền Trung</span>
                    <ChevronDown />
                </div>
                {
                    hoverStore3 && createPortal(
                        <div className="content-store">
                            <div onMouseEnter={() => setHoverStore3(true)} onMouseLeave={() => setHoverStore3(false)}>
                                <span>Showroom Miền Trung</span>
                            </div>
                        </div>, document.body
                    )
                }
            </div>
            <div className="mien-nam" onMouseEnter={() => setHoverStore4(true)} onMouseLeave={() => setHoverStore4(false)}>
                <div className="title-store">
                    <Telephone />
                    <span>Miền Nam</span>
                    <ChevronDown />
                </div>
                {
                    hoverStore4 && createPortal(
                        <div className="content-store">
                            <div onMouseEnter={() => setHoverStore4(true)} onMouseLeave={() => setHoverStore4(false)}>
                                <span>Showroom Miền Nam</span>
                            </div>
                        </div>, document.body
                    )
                }
            </div>
        </div>
    )
}