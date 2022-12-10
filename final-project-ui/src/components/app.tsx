import { registerCustomElement } from "ojs/ojvcomponent";
import { h } from "preact";
import { useEffect } from "preact/hooks";
import Context = require("ojs/ojcontext");
import { Footer } from "./footer";
import { Header } from "./header";
import { Content } from "./content/index";

type Props = Readonly<{
    appName?: string;
    userLogin?: string;
}>;

export const App = registerCustomElement(
    "app-root",
    ({ appName = "Plant Monitoring System", userLogin = "arunt2@illinois.edu" }: Props) => {
        useEffect(() => {
            Context.getPageContext().getBusyContext().applicationBootstrapComplete();
        }, []);

        return (
            <div id="appContainer" class="oj-web-applayout-page">
                <Header
                    appName={appName}
                    userLogin={userLogin}
                />
                <Content />
                <Footer />
            </div>
        );
    }
);
