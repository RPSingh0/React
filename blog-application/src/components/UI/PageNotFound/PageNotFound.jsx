import useMoveBack from "../../hooks/useMoveBack.js";

export default function PageNotFound() {

    const goBack = useMoveBack();

    return (
        <div className={"w-full h-full flex items-center justify-center gap-x-2"}>
            <button onClick={goBack} className={"text-3xl leading-none"}>&larr;</button>
            <p>Still under development 🙄 come back after sometime!</p>
        </div>
    );
}