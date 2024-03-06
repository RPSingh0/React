import {NavLink} from "react-router-dom";

function SiteLogo() {
    return (
        <NavLink to={"/dashboard"}>
            <div className={"flex flex-row items-center justify-around gap-2"}>
                <img className={"animate-spin-slow"} src={'/logo/react.svg'} alt={'react blog site logo'}/>
                <p className={"font-bold text-slate-700 text-xl"}>React Blogs</p>
            </div>
        </NavLink>
    );
}

export default SiteLogo;