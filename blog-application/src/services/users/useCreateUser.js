import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {createUserService} from "./userService.js";

export function useCreateUser() {
    const {mutate: createUser, isPending: isCreating} = useMutation({
        mutationFn: createUserService,
        onSuccess: () => {
            toast.success('User created successfully!');
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return {isCreating, createUser};
}