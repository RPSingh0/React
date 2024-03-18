import {tagsToIcons} from "../../../utilities/tagsToIcons.jsx";

function TopicIcon({name}) {
    return (
        <div className={"px-2 py-2 bg-gray-200 rounded-lg"}>
            {tagsToIcons[name]}
        </div>
    );
}

export default TopicIcon;