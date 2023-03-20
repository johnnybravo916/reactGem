import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";

function MouseScroll(props) {
    const {link} = props;

    return (
        <section className="mousescroll bg-color overflow-hidden">
            <AnimationOnScroll animateIn="animate__bounceIn">
                <a
                    href={`#${link}`}
                    className="icon--scroll"
                >
                    <span>scroll down</span>
                    <img
                        src="../assets/icons/mouse.png"
                        alt="scroll down"
                    />
                </a>
            </AnimationOnScroll>
        </section>
    );
}

export default MouseScroll;
