import {NavLink} from "react-router-dom";

function SiteNav() {
    return (
        <div className={"flex flex-row gap-4 items-center justify-between"}>
            <NavLink to={"/dashboard"} className={"hover:text-blue-700 visited:text-fuchsia-900"}>All Blogs</NavLink>
            <NavLink to={"/our-story"} className={"hover:text-blue-700 visited:text-fuchsia-900"}>Our Story</NavLink>
        </div>
    );
}

export default SiteNav;