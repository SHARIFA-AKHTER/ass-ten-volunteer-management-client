import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddVolunteerPost from './../Pages/AddVolunteerPost';
import AllVolunteerPosts from './../components/AllVolunteerPosts';
import VolunteerNeedPostDetails from './../Pages/VolunteerNeedPostDetails';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>Page Not Found</h2>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
      
        {
          path:'/add-post',
          element:<AddVolunteerPost></AddVolunteerPost>
         },
         {
          path:'/all-volunteer-posts',
          element:<AllVolunteerPosts></AllVolunteerPosts>,
         },
      {
        path:'/volunteer-needs-now/:id',
        element:<VolunteerNeedPostDetails></VolunteerNeedPostDetails>
       },

      ]
    },
  ]);

export default router;