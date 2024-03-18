import {FaBookOpenReader} from "react-icons/fa6";
import Topic from "./Topic.jsx";
import {useQuery} from "@tanstack/react-query";
import {getAllBlogTopicService} from "../../../services/blogs/blogsService.js";
import GridLoading from "../Spinner/GridLoading.jsx";

const containers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
];

function Topics() {

    const {isLoading, data, error} = useQuery({
        queryKey: ['topics'],
        queryFn: getAllBlogTopicService
    });

    return (

        <div className={"w-full h-full flex flex-col gap-y-4 overflow-auto border-b-2 relative"}>
            <p className={"flex flex-row items-center xl:text-xl lg:text-lg md:text-md sm:text-sm gap-x-4 px-2"}>
                <FaBookOpenReader/> Available topics
            </p>
            <div className={"w-full h-full overflow-auto grid grid-cols-1 gap-y-4"}>
                {isLoading && containers.map(x => <GridLoading key={x}/>)}
                {!isLoading && !error && data.data.tags.map(t => <Topic name={t} key={t}/>)}
                {error && containers.map(x => <GridLoading key={x}/>)}
            </div>
        </div>
    );
}

export default Topics;