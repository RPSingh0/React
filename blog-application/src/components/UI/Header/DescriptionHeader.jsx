import {IoCloudyNightOutline} from "react-icons/io5";
import {LuClover} from "react-icons/lu";
import {TiThMenuOutline} from "react-icons/ti";

function DescriptionHeader() {
    return (
        <div className={"px-4 py-4 flex flex-row items-center justify-between text-2xl border-b-2"}>
            <div>
                <TiThMenuOutline />
            </div>
            <div className={"flex flex-row items-center gap-x-4"}>
                <LuClover/>
                <IoCloudyNightOutline />
            </div>
        </div>
    );
}

export default DescriptionHeader;