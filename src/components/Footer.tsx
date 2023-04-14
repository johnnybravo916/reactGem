import React from "react";

function Footer(props) {
    const {title, back, link} = props;

    return (
        <footer>
            <div className="container-fluid">
                <div className="row justify-content-end">
                    <div className="col-md-12">
                        <a href={`#${link}`}>{back}</a>
                        <small>
                            Copyright &copy; {new Date().getFullYear()} &bull;{" "}
                            <a
                                href="/"
                                title={title}
                            >
                                {title}
                            </a>
                        </small>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
