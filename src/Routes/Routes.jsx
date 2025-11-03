import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root';
import Home from '../pages/Home';
import DetailedSkill from '../pages/DetailedSkill';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MyProfile from '../pages/MyProfile';

const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"detailedSkill/:id",
                Component:DetailedSkill
            },
            {
                path:"/myProfile",
                Component:MyProfile
            }
        ]
    },
    {
        path:"/login",
        Component:Login
    },
    {
        path:"/register",
        Component:Register
    }
])

export default router;