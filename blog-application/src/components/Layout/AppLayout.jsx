import Header from "../UI/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../UI/Footer/Footer.jsx";

function AppLayout() {
    return (
        <main
            className={"sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl m-auto px-3 h-dvh w-dvw grid grid-rows-[auto,1fr]"}>
            <header
                className={"flex flex-row items-center justify-between py-4 w-[100%] backdrop-filter backdrop-blur-lg bg-opacity-50 border-b border-gray-400"}>
                <Header/>
            </header>
            <main className={"mt-5 w-full overflow-auto hiddenScrollbar relative"}>
                <Outlet/>
            </main>
                <Footer/>
        </main>
    );
}

export default AppLayout;