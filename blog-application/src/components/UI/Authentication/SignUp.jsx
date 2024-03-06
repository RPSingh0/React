import SocialLogin from "./SocialLogin.jsx";
import Button from "../Button/Button.jsx";
import {Checkbox, InputField, SignInHere, SocialManualSeparator} from "../Form/FormFields.jsx";
import {PrivacyPolicy, TermsAndCondition} from "../Form/Policy.jsx";

function SignUp() {
    return (
        <div className={"w-full h-full flex flex-col items-center justify-center"}>
            <div className={"flex flex-col gap-y-4 items-start w-1/2 border-2 border-black px-8 py-4 rounded-lg"}>
                <p className={"text-2xl font-semibold"}>Create your Free Account</p>
                <div className={"grid grid-cols-2 w-full gap-x-4"}>
                    <SocialLogin company={"google"} type={"Sign up"}/>
                    <SocialLogin company={"apple"} type={"Sign up"}/>
                </div>
                <SocialManualSeparator text={"or"}/>
                <form className={"flex flex-col w-full gap-y-4"}>
                    <InputField id={"email"} type={"text"} label={"Your email"} placeholder={"name@domain.com"}/>
                    <InputField id={"password"} type={"password"} label={"Password"} placeholder={"••••••••"}/>
                    <InputField id={"confirm-password"} type={"password"} label={"Confirm password"}
                                placeholder={"••••••••"}/>
                    <Checkbox id={"remember-me"} align={"center"}>
                        By signing up, you are creating a React-Blogs account, and you agree to
                        our <TermsAndCondition/> and <PrivacyPolicy/>
                    </Checkbox>
                    <Button>Create an Account</Button>
                </form>
                <SignInHere/>
            </div>
        </div>
    );
}

export default SignUp;