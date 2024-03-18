import {TiThMenuOutline} from "react-icons/ti";
import {isMobile} from "react-device-detect";
import SiteLogo from "./SiteLogo.jsx";
import {useDispatch} from "react-redux";
import {toggleHeader} from "../uiSlice.js";

function DescriptionHeader() {

    const dispatch = useDispatch();

    return (
        <div className={"px-4 py-4 flex flex-row items-center justify-between text-2xl border-b-2"}>
            {isMobile ?
                <>
                    <SiteLogo/>
                    <button onClick={() => dispatch(toggleHeader(false))}>
                        <TiThMenuOutline/>
                    </button>
                </> :
                <TiThMenuOutline/>
            }
        </div>
    );
}

export default DescriptionHeader;