import React from "react";

function Intro(props: {
    image: string;
    title: string;
    secondlink: string;
    position: string;
}) {
    const {image, title, secondlink, position} = props;

    return (
        <section
            className="intro"
            style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: `center ${position}`,
            }}
        >
            <div className="container-fluid">
                <div className="row full-height">
                    <div className="col">
                        <div className="intro-wrapper">
                            <div className="intro-block">
                                <div className="intro-content">{title}</div>
                                <div className="intro-mouse animate__animated animate__fadeInUp">
                                    <a
                                        href={`#${secondlink}`}
                                        className="icon--scroll"
                                    >
                                        <span>scroll down</span>
                                        <img
                                            src="../assets/icons/mouse.png"
                                            alt="scroll down"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;
