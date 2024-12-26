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
import ManageMyPost from "../Pages/ManageMyPost";
import UpdatePost from "../Pages/UpdatePost";
import NotFound from "../components/NotFound";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<NotFound></NotFound>,
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
     
       {
        path:'/manage-posts',
        element:<PrivateRoute><ManageMyPost></ManageMyPost></PrivateRoute>
       },
       {
        path:'/update-post/:id',
        element:<PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>
       }
      
      ]
    },
  ]);

export default router;