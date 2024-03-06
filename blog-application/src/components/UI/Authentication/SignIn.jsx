import SocialLogin from "./SocialLogin.jsx";
import Button from "../Button/Button.jsx";
import {Checkbox, ForgotPassword, InputField, SignUpHere, SocialManualSeparator} from "../Form/FormFields.jsx";

function SignIn() {
    return (
        <div className={"w-full h-full flex flex-col items-center justify-center"}>
            <div className={"flex flex-col gap-y-4 items-start w-1/2 border-2 border-black px-8 py-4 rounded-lg"}>
                <p className={"text-2xl font-semibold"}>Welcome Back !</p>
                <div className={"grid grid-cols-2 w-full gap-x-4"}>
                    <SocialLogin company={"google"} type={"Sign in"}/>
                    <SocialLogin company={"apple"} type={"Sign in"}/>
                </div>
                <SocialManualSeparator text={"or"}/>
                <form className={"flex flex-col w-full gap-y-4"}>
                    <InputField id={"email"} type={"text"} label={"Your email"} placeholder={"name@domain.com"}/>
                    <InputField id={"password"} type={"password"} label={"Password"} placeholder={"••••••••"}/>
                    <div className={"flex justify-between"}>
                        <Checkbox id={"remember-me"} align={"center"}>
                            Remember me
                        </Checkbox>
                        <ForgotPassword/>
                    </div>
                    <Button>Create an Account</Button>
                </form>
                <SignUpHere/>
            </div>
        </div>
    );
}

export default SignIn;