import React from "react";
import MouseScroll from "./MouseScroll";
import {AnimationOnScroll} from "react-animation-on-scroll";

function HalfContentBlock(props: {
    header: string;
    listing: boolean;
    content?: {paragraph: string}[];
    subheader?: {title: string; description: string}[];
    link: string;
    secondlink: string;
}) {
    const {header, content, subheader, listing, link, secondlink} = props;

    return (
        <section id={link}>
            <div className={`container-fluid ${listing ? "bg-color" : ""}`}>
                <div className="row halfcontentblock full-height">
                    <div className="col-lg-5">
                        <div className="sticky-lg-top">
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                                <h2>{header}</h2>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div
                        className={`col-lg-7 border-left overflow-hidden position-relative ${
                            listing && "listing"
                        }`}
                    >
                        {content?.map(({paragraph}, idx) => (
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                                <p key={idx}>{paragraph}</p>
                            </AnimationOnScroll>
                        ))}
                        {subheader?.map(({title, description}, idx) => (
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                                <div key={idx}>
                                    {listing ? (
                                        <strong>{title}</strong>
                                    ) : (
                                        <h3>{title}</h3>
                                    )}
                                    <p key={idx}>{description}</p>
                                </div>
                            </AnimationOnScroll>
                        ))}{" "}
                        <div className="cel"></div>
                    </div>
                </div>
            </div>
            <MouseScroll link={secondlink} />
        </section>
    );
}

export default HalfContentBlock;
