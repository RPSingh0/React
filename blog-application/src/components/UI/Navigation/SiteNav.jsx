import {NavLink} from "react-router-dom";

function SiteNav() {
    return (
        <div className={"flex flex-row gap-4 items-center justify-between"}>
            <NavLink to={"/dashboard"} className={"hover:text-blue-700 visited:text-fuchsia-900"}>All Blogs</NavLink>
            <NavLink to={"/our-story"} className={"hover:text-blue-700 visited:text-fuchsia-900"}>Our Story</NavLink>
            <NavLink to={"/membership"} className={"hover:text-blue-700 visited:text-fuchsia-900"}>Membership</NavLink>
            <NavLink to={"/write"} className={"hover:text-blue-700 visited:text-fuchsia-900"}>Write</NavLink>
            <NavLink to={"/sign-in"} className={"hover:text-blue-700 visited:text-fuchsia-900"}>Sign In</NavLink>
        </div>
    );
}

export default SiteNav;