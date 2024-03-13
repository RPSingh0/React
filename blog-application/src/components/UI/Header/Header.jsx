import SiteLogo from "./SiteLogo.jsx";
import SiteNav from "./SiteNav.jsx";
import MeetMyCreator from "./MeetMyCreator.jsx";
import Topics from "./Topics.jsx";

function Header() {
    return (
        <main className={"grid grid-rows-[1fr,1fr,3fr,2fr] place-items-center px-4 gap-y-4 border-r-2 h-full overflow-auto"}>
            <SiteLogo/>
            <SiteNav/>
            <Topics/>
            <MeetMyCreator/>
        </main>
    );
}

export default Header;