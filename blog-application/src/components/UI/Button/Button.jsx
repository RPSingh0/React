function Button({children}) {
    return (
        <button className={"bg-blue-500 rounded-lg px-2 py-1 text-center hover:bg-blue-600 transition-all duration-500 shadow-sm shadow-teal-500 hover:shadow-md hover:shadow-blue-600 font-semibold text-white"}>
            {children}
        </button>
    );
}

export default Button;