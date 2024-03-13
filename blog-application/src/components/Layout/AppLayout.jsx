import Header from "../UI/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import DescriptionHeader from "../UI/Header/DescriptionHeader.jsx";

function AppLayout() {
    return (
        <main className={"h-dvh w-dvw grid grid-cols-[1fr,6fr]"}>
            <Header/>
            <main className={"w-full grid grid-rows-[auto,1fr] overflow-auto relative gap-y-4"}>
                <DescriptionHeader/>
                <div className={"px-4"}>
                    <Outlet/>
                </div>
            </main>
        </main>
    );
}

export default AppLayout;