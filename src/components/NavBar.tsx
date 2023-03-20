import React from "react";

function NavBar(props: {
    title: string;
    menu: {
        link: string | undefined;
        title: string;
    }[];
    logo: string;
}) {
    const {title, menu, logo} = props;
    const [openMenu, setOpenMenu] = React.useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <div
            className={`animate__animated animate__fadeInLeft menu ${
                openMenu ? "open" : "close"
            }`}
        >
            <nav>
                <ul>
                    {menu.map((item, index) => {
                        return (
                            <li key={index}>
                                <a
                                    href={`${item.link === "/" ? "" : "#"}${
                                        item.link
                                    }`}
                                >
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div
                className="d-flex position-relative"
                onClick={toggleMenu}
            >
                <div className="icon--logo center">
                    <img
                        src={logo}
                        alt={title}
                    />
                    <span className="visually-hidden">{title}</span>
                </div>
                <strong>Menu</strong>
                <div className="icon--dots center">
                    <div className="dots--wrapper">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
