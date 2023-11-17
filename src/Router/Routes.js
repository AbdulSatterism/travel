import AboutHome from "../pages/About/AboutHome/AboutHome";
import DestinationHome from "../pages/Destination/DestinationHome/DestinationHome";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../pages/Home/Home/Home");

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/about',
                element: <AboutHome></AboutHome>
            },
            {
                path: '/destination',
                element: <PrivateRoute><DestinationHome></DestinationHome></PrivateRoute>
            }
        ]
    }
]);

export default routes;