import {FileUpload, InputField} from "../Form/FormFields.jsx";
import Button from "../Button/Button.jsx";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {useCreateBlog} from "../../../services/blogs/useCreateBlog.js";
import {useMutation} from "@tanstack/react-query";
import {createBlogService} from "../../../services/blogs/blogsService.js";

function Write() {

    const {register, handleSubmit, reset, formState} = useForm();
    const {errors} = formState;

    const {isCreating, createBlog} = useCreateBlog();

    function onSubmit(data) {
        const toastId = toast.loading("working...");

        console.log(data);
        const file = data['blogContent'][0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const fileContent = e.target.result;

            createBlog({title: data.title, shortDescription: data.shortDescription, blogContent: fileContent}, {
                onSuccess: () => {
                    reset();
                    toast.dismiss(toastId);
                }
            });
        }

        reader.readAsText(file)
    }

    function onError(data) {
        console.log(data);
    }

    return (
        <div className={"w-full h-full flex items-center justify-center"}>
            <form className={"w-1/2 flex flex-col gap-y-4"} onSubmit={handleSubmit(onSubmit, onError)}>
                <input id={"title"} type={"text"} placeholder={"Blog title..."} disabled={isCreating}
                       required={true} {...register("title", {
                    required: "A title for blog is required... are you stupid ?"
                })}/>
                <input id={"short-description"} type={"text"}
                       placeholder={"Description available on front page..."} disabled={isCreating}
                       required={true} {...register("shortDescription", {
                    required: "A title without description is not good"
                })}/>
                <input id={"blog-content"} type={"file"} disabled={isCreating}
                       required={true} {...register("blogContent", {
                    required: "Ahh, smarty pants! got you :)"
                })}/>
                <Button>Submit</Button>
            </form>
        </div>
    );
}

export default Write;