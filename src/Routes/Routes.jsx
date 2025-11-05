import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import DetailedSkill from "../pages/DetailedSkill";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "../PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
import ForgetPassword from "../pages/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "detailedSkill/:id",
        element: (
          <PrivateRoute>
            <DetailedSkill></DetailedSkill>
          </PrivateRoute>
        ),
      },
      {
        path: "/myProfile",
        Component: MyProfile,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/update-profile",
    Component: UpdateProfile,
  },
  {
    path: "/forgetPassword",
    Component:ForgetPassword
  }
]);

export default router;
