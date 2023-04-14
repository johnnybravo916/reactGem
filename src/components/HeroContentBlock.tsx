import React from "react";
import MouseScroll from "./MouseScroll";
import {AnimationOnScroll} from "react-animation-on-scroll";

function HalfContentBlock(props: {
    data: any;
    image: string;
    title: string;
    logo: string;
    secondlink: string;
}) {
    const {data, logo, title, secondlink} = props;

    return (
        <section id="home">
            <div className="container-fluid min">
                <div className="row halfcontentblock full-height">
                    <div className="col-lg-5">
                        <div className="sticky-lg-top">
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                                <img
                                    className="img-fluid "
                                    src={logo}
                                    alt={title}
                                    title={title}
                                />
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="col-lg-7 border-left position-relative">
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <strong className="tagline">
                                {data.tagline.description}
                            </strong>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <h3 className="animate__animated animate__fadeInUp">
                                {data.mission.title}
                            </h3>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <p className="animate__animated animate__fadeInUp">
                                {data.mission.description}
                            </p>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <h3 className="animate__animated animate__fadeInUp">
                                {data.vision.title}
                            </h3>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <p className="animate__animated animate__fadeInUp">
                                {data.vision.description}
                            </p>
                        </AnimationOnScroll>
                        <div className="cel"></div>
                    </div>
                </div>
            </div>
            <MouseScroll link={secondlink} />
        </section>
    );
}

export default HalfContentBlock;
