import React, {useEffect, useState} from "react";

import NavBar from "./components/NavBar.tsx";
import HeroContentBlock from "./components/HeroContentBlock.tsx";
import HalfContentBlock from "./components/HalfContentBlock.tsx";
import HeroBlock from "./components/HeroBlock.tsx";
import CompanyList from "./components/CompanyList.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import Loading from "./components/Loading.tsx";

import "./App.scss";

function App() {
    const [isloading, setIsLoading] = useState(true);
    const [data, setData] = useState({});

    function getData() {
        fetch("./data/data.json")
            .then((response) => {
                if (response.status !== 200) {
                    console.log(response.status);
                }
                return response.json();
            })
            .then((response) => {
                console.log(response);
                setData(response);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {isloading ? (
                <Loading />
            ) : (
                <>
                    <NavBar
                        logo={data.icons.diamond}
                        title={data.meta.title}
                        menu={data.navigation.menu}
                    />

                    <HeroContentBlock
                        data={data.home}
                        title={data.meta.title}
                        logo={data.meta.branding}
                        secondlink={data.navigation.menu[1].link}
                    />
                    <HeroBlock
                        image={data.herobanner.office}
                        position={"center"}
                    />
                    <HalfContentBlock
                        header={data.about.title}
                        content={data.about.description[0].paragraph}
                        subheader={data.about.description[1].subheader}
                        link={data.navigation.menu[1].link}
                        secondlink={data.navigation.menu[2].link}
                    />
                    <HeroBlock image={data.herobanner.projects} />
                    <HalfContentBlock
                        listing
                        header={data.services.title}
                        subheader={data.services.services}
                        link={data.navigation.menu[2].link}
                        secondlink={data.navigation.menu[3].link}
                    />
                    <HeroBlock image={data.herobanner.partners} />
                    <CompanyList
                        clients={data.clients.clients}
                        title={data.clients.title}
                        link={data.navigation.menu[3].link}
                        secondlink={data.navigation.menu[4].link}
                    />
                    <Contact
                        contact={data.contact}
                        link={data.navigation.menu[4].link}
                    />
                    <Footer
                        title={data.meta.title}
                        back={data.footer.title}
                        link={data.footer.link}
                    />
                </>
            )}
        </>
    );
}

export default App;
