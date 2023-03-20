import React from "react";
import MouseScroll from "./MouseScroll";

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
                    <div className="col-md-5">
                        <div className="sticky-lg-top">
                            <img
                                className="img-fluid animate__animated animate__fadeInUp"
                                src={logo}
                                alt={title}
                                title={title}
                            />
                        </div>
                    </div>
                    <div className="col-md-7 border-left position-relative">
                        <strong className="tagline animate__animated animate__fadeInUp">
                            {data.tagline.description}
                        </strong>
                        <h3 className="animate__animated animate__fadeInUp">
                            {data.mission.title}
                        </h3>
                        <p className="animate__animated animate__fadeInUp">
                            {data.mission.description}
                        </p>
                        <h3 className="animate__animated animate__fadeInUp">
                            {data.vision.title}
                        </h3>
                        <p className="animate__animated animate__fadeInUp">
                            {data.vision.description}
                        </p>
                        <div className="cel"></div>
                    </div>
                </div>
            </div>
            <MouseScroll link={secondlink} />
        </section>
    );
}

export default HalfContentBlock;
