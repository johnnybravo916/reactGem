import React from "react";

function Loading() {
    return (
        <section className="loading">
            <div className="loading-text">
                <h1>Diamond-Empire Marketing</h1>
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <strong>Loading</strong>
            </div>
        </section>
    );
}

export default Loading;
