import SiteLogo from "./SiteLogo.jsx";
import SiteNav from "./SiteNav.jsx";
import MeetMyCreator from "./MeetMyCreator.jsx";
import Topics from "./Topics.jsx";
import {isMobile} from "react-device-detect";

function Header({isOpen}) {
    return (
        <main
            className={`grid grid-rows-[${isMobile ? '0.5fr' : '1fr'},1fr,3fr,2fr] place-items-center px-4 ${isMobile ? 'gap-y-2 py-4' : ''} border-r-2 h-full overflow-auto ${isOpen ? 'fixed top-0 left-0  bg-white z-10' : ''}`}>
            <SiteLogo/>
            <SiteNav/>
            <Topics/>
            <MeetMyCreator/>
        </main>
    );
}

export default Header;