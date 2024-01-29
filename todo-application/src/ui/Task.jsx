import {useState} from "react";

function Task({heading, children}) {

    const [showFullTask, setShowFullTask] = useState(false)

    return (
        <button className={"flex flex-col gap-1 text-left"} onClick={() => setShowFullTask(show => !show)}>
            <h2 className={"text-md font-semibold"}>{heading}</h2>
            {showFullTask && children}
        </button>
    );
}

export default Task;