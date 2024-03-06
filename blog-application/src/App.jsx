import AppLayout from "./components/Layout/AppLayout.jsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./components/UI/Dashboard/Dashboard.jsx";
import OurStory from "./components/UI/OurStory/OurStory.jsx";
import Membership from "./components/UI/Membership/Membership.jsx";
import SignIn from "./components/UI/Authentication/SignIn.jsx";
import GetStarted from "./components/UI/GetStarted/GetStarted.jsx";
import Write from "./components/UI/Write/Write.jsx";
import SignUp from "./components/UI/Authentication/SignUp.jsx";
import PageNotFound from "./components/UI/PageNotFound/PageNotFound.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route index element={<Navigate replace={true} to={"dashboard"}/>}/>
                    <Route path={"dashboard"} element={<Dashboard/>}/>
                    <Route path={"our-story"} element={<OurStory/>}/>
                    <Route path={"membership"} element={<Membership/>}/>
                    <Route path={"write"} element={<Write/>}/>
                    <Route path={"sign-in"} element={<SignIn/>}/>
                    <Route path={"sign-up"} element={<SignUp/>}/>
                    <Route path={"get-started"} element={<GetStarted/>}/>
                    <Route path={"*"} element={<PageNotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}