import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter,} from 'react-router-dom';
import Layouts from './layouts/Layouts';
import Dashboard from './pages/Dashboard';
import user_router from './pages/management/user/config/router';
import product_router from './pages/management/product/config/router';

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
                user_router,
                product_router

            ]
        }
    ])

    return (<RouterProvider router={router}></RouterProvider>)
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <Component />
);