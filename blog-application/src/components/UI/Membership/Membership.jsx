import {useState} from "react";
import MembershipButton from "../Button/MembershipButton.jsx";
import Button from "../Button/Button.jsx";
import {getTitle} from "../../../utilities/Utilities.js";

const plan = {
    starter: {
        description: 'Plan pricing starts at 250 contacts. Select your audience size to calculate your price. The monthly email send limit for Standard plans is 12 times your maximum contact count.*.',
        price: 49
    },
    standard: {
        description: 'Plan pricing starts at 500 contacts. Select your audience size to calculate your price. The monthly email send limit for Standard plans is 12 times your maximum contact count.*.',
        price: 99
    },
    premium: {
        description: 'Plan pricing starts at 1000 contacts. Select your audience size to calculate your price. The monthly email send limit for Standard plans is 12 times your maximum contact count.*.',
        price: 149
    },
    enterprise: {
        description: 'Plan pricing starts at unlimited contacts. Select your audience size to calculate your price. The monthly email send limit for Standard plans is 12 times your maximum contact count.*.',
        price: 249
    }
}

function Membership() {

    const [membershipType, setMembershipType] = useState('standard');

    return (
        <div className={"w-full h-full flex flex-col items-center justify-center"}>
            <div className={"bg-gray-50 grid grid-cols-[3fr,1fr] px-4 py-8 rounded-lg"}>
                <div className={"grid grid-rows-[auto,auto,1fr] gap-y-3 border-r-2 border-black px-8"}>
                    <p className={"text-6xl mb-10 text-slate-800 font-bold"}>Help yourself grow by purchasing a plan</p>
                    <p className={"text-slate-800 text-xl font-bold"}>Choose a pricing plan:</p>
                    <div className={"grid grid-cols-4"}>
                        {Object.entries(plan)
                            .map(p =>
                                <MembershipButton type={p[0]} current={membershipType}
                                                  setMembershipType={setMembershipType}
                                                  key={p[0]}>
                                    {getTitle(p[0])}
                                </MembershipButton>)
                        }
                    </div>
                    <div>
                        <p className={"text-slate-800 text-lg font-bold"}>{getTitle(membershipType)} details:</p>
                        <p className={"text-md text-slate-800"}>{plan[membershipType].description}</p>
                    </div>
                </div>
                <div className={"flex flex-col gap-y-4 px-8 justify-center"}>
                    <p className={"text-2xl font-bold"}>{getTitle(membershipType)} plan</p>
                    <div>
                        <p>Starts at</p>
                        <p className={"text-6xl font-bold"}>${plan[membershipType].price}</p>
                    </div>
                    <Button>Buy Now</Button>
                </div>
            </div>
        </div>
    );
}

export default Membership;