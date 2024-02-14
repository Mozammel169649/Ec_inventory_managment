import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter,} from 'react-router-dom';
import Layouts from './layouts/Layouts';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
// import user_router from './pages/management/user/config/router';
// import product_router from './pages/management/product/config/router';

function Component() {
    const router = createHashRouter([
        {
            path: "/",
            element : <Layouts></Layouts>,
            children : [
                {
                    path : "",
                    element : <Dashboard></Dashboard>
                },
                {
                    path : "login",
                    element : <Login></Login>
                },
                {
                    path : "register",
                    element : <Register></Register>
                },
                

            ]
        }
    ])

    return (<RouterProvider router={router}></RouterProvider>)
}
const container = document.getElementById('home_app');
const root = createRoot(container);
root.render(
    <Component />
);