import {FcGoogle} from "react-icons/fc";
import {FaApple} from "react-icons/fa";
import getTitle from "../../../Utilities/Utilities.js";

const icons = {
    google: <FcGoogle/>,
    apple: <FaApple/>
}

function SocialLogin({company, type}) {
    return (
        <div className={"flex items-center justify-center gap-x-1 border-2 border-slate-400 rounded-lg py-2 px-4 hover:bg-slate-300 transition-all duration-500"}>
            {icons[company]}
            <p>{type} with {getTitle(company)}</p>
        </div>
    );
}

export default SocialLogin;