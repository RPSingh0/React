import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getBlogService, parseSingleBlog} from "../../../services/blogs/blogsService.js";
import ReactMarkdown from "react-markdown";
import Spinner from "../Spinner/Spinner.jsx";

function Blog() {

    const {blogId} = useParams();

    const {isLoading, data, error} = useQuery({
        queryKey: [`blog/${blogId}`],
        queryFn: () => getBlogService(blogId)
    })

    return (
        <>
            {error ?
                <div className={"w-full h-full flex flex-col gap-y-4 items-center justify-center"}>
                    <img src={"/broken/broken.gif"} className={"h-16"} alt={"data not found icon"}/>
                    <p className={"font-semibold text-slate-800"}>Data not found!</p>
                </div> :
                <div>
                    {isLoading && <Spinner/>}
                    {
                        !isLoading &&
                        <div className={"flex flex-col gap-y-4"}>
                            <div className={"flex flex-row items-center justify-between"}>
                                <p className={"text-2xl font-bold"}>{parseSingleBlog(data).title}</p>
                            </div>
                            <div className={"prose max-w-none"}>
                                <ReactMarkdown>
                                    {parseSingleBlog(data).blogContent}
                                </ReactMarkdown>
                            </div>
                        </div>

                    }
                </div>
            }

        </>
    );
}

export default Blog;