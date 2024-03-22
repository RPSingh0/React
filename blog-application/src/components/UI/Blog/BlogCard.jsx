import {getFormattedDate} from "../../../utilities/Utilities.js";
import {NavLink} from "react-router-dom";
import TopicIcon from "../Topic/TopicIcon.jsx";

function BlogCard({blog}) {

    const {blogId, title, tags, createdOn} = blog;

    return (
        <NavLink to={`/blog/${blogId}`}
                 className={"grid grid-rows-[auto,1fr] gap-y-4 px-4 py-2 text-gray-800 shadow-md hover:shadow-2xl rounded-lg transition-all duration-500"}>
            <div className={"flex flex-row gap-x-4"}>
                {tags.map(t => <TopicIcon name={t} key={t}/>)}
            </div>
            <div className={"flex flex-col justify-between"}>
                <p className={"text-gray-700 font-bold text-2xl"}>{title}</p>
                <p>{getFormattedDate(createdOn)}</p>
            </div>
        </NavLink>
    );
}

export default BlogCard;