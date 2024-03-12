import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createBlogService} from "./blogsService.js";
import toast from "react-hot-toast";

export function useCreateBlog() {
    const queryClient = useQueryClient();

    const {mutate: createBlog, isLoading: isCreating} = useMutation({
        mutationFn: createBlogService,
        onSuccess: () => {
            toast.success("Your blog has been written!");
            queryClient.invalidateQueries({
                queryKey: ["blogs"]
            })
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return {isCreating, createBlog};
}