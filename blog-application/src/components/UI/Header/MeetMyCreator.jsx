function MeetMyCreator() {
    return (
        <div className={"flex flex-col gap-y-4 text-gray-800 h-full justify-evenly text-sm sm:text-xs"}>
            <p className={"font-bold"}>Hi! Glad to see you here...</p>
            <p>Please take your time and read our blogs. These are written to provide you with all the details you
               need :)</p>
            <div className={"grid grid-cols-[1fr,4fr] gap-x-4 items-center"}>
                <div className={"w-12 h-12 rounded-full overflow-hidden"}>
                    <img src={"/creator/rupinder.jpg"} alt={"creator image"}/>
                </div>
                <div>
                    <p className={"font-bold"}>Rupinder Pal Singh</p>
                    <p>Software Engineer</p>
                </div>
            </div>
        </div>
    );
}

export default MeetMyCreator;