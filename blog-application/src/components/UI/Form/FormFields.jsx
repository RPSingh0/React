import {NavLink} from "react-router-dom";
import {useController} from "react-hook-form";

export function InputField({control, name, label, ...rest}) {

    const {field, fieldState} = useController({name, control});

    return (
        <div className={"flex flex-col gap-y-2"}>
            <label htmlFor={name}>{label}</label>
            <input id={name} {...field} {...rest}
                   className={"px-4 block py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus-visible:outline-none text-gray-800"}/>
            {fieldState.error && (
                <span className={"text-red-500"}>
                    {fieldState.error.message}
                </span>
            )}
        </div>
    );
}

export function FileUpload({id, label, required}) {
    return (
        <div className={"flex flex-col gap-y-2"}>
            <label htmlFor={id}>{label}</label>
            <input
                className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-slate-300 focus:outline-none"
                type="file" required={required}/>
        </div>
    );
}

export function Checkbox({id, align, children}) {
    return (
        <div className={`flex flex-row-reverse items-${align} justify-center gap-x-4`}>
            <label htmlFor={id}>
                {children}
            </label>
            <input id={id} type={"checkbox"} className={"w-4 h-4"}/>
        </div>
    );
}

export function SignInHere() {
    return (
        <div>
            Already have an account ?
            <NavLink to={"/sign-in"}>
                <p className={"text-blue-600 inline"}>
                    &nbsp;Sign In here
                </p>
            </NavLink>
        </div>
    );
}

export function SignUpHere() {
    return (
        <div>
            Don&apos;t have an account ?
            <NavLink to={"/sign-up"}>
                <p className={"text-blue-600 inline"}>
                    &nbsp;Sign up here
                </p>
            </NavLink>
        </div>
    );
}

export function ForgotPassword() {
    return (
        <div>
            <NavLink to={"/reset-password"} className={"text-blue-600"}>Forgot password ?</NavLink>
        </div>
    );
}

export function SocialManualSeparator({text}) {
    return (
        <div className={"flex flex-row w-full items-center justify-between gap-x-4"}>
            <div className={"border-[1px] border-black w-full"}></div>
            <div>{text}</div>
            <div className={"border-[1px] border-black w-full"}></div>
        </div>
    );
}