import {isMobile} from "react-device-detect";

function Spinner({extra}) {
    return (
        <div className={`absolute top-1/2 left-1/2 ${isMobile ? `-translate-x-1/2 -translate-y-1/2` : ``} ${extra}`}>
            <img className={"animate-spin-slow"} src={'/logo/react.svg'} alt={'react blog site logo'}/>
        </div>
    );
}

export default Spinner;