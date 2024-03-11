import {getFormattedDate} from "../../../utilities/Utilities.js";
import {NavLink} from "react-router-dom";

function BlogCard({blog}) {

    const {_id, title, shortDescription, lastUpdatedOn, writtenBy} = blog;
    const {name, avatar} = writtenBy;

    return (
        <NavLink to={`/blog/${_id}`}
                 className={"grid grid-rows-[auto,auto,auto,1fr] gap-y-4 text-gray-800 shadow-xl hover:shadow-2xl rounded-lg px-4 py-2 border-4 border-t-0 border-l-0 border-r-0 border-b-fuchsia-700 hover:border-b-green-700 transition-all duration-500"}>
            <div className={"h-32 overflow-hidden rounded-t-lg"}>
                <img
                    src={"https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt={"blog-thumbnail"}/>
            </div>
            <div className={"flex flex-row items-center justify-between"}>
                <div className={"flex flex-col gap-y-2"}>
                    <p className={"text-gray-800 font-bold text-2xl"}>{title}</p>
                    <p>by {name}</p>
                </div>
                {/*<img className={"w-10 h-10 rounded-lg"}*/}
                {/*     src={avatar}/>*/}
            </div>
            <div>
                {shortDescription}
            </div>
            <div className={"flex flex-row items-center justify-between"}>
                <p>{getFormattedDate(lastUpdatedOn)}</p>
                <p>3 Minute</p>
            </div>
        </NavLink>
    );
}

export default BlogCard;