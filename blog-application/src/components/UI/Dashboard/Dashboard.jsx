import {useQuery} from "@tanstack/react-query";
import {getAllBlogsService} from "../../../services/blogs/blogsService.js";
import BlogCard from "./BlogCard.jsx";
import Spinner from "../Spinner/Spinner.jsx";

function Dashboard() {

    const {isLoading, data, error} = useQuery({
        queryKey: ['blogs'],
        queryFn: getAllBlogsService
    });

    return (
        <div className={'grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-8'}>
            {isLoading && <Spinner/>}
            {!isLoading && data.data.blogs.map(blog => <BlogCard blog={blog} key={blog._id}/>)}
        </div>
    );
}

export default Dashboard;