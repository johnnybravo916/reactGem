import React from "react";
import MouseScroll from "./MouseScroll";
import {AnimationOnScroll} from "react-animation-on-scroll";

function CompanyList(props: {
    clients: {title: string; link: string}[];
    title: string;
    link: string;
    secondlink: string;
}) {
    const {clients, title, link, secondlink} = props;

    return (
        <section id={link}>
            <div className="container-fluid full-height">
                <div className="companylist">
                    <div className="row">
                        <div className="col-md-12">
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                                <h2 className="text-center">{title}</h2>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                                <ul>
                                    {clients.map((client, id) => {
                                        return (
                                            <li key={id}>
                                                <img
                                                    src={client.link}
                                                    alt={client.title}
                                                    className="img-fluid"
                                                />
                                            </li>
                                        );
                                    })}
                                </ul>{" "}
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            <MouseScroll link={secondlink} />
        </section>
    );
}

export default CompanyList;
