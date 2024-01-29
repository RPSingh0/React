function Section({heading, type, children}) {

    const baseStyle = 'flex flex-col gap-2 w-full sm:w-2/3';

    const sectionType = {
        newTask: ' border-sky-300',
        inProgressTask: ' border-teal-400',
        blockedTask: ' border-red-400',
        completedTask: ' border-green-400'
    }

    return (
        <section className={baseStyle + sectionType[type]}>
            <header className={"text-lg font-bold"}>
                {heading}
            </header>
            <section className={"flex flex-col gap-1 border-solid border-2 rounded-lg  px-4 py-2"}>
                {children}
            </section>
        </section>
    );
}

export default Section;