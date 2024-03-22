import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getAllBlogsByTopicService, getAllBlogsService} from "../../../services/blogs/blogsService.js";
import Spinner from "../Spinner/Spinner.jsx";
import BlogCard from "../Blog/BlogCard.jsx";

function TopicBlogs() {

    const {topic} = useParams();

    const {isLoading, data, error} = useQuery({
        queryKey: [`${topic}`],
        queryFn: () => getAllBlogsByTopicService(topic)
    });

    return (
        <>
            {error ?
                <div className={"w-full h-full flex flex-col gap-y-4 items-center justify-center"}>
                    <img src={"/broken/broken.gif"} className={"h-16"} alt={"data not found icon"}/>
                    <p className={"font-semibold text-slate-800"}>Data not found!</p>
                </div> :
                <div className={'grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-8'}>
                    {isLoading && <Spinner/>}
                    {!isLoading && !error && data.data.blogs.map(blog => <BlogCard blog={blog} key={blog.blogId}/>)}
                </div>
            }
        </>
    );

    return (
        <div>Topics will be rendered here {topic}</div>
    );
}

export default TopicBlogs;