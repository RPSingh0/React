import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getBlog} from "../../../services/blogs/blogsService.js";
import BlogCard from "../Dashboard/BlogCard.jsx";
import ReactMarkdown from "react-markdown";
import Spinner from "../Spinner/Spinner.jsx";

function Blog() {

    const {blogId} = useParams();

    const {isLoading, data, error} = useQuery({
        queryKey: [`blog/${blogId}`],
        queryFn: () => getBlog(blogId)
    })

    return (
        <div>
            {isLoading && <Spinner/>}
            {
                !isLoading &&
                <div className={"flex flex-col gap-y-4"}>
                    <div className={"flex flex-row items-center justify-between"}>
                        <p className={"text-2xl font-bold"}>{data.data.blog.title}</p>
                        <div className={"flex flex-row items-center gap-x-4"}>
                            <img src={data.data.blog.writtenBy.avatar} alt={"user-image"}
                                 className={"w-12 h-12 rounded-lg"}/>
                            <p>By - {data.data.blog.writtenBy.name}</p>
                        </div>
                    </div>
                    <div className={"prose max-w-none"}>
                        <ReactMarkdown>
                            {data.data.blog.blogContent}
                        </ReactMarkdown>
                    </div>
                </div>

            }
        </div>
    );
}

export default Blog;