import {useMutation} from "@tanstack/react-query";
import {getUserService} from "./userService.js";
import toast from "react-hot-toast";
import {setUser} from "./userSlice.js";
import {useDispatch} from "react-redux";

export function useLoginUser() {

    const dispatch = useDispatch();

    const {mutate: authUser, isPending: isWorking} = useMutation({
        mutationFn: getUserService,
        onSuccess: (data) => {
            console.log(data);
            toast.success('User logged in!');
            dispatch(setUser(data))
        }
    });

    return {isWorking, authUser};
}