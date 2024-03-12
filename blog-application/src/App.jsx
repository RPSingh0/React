import AppLayout from "./components/Layout/AppLayout.jsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./components/UI/Dashboard/Dashboard.jsx";
import OurStory from "./components/UI/OurStory/OurStory.jsx";
import Membership from "./components/UI/Membership/Membership.jsx";
import SignIn from "./components/UI/Authentication/SignIn.jsx";
import Write from "./components/UI/Write/Write.jsx";
import SignUp from "./components/UI/Authentication/SignUp.jsx";
import PageNotFound from "./components/UI/PageNotFound/PageNotFound.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import Blog from "./components/UI/Blog/Blog.jsx";
import {Toaster} from "react-hot-toast";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        }
    }
})

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}/>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout/>}>
                        <Route index element={<Navigate replace={true} to={"dashboard"}/>}/>
                        <Route path={"dashboard"} element={<Dashboard/>}/>
                        <Route path={"blog/:blogId"} element={<Blog/>}/>
                        <Route path={"our-story"} element={<OurStory/>}/>
                        <Route path={"membership"} element={<Membership/>}/>
                        <Route path={"write"} element={<Write/>}/>
                        <Route path={"sign-in"} element={<SignIn/>}/>
                        <Route path={"sign-up"} element={<SignUp/>}/>
                        <Route path={"*"} element={<PageNotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <Toaster position={"top-center"} gutter={12} containerStyle={{margin: '8px'}} toastOptions={{
                success: {
                    duration: 3000,
                },
                error: {
                    duration: 5000,
                },
                style: {
                    fontSize: '16px',
                    padding: '16px 24px',
                    backgroundColor: 'white',
                    color: 'gray'
                }
            }}/>
        </QueryClientProvider>
    );
}