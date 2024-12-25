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
import PrivateRoute from './PrivateRoute';
import BeAVolunteerModal from "../Pages/BeAVolunteerModal";
import ManagePosts from "../Pages/ManagePosts";
import ManageMyPost from "../Pages/ManageMyPost";


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
          element:<PrivateRoute><AllVolunteerPosts></AllVolunteerPosts></PrivateRoute>,
         },
      {
        path:'/volunteer-needs-now/:id',
        element:<PrivateRoute><VolunteerNeedPostDetails></VolunteerNeedPostDetails></PrivateRoute>,
       
       },
       {
        path:'/volunteer-request',
        element:<BeAVolunteerModal></BeAVolunteerModal>
       },
      //  {
      //   path:'/manage-posts',
      //   element:<PrivateRoute><ManagePosts></ManagePosts></PrivateRoute>
      //  }
       {
        path:'/manage-posts',
        element:<PrivateRoute><ManageMyPost></ManageMyPost></PrivateRoute>
       }
      
      ]
    },
  ]);

export default router;