import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";

function Contact(props) {
    const {contact, link} = props;

    return (
        <section
            className="full-height contactblock"
            id={link}
        >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <h2>{contact.title}</h2>
                        </AnimationOnScroll>
                    </div>
                </div>
                <div className="row halfcontentblock">
                    <div className="col-md-4">
                        {" "}
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <strong>{contact.address_header}</strong>
                            <address>{contact.address}</address>{" "}
                        </AnimationOnScroll>
                    </div>
                    <div className="col-md-4">
                        {" "}
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <strong>{contact.landline_header}</strong>
                            <a
                                href={`tel:${contact.landline}`}
                                title={contact.landline}
                            >
                                {contact.landline}
                            </a>
                            <strong>{contact.mobile_header}</strong>
                            <a
                                href={`tel:${contact.mobile}`}
                                title={contact.mobile}
                            >
                                {contact.mobile}
                            </a>{" "}
                        </AnimationOnScroll>
                    </div>
                    <div className="col-md-4">
                        {" "}
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <strong>{contact.email_header}</strong>
                            <a
                                href={`mailto:${contact.email}`}
                                title={contact.email}
                            >
                                {contact.email}
                            </a>
                            <strong>{contact.facebook_header}</strong>
                            <a
                                href={contact.facebook_link}
                                target="blank"
                            >
                                {contact.facebook_description}
                            </a>{" "}
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
