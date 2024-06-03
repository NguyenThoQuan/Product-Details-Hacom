import React from "react";
import Details from "./Details";
import LatestNews from "./LatestNews";

export default function ParametersDetails({ parameter, latestNews }) {
    return (
        <div className="parameters-details">
            <Details parameter={parameter} />
            <LatestNews latestNews={latestNews} />
        </div>
    )
}