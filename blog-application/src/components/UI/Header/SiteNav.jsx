import {NavLink} from "react-router-dom";
import {CgNotes} from "react-icons/cg";
import {FaPersonHiking} from "react-icons/fa6";
import {MdFavoriteBorder} from "react-icons/md";

function SiteNav() {
    return (
        <div className={"flex flex-col gap-2 items-center w-full h-full border-b-2 py-2"}>
            <NavLink to={"/dashboard"}
                     className={"hover:text-blue-500 hover:bg-slate-200 flex flex-row items-center gap-x-4 text-xl w-full py-2 px-2 rounded-lg transition-all duration-200"}>
                <CgNotes/> All Blogs
            </NavLink>
            <NavLink to={"/our-story"}
                     className={"hover:text-blue-500 hover:bg-slate-200 flex flex-row items-center gap-x-4 text-xl w-full py-2 px-2 rounded-lg transition-all duration-200"}>
                <FaPersonHiking/> Our Story
            </NavLink>
            <NavLink to={"/favourites"}
                     className={"hover:text-blue-500 hover:bg-slate-200 flex flex-row items-center gap-x-4 text-xl w-full py-2 px-2 rounded-lg transition-all duration-200"}>
                <MdFavoriteBorder /> My Favourite
            </NavLink>
        </div>
    );
}

export default SiteNav;