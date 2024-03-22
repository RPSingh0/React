import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toggleHeader} from "../uiSlice.js";
import {isMobile} from "react-device-detect";
import {convertToTitle} from "../../../utilities/Utilities.js";
import TopicIcon from "../Topic/TopicIcon.jsx";

function Topic({name}) {

    const dispatch = useDispatch();

    return (
        <NavLink to={`/topics/${name}`} onClick={() => isMobile ? dispatch(toggleHeader(false)) : ''}
                 className={'xl:text-lg lg:text-md md:text-sm sm:text-xs hover:text-blue-500 hover:bg-slate-200 flex flex-row items-center gap-x-4 w-full py-2 px-1 rounded-lg transition-all duration-200'}>
            {<TopicIcon name={name}/>} {convertToTitle(name)}
        </NavLink>
    );
}

export default Topic;