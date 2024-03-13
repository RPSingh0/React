import Button from "../Button/Button.jsx";
import {InputField, SignUpHere} from "../Form/FormFields.jsx";
import {useForm} from "react-hook-form";
import {useLoginUser} from "../../../services/users/useLoginUser.js";
import toast from "react-hot-toast";

function SignIn() {

    const {control, handleSubmit} = useForm();

    const {isWorking, authUser} = useLoginUser();

    function onSubmit(data) {
        const loggingInToastId = toast.loading('Please hang on a moment!');
        authUser({email: data.email}, {
            onSuccess: () => {
                console.log('done');
                toast.dismiss(loggingInToastId);
            }
        })
    }

    function onError(data) {
        console.log(data);
    }

    return (
        <div className={"w-full h-full flex flex-col items-center justify-center"}>
            <div className={"flex flex-col gap-y-4 items-start w-1/2 border-2 border-black px-8 py-4 rounded-lg"}>
                <p className={"text-2xl font-semibold"}>Welcome Back !</p>
                <form onSubmit={handleSubmit(onSubmit, onError)} className={"flex flex-col w-full gap-y-4"}>
                    <InputField
                        control={control}
                        name={"email"}
                        label={"Email"}
                        disabled={isWorking}
                        placeholder={"name@domain.com"}
                        required
                    />
                    <InputField
                        control={control}
                        name={"password"}
                        label={"Password"}
                        disabled={isWorking}
                        placeholder={"••••••••"}
                        type={"password"}
                        required
                    />
                    <Button>Sign In</Button>
                </form>
                <SignUpHere/>
            </div>
        </div>
    );
}

export default SignIn;