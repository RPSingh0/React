import {NavLink} from "react-router-dom";
import {isMobile} from "react-device-detect";

function SiteLogo() {
    return (
        <NavLink to={"/dashboard"} className={`${isMobile ? '' : 'w-full'} h-full flex items-center justify-center !bg-white`}>
            <div className={"flex flex-row items-center justify-center gap-2"}>
                <img className={"animate-spin-slow"} src={'/logo/react.svg'} alt={'react blog site logo'}/>
                <p className={"font-bold text-slate-700 xl:text-xl lg:text-lg md:text-md sm:text-sm"}>React Blogs</p>
            </div>
        </NavLink>
    );
}

export default SiteLogo;