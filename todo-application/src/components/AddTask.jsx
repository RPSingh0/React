import {IoMdClose} from "react-icons/io";

function AddTask({showHideTask}) {

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className={"fixed top-0 left-0 w-dvw h-dvh backdrop-blur-md z-[100] flex items-center justify-center"}>
            <form onSubmit={handleSubmit}
                  className={"flex flex-col gap-2 bg-stone-200 px-6 py-4 rounded-lg sm:w-1/3 relative"}>
                <button type={"button"} className={"absolute top-0 right-0 px-2 py-2 rounded-lg"}
                        onClick={() => showHideTask(false)}><IoMdClose/></button>
                <div className={"flex flex-col gap-2"}>
                    <label htmlFor="default-input" className="block text-sm font-medium text-gray-900">
                        Task
                    </label>
                    <input type="text" id="default-input"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                        Description
                    </label>
                    <textarea id="message" rows="4"
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border
                              border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Any details you would like to remember..."></textarea>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <label htmlFor="countries" className="block text-sm font-medium text-gray-900">
                        Task Status</label>
                    <select id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="new">New</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button type={"submit"}
                        className={"px-2 py-1 bg-purple-400 hover:bg-purple-500 transition-all duration-300 rounded-lg"}>
                    Add Task
                </button>
            </form>
        </div>
    );
}

export default AddTask;