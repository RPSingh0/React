function Spinner() {
    return (
        <div className={"absolute top-1/2 left-1/2"}>
            <img className={"animate-spin-slow"} src={'/logo/react.svg'} alt={'react blog site logo'}/>
        </div>
    );
}

export default Spinner;