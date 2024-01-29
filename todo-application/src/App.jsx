import Header from "./components/Header.jsx";
import InProgressTasks from "./components/InProgressTasks.jsx";
import BlockedTasks from "./components/BlockedTasks.jsx";
import CompletedTasks from "./components/CompletedTasks.jsx";
import Footer from "./components/Footer.jsx";
import AddTask from "./components/AddTask.jsx";
import {useState} from "react";
import Button from "./components/Button.jsx";
import NewTasks from "./components/NewTasks.jsx";

function App() {

    const [showAddTaskForm, setShowAddTaskForm] = useState(false);

    return (
        <div className={"grid grid-rows-[auto,1fr,auto] h-dvh w-screen relative"}>
            <Header/>
            <main className={"w-full flex flex-col gap-4 items-center justify-start overflow-y-scroll px-4 py-4 relative"}>
                {showAddTaskForm && <AddTask showHideTask={setShowAddTaskForm}/>}
                <NewTasks/>
                {/*<InProgressTasks/>*/}
                {/*<BlockedTasks/>*/}
                {/*<CompletedTasks/>*/}
                <div
                    className={"absolute sm:bottom-4 sm:right-5 bottom-3 right-3 rounded-lg bg-purple-500 px-2 py-2 z-10"}>
                    <Button onClick={() => setShowAddTaskForm(show => !show)}/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;