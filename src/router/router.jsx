import { createBrowserRouter} from "react-router-dom";
import Home from "../components/Home/Home";
import MainLayout from "../mainLayout/MainLayout";
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"signup",
          element:<SignUp/>
        }
    ]
  },
]);

