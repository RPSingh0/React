import Button from "../Button/Button.jsx";
import {InputField, SignInHere} from "../Form/FormFields.jsx";
import {useForm} from "react-hook-form";
import {useCreateUser} from "../../../services/users/useCreateUser.js";

function SignUp() {

    const {control, handleSubmit} = useForm();
    const {isCreating, createUser} = useCreateUser();

    function onSubmit(data) {
        console.log(data);
        createUser(data, {
            onSuccess: () => {
                console.log('user created!');
            }
        });
    }

    function onError(data) {
        console.log(data);
    }

    return (
        <div className={"w-full h-full flex flex-col items-center justify-center"}>
            <div className={"flex flex-col gap-y-4 items-start w-1/2 border-2 border-black px-8 py-4 rounded-lg"}>
                <p className={"text-2xl font-semibold"}>Create your Free Account</p>
                <form onSubmit={handleSubmit(onSubmit, onError)} className={"flex flex-col w-full gap-y-4"}>
                    <InputField
                        control={control}
                        name={"name"}
                        label={"UserName"}
                        disabled={isCreating}
                        placeholder={"Username"}
                        required
                    />
                    <InputField
                        control={control}
                        name={"email"}
                        label={"Email"}
                        disabled={isCreating}
                        placeholder={"name@domain.com"}
                        required
                    />
                    <InputField
                        control={control}
                        name={"password"}
                        label={"Password"}
                        disabled={isCreating}
                        placeholder={"••••••••"}
                        required
                    />
                    <InputField
                        control={control}
                        name={"confirmPassword"}
                        label={"Confirm Password"}
                        disabled={isCreating}
                        placeholder={"••••••••"}
                        required
                    />
                    <Button>Create an Account</Button>
                </form>
                <SignInHere/>
            </div>
        </div>
    );
}

export default SignUp;