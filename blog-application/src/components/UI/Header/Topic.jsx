import {NavLink} from "react-router-dom";

function Topic({name}) {
    return (
        <NavLink to={`/topics/${name}`}
                 className={'text-sm hover:text-blue-500 hover:bg-slate-200 flex flex-row items-center gap-x-4 w-full py-2 px-4 rounded-lg transition-all duration-200'}>
            {name}
        </NavLink>
    );
}

export default Topic;