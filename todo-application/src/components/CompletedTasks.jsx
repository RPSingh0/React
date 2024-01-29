function CompletedTasks() {
    return (
        <section className={"flex flex-col gap-2"}>
            <header className={"text-lg"}>
                Completed Tasks
            </header>
            <section className={"flex flex-col gap-1"}>
                <p>Task 1</p>
                <p>Task 2</p>
                <p>Task 3</p>
            </section>
        </section>
    );
}

export default CompletedTasks;