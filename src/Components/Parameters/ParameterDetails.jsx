import React from "react";
import Details from "./Details";

export default function ParametersDetails({ parameter }) {
    return (
        <div className="parameters-details">
            <Details parameter={parameter} />
        </div>
    )
}