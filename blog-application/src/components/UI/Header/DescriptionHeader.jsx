import {TiThMenuOutline} from "react-icons/ti";
import {isMobile} from "react-device-detect";
import SiteLogo from "./SiteLogo.jsx";

function DescriptionHeader({openNavigation}) {
    return (
        <div className={"px-4 py-4 flex flex-row items-center justify-between text-2xl border-b-2"}>
            {isMobile && <SiteLogo/>}
            <button onClick={() => openNavigation(true)}>
                <TiThMenuOutline/>
            </button>
        </div>
    );
}

export default DescriptionHeader;