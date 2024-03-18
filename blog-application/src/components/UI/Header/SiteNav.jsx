import {CgNotes} from "react-icons/cg";
import {FaPersonHiking} from "react-icons/fa6";
import {MdFavoriteBorder} from "react-icons/md";
import SiteNavLink from "./SiteNavLink.jsx";

function SiteNav() {
    return (
        <div className={"flex flex-col gap-2 items-center w-full h-full border-b-2 py-2"}>
            <SiteNavLink to={"/dashboard"}>
                <CgNotes/> All Blogs
            </SiteNavLink>
            <SiteNavLink to={"/our-story"}>
                <FaPersonHiking/> Our Story
            </SiteNavLink>
            <SiteNavLink to={"/favourites"}>
                <MdFavoriteBorder/> My Favourite
            </SiteNavLink>
        </div>
    );
}

export default SiteNav;