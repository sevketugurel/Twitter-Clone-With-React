import { createBrowserRouter, Routes } from "react-router-dom";
import Home from "~/pages/home";
import Explore from "~/pages/explore";
import Notifications from "~/pages/notification";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/explore",
        element:<Explore />
    },
    {
        path:"/notifications",
        element:<Notifications/>
    }


])
export default routes;