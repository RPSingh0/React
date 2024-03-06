import Button from "../Button/Button.jsx";
import {NavLink} from "react-router-dom";

function SiteNav() {
    return (
        <div className={"flex flex-row gap-4 items-center justify-between"}>
            <NavLink to={"/our-story"}>Our Story</NavLink>
            <NavLink to={"/membership"}>Membership</NavLink>
            <NavLink to={"/write"}>Write</NavLink>
            <NavLink to={"/sign-in"}>Sign In</NavLink>
            <NavLink to={"/get-started"}>
                <Button>Get Started</Button>
            </NavLink>
        </div>
    );
}

export default SiteNav;