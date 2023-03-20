import React from "react";

function HeroBlock(props) {
    const {image, position} = props;

    return (
        <section className="heroblock">
            <div
                className="heroblock-image"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: `center ${position}`,
                }}
            ></div>
        </section>
    );
}

export default HeroBlock;
