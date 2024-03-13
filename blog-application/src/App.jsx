import AppLayout from "./components/Layout/AppLayout.jsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./components/UI/Dashboard/Dashboard.jsx";
import OurStory from "./components/UI/OurStory/OurStory.jsx";
import PageNotFound from "./components/UI/PageNotFound/PageNotFound.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import Blog from "./components/UI/Blog/Blog.jsx";
import {Provider} from "react-redux";
import store from "./store.js";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        }
    }
})

export default function App() {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false}/>
                <BrowserRouter>
                    <Routes>
                        <Route element={<AppLayout/>}>
                            <Route index element={<Navigate replace={true} to={"dashboard"}/>}/>
                            <Route path={"dashboard"} element={<Dashboard/>}/>
                            <Route path={"blog/:blogId"} element={<Blog/>}/>
                            <Route path={"our-story"} element={<OurStory/>}/>
                            <Route path={"*"} element={<PageNotFound/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    );
}