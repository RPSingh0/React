import {getFormattedDate} from "../../../utilities/Utilities.js";
import {NavLink} from "react-router-dom";

function BlogCard({blog}) {

    const {_id, title, lastUpdatedOn} = blog;

    return (
        <NavLink to={`/blog/${_id}`}
                 className={"grid grid-rows-2 gap-y-4 text-gray-800 shadow-md hover:shadow-2xl rounded-lg transition-all duration-500"}>
            <div className={"overflow-hidden rounded-t-lg h-32"}>
                <img
                    src={"https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt={"blog-thumbnail"}/>
            </div>
            <div className={"flex flex-col justify-between px-4 py-2"}>
                <p className={"text-gray-800 font-bold text-2xl"}>{title}</p>
                <p>{getFormattedDate(lastUpdatedOn)}</p>
            </div>
        </NavLink>
    );
}

export default BlogCard;