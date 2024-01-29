import Section from "../ui/Section.jsx";
import Task from "../ui/Task.jsx";

function NewTasks() {
    return (
        <Section heading={"New Tasks"} type={'newTask'}>
            <Task heading={"Do one push-up today"}>
                I have to do one push-up today. Actually i have a plan to increase this incrementally day by day
            </Task>
        </Section>
    );
}

export default NewTasks;