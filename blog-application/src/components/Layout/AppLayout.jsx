import Header from "../UI/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import DescriptionHeader from "../UI/Header/DescriptionHeader.jsx";
import {BrowserView, MobileView} from "react-device-detect";
import {useSelector} from "react-redux";

function AppLayout() {

    const {isHeaderOpen} = useSelector(state => state.ui);

    return (
        <>
            <BrowserView>
                <main
                    className={"h-dvh w-dvw grid grid-cols-[1fr,1.5fr] 1690:grid-cols-[1fr,6fr] 1366:grid-cols-[1fr,5fr] 1210:grid-cols-[1fr,4fr] 860:grid-cols-[1fr,3fr] sm:grid-cols-[1fr,2fr]"}>
                    <Header/>
                    <main className={"w-full grid grid-rows-[auto,1fr] overflow-auto relative gap-y-4"}>
                        <DescriptionHeader/>
                        <div className={"px-4 py-4 overflow-auto"}>
                            <Outlet/>
                        </div>
                    </main>
                </main>
            </BrowserView>
            <MobileView>
                <main className={"w-dvw h-dvh grid grid-rows-[auto,1fr] relative gap-y-4"}>
                    {isHeaderOpen && <Header/>}
                    <DescriptionHeader/>
                    <div className={"px-4 pb-4 overflow-auto"}>
                        <Outlet/>
                    </div>
                </main>
            </MobileView>
        </>
    );
}

export default AppLayout;